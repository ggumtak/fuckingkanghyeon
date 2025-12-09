/**
 * Gemini-Style Sidebar Navigation
 * 
 * Features:
 * - Hamburger menu toggle (open/close)
 * - Dynamic menu from nav-config.js
 * - Collapsible subject groups
 * - Admin panel for page management
 * - Mobile-friendly with overlay
 */

// Sidebar state
let sidebarOpen = false;
let adminMode = false;

// Initialize sidebar when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createSidebar();
    createHamburgerButton();
    createOverlay();
});

// Create the sidebar HTML structure
function createSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.id = 'sidebar';
    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <span class="sidebar-title">퀴즈 네비게이션</span>
            <button class="sidebar-close" onclick="toggleSidebar()" title="닫기">✕</button>
        </div>
        <nav class="sidebar-nav" id="sidebarNav"></nav>
        <div class="sidebar-footer">
            <button class="sidebar-admin-btn" onclick="toggleAdminMode()" title="관리자 모드">
                ⚙️ 관리
            </button>
        </div>
        <div class="admin-panel" id="adminPanel" style="display: none;">
            <div class="admin-header">
                <span>📋 페이지 관리</span>
                <button onclick="toggleAdminMode()">✕</button>
            </div>
            <div class="admin-content" id="adminContent"></div>
            <div class="admin-actions">
                <button onclick="showAddPageForm()">➕ 페이지 추가</button>
                <button onclick="resetNavConfig(); renderSidebarNav(); alert('기본값으로 초기화됨');">🔄 초기화</button>
            </div>
        </div>
    `;
    document.body.prepend(sidebar);
    renderSidebarNav();
}

// Create hamburger button
function createHamburgerButton() {
    const btn = document.createElement('button');
    btn.id = 'hamburgerBtn';
    btn.className = 'hamburger-btn';
    btn.innerHTML = '☰';
    btn.title = '메뉴 열기';
    btn.onclick = toggleSidebar;
    document.body.prepend(btn);
}

// Create overlay for mobile
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    overlay.className = 'sidebar-overlay';
    overlay.onclick = toggleSidebar;
    document.body.prepend(overlay);
}

// Toggle sidebar open/close
function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const btn = document.getElementById('hamburgerBtn');

    if (sidebarOpen) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        // Hide hamburger button when sidebar is open (X is already in sidebar header)
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        // Also close admin panel
        if (adminMode) toggleAdminMode();
    }
}

// Render navigation items from config
function renderSidebarNav() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;

    const config = getNavConfig();
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const homeUrl = typeof getHomeUrl === 'function' ? getHomeUrl() : '../../index.html';

    // Home button at top (like ChatGPT style)
    let html = `
        <a href="${homeUrl}" class="nav-home-btn" title="홈으로">
            <span class="nav-home-icon">🏠</span>
            <span class="nav-home-text">홈</span>
        </a>
        <div class="nav-divider"></div>
    `;

    config.subjects.forEach(subject => {
        html += `
            <div class="nav-group">
                <button class="nav-group-header" onclick="toggleNavGroup('${subject.id}')">
                    <span class="nav-group-icon">${subject.icon}</span>
                    <span class="nav-group-title">${subject.title}</span>
                    <span class="nav-group-arrow ${subject.expanded ? 'expanded' : ''}">▼</span>
                </button>
                <div class="nav-group-items ${subject.expanded ? 'expanded' : ''}" id="navGroup-${subject.id}">
        `;

        subject.pages.forEach(page => {
            const isActive = currentPage === page.id;
            // Use config-based URL if available
            const href = typeof getPageUrl === 'function'
                ? getPageUrl(subject, page)
                : (page.file || `${page.id}.html`);

            // Get progress for this quiz
            const progress = getQuizProgress(page.id);
            const totalCount = page.count || progress.total || 0;
            const progressText = totalCount > 0 ? `(${progress.solved}/${totalCount})` : '';

            html += `
                <a href="${href}" class="nav-item ${isActive ? 'active' : ''}">
                    <span class="nav-item-title">${page.title}</span>
                    ${progressText ? `<span class="nav-item-progress">${progressText}</span>` : ''}
                </a>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    nav.innerHTML = html;
}

/**
 * Get quiz progress from localStorage (supports both v1 and v2 quiz formats)
 */
