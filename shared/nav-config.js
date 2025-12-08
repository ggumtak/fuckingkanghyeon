/**
 * Quiz Navigation Configuration
 * 
 * This module converts QUIZ_CONFIG into sidebar-compatible format.
 * All data comes from quiz-config.js - single source of truth.
 * 
 * Dependencies: quiz-config.js must be loaded first.
 */

// LocalStorage key for user preferences (expanded/collapsed state only)
const NAV_STORAGE_KEY = 'quiz_nav_preferences';

/**
 * Convert QUIZ_CONFIG to navigation format for sidebar
 * This ensures sidebar always matches the config
 */
function buildNavConfigFromQuizConfig() {
    if (typeof QUIZ_CONFIG === 'undefined') {
        console.error('QUIZ_CONFIG not loaded! Make sure quiz-config.js is loaded first.');
        return { subjects: [] };
    }

    const subjects = QUIZ_CONFIG.modules.map(module => {
        return {
            id: module.id,
            title: module.name,
            icon: module.icon,
            folder: module.folder,
            type: module.type,
            expanded: true,
            pages: module.quizzes.map(quiz => ({
                id: quiz.file ? quiz.file.replace('.html', '') : `quiz-${quiz.id}`,
                title: quiz.title + (quiz.subtitle ? ': ' + quiz.subtitle : ''),
                count: quiz.count || null,
                icon: quiz.icon,
                file: quiz.file || `quiz-${quiz.id}.html`
            }))
        };
    });

    return { subjects };
}

/**
 * Get navigation config with user preferences (expand/collapse state)
 */
function getNavConfig() {
    const baseConfig = buildNavConfigFromQuizConfig();

    // Load user preferences for expand/collapse
    try {
        const prefs = localStorage.getItem(NAV_STORAGE_KEY);
        if (prefs) {
            const parsed = JSON.parse(prefs);
            baseConfig.subjects.forEach(subject => {
                if (parsed[subject.id] !== undefined) {
                    subject.expanded = parsed[subject.id];
                }
            });
        }
    } catch (e) {
        console.warn('Failed to load nav preferences:', e);
    }

    return baseConfig;
}

/**
 * Save expand/collapse preferences
 */
function saveNavPreferences(subjectId, expanded) {
    try {
        let prefs = {};
        const stored = localStorage.getItem(NAV_STORAGE_KEY);
        if (stored) prefs = JSON.parse(stored);
        prefs[subjectId] = expanded;
        localStorage.setItem(NAV_STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
        console.warn('Failed to save nav preferences:', e);
    }
}

/**
 * Get the URL for a page within a module
 */
function getPageUrl(subject, page) {
    // Get current path parts and detect folder
    const pathParts = window.location.pathname.split('/');
    const currentFile = pathParts[pathParts.length - 1];
    const currentDirName = pathParts[pathParts.length - 2] || '';

    // Check if we're inside a quiz folder (linked_list, database, etc.)
    const quizFolders = ['linked_list', 'database'];
    const isInQuizFolder = quizFolders.includes(currentDirName);

    // Extract target folder name from subject.folder (e.g., 'quizzes/linked_list' -> 'linked_list')
    const folder = subject.folder || 'quizzes/linked_list';
    const targetFolderName = folder.split('/').pop();
    const file = page.file || `${page.id}.html`;

    if (!isInQuizFolder) {
        // On main page or outside quiz folders - use full path
        return `${folder}/${file}`;
    } else {
        // Inside a quiz folder
        if (currentDirName === targetFolderName) {
            // Same folder - just use filename
            return file;
        } else {
            // Different folder - navigate to sibling
            return `../${targetFolderName}/${file}`;
        }
    }
}

/**
 * Get home URL based on current location
 */
function getHomeUrl() {
    const isMainPage = window.location.pathname.endsWith('quiz.html') ||
        window.location.pathname.endsWith('/');
    return isMainPage ? 'quiz.html' : '../quiz.html';
}

/**
 * Get all quiz pages flattened (for navigation bar)
 */
function getAllQuizPages() {
    const config = getNavConfig();
    const pages = [];

    config.subjects.forEach(subject => {
        if (subject.type === 'quiz') {
            subject.pages.forEach(page => {
                pages.push({
                    ...page,
                    folder: subject.folder,
                    subjectId: subject.id
                });
            });
        }
    });

    return pages;
}

/**
 * Get current quiz number from URL
 */
function getCurrentQuizNumber() {
    const path = window.location.pathname;
    const match = path.match(/quiz-(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

/**
 * Get next quiz URL (for completion modal)
 */
function getNextQuizUrl() {
    const pages = getAllQuizPages();
    const currentNum = getCurrentQuizNumber();

    // Find next quiz
    for (let i = 0; i < pages.length; i++) {
        const pageNum = parseInt(pages[i].id.replace('quiz-', ''));
        if (pageNum === currentNum + 1) {
            return pages[i].file;
        }
    }

    // No next quiz, return home
    return getHomeUrl();
}

/**
 * Check if there's a next quiz
 */
function hasNextQuiz() {
    const pages = getAllQuizPages();
    const currentNum = getCurrentQuizNumber();
    const maxNum = Math.max(...pages.map(p => parseInt(p.id.replace('quiz-', '')) || 0));
    return currentNum < maxNum;
}

// Export for global use
if (typeof window !== 'undefined') {
    window.getNavConfig = getNavConfig;
    window.saveNavPreferences = saveNavPreferences;
    window.getPageUrl = getPageUrl;
    window.getHomeUrl = getHomeUrl;
    window.getAllQuizPages = getAllQuizPages;
    window.getCurrentQuizNumber = getCurrentQuizNumber;
    window.getNextQuizUrl = getNextQuizUrl;
    window.hasNextQuiz = hasNextQuiz;
}