function getQuizProgress(quizId) {
    // Try v2 format first (for database and other v2 quizzes)
    // quizId format: 'set1', 'set2', etc.
    const setId = quizId.startsWith('set') ? quizId.replace('set', 'set-') : `set-${quizId}`;
    const v2Data = localStorage.getItem(`v2_quiz_progress_${setId}`);

    if (v2Data) {
        try {
            const progress = JSON.parse(v2Data);
            let solved = 0;
            let total = 0;

            if (progress.states) {
                for (const [key, state] of Object.entries(progress.states)) {
                    total++;
                    // v2 uses string values: 'correct', 'self-correct' for correct answers
                    if (state === 'correct' || state === 'self-correct') {
                        solved++;
                    }
                }
            }

            return { solved, total };
        } catch (e) {
            // Fall through to v1 format
        }
    }

    // Try v1 format (for linked list quizzes)
    const quizNum = String(quizId).replace(/[^0-9]/g, '') || quizId;
    const v1Data = localStorage.getItem(`quiz_progress_${quizNum}`);

    if (!v1Data) return { solved: 0, total: 0 };

    try {
        const progress = JSON.parse(v1Data);
        let solved = 0;
        let total = 0;

        if (progress.states) {
            for (const blankNum in progress.states) {
                total++;
                const state = progress.states[blankNum];
                if (state && state.state === 'correct') {
                    solved++;
                }
            }
        }

        return { solved, total };
    } catch (e) {
        return { solved: 0, total: 0 };
    }
}

// Toggle nav group expand/collapse
function toggleNavGroup(subjectId) {
    const group = document.getElementById(`navGroup-${subjectId}`);
    const arrow = group.previousElementSibling.querySelector('.nav-group-arrow');

    group.classList.toggle('expanded');
    arrow.classList.toggle('expanded');

    // Save preference using config-based function
    if (typeof saveNavPreferences === 'function') {
        saveNavPreferences(subjectId, group.classList.contains('expanded'));
    }
}

// Toggle admin mode
function toggleAdminMode() {
    adminMode = !adminMode;
    const panel = document.getElementById('adminPanel');
    const nav = document.getElementById('sidebarNav');

    if (adminMode) {
        panel.style.display = 'block';
        nav.style.display = 'none';
        renderAdminContent();
    } else {
        panel.style.display = 'none';
        nav.style.display = 'block';
    }
}

// Render admin panel content
function renderAdminContent() {
    const content = document.getElementById('adminContent');
    const config = getNavConfig();

    let html = '';

    config.subjects.forEach(subject => {
        html += `
            <div class="admin-subject">
                <div class="admin-subject-header">
                    <span>${subject.icon} ${subject.title}</span>
                    <button onclick="removeSubject('${subject.id}'); renderAdminContent(); renderSidebarNav();" title="삭제">🗑️</button>
                </div>
                <ul class="admin-page-list">
        `;

        subject.pages.forEach(page => {
            html += `
                <li class="admin-page-item">
                    <span>${page.title}</span>
                    <button onclick="removePage('${subject.id}', '${page.id}'); renderAdminContent(); renderSidebarNav();" title="삭제">✕</button>
                </li>
            `;
        });

        html += `
                </ul>
            </div>
        `;
    });

    content.innerHTML = html;
}

// Show add page form
function showAddPageForm() {
    const config = getNavConfig();

    const subjectOptions = config.subjects.map(s =>
        `<option value="${s.id}">${s.title}</option>`
    ).join('');

    const formHtml = `
        <div class="admin-form" id="addPageForm">
            <h4>새 페이지 추가</h4>
            <label>
                과목:
                <select id="newPageSubject">${subjectOptions}</select>
            </label>
            <label>
                파일명 (확장자 제외):
                <input type="text" id="newPageId" placeholder="quiz-7">
            </label>
            <label>
                제목:
                <input type="text" id="newPageTitle" placeholder="7회차: 제목">
            </label>
            <label>
                문제 수:
                <input type="number" id="newPageCount" placeholder="20">
            </label>
            <div class="admin-form-actions">
                <button onclick="submitAddPage()">추가</button>
                <button onclick="document.getElementById('addPageForm').remove();">취소</button>
            </div>
        </div>
    `;

    document.getElementById('adminContent').insertAdjacentHTML('beforeend', formHtml);
}

// Submit add page form
function submitAddPage() {
    const subjectId = document.getElementById('newPageSubject').value;
    const pageId = document.getElementById('newPageId').value.trim();
    const title = document.getElementById('newPageTitle').value.trim();
    const count = parseInt(document.getElementById('newPageCount').value) || null;

    if (!pageId || !title) {
        alert('파일명과 제목을 입력하세요.');
        return;
    }

    addPage(subjectId, { id: pageId, title, count });
    document.getElementById('addPageForm').remove();
    renderAdminContent();
    renderSidebarNav();
    alert(`"${title}" 페이지가 추가되었습니다.`);
}

// Keyboard shortcut: Escape to close sidebar
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarOpen) {
        toggleSidebar();
    }
});
