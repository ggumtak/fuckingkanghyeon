/**
 * Quiz Configuration File
 * 
 * This file defines all quiz modules (folders/topics).
 * When you add a new folder in the file explorer, just add an entry here.
 * The main page and sidebar will automatically update.
 * 
 * STRUCTURE:
 * - Each module is a folder (e.g., linked_list, stack_queue)
 * - Each module can have multiple quizzes and review modes
 */

const QUIZ_CONFIG = {
    // Application metadata
    meta: {
        title: '연결 리스트 마스터 퀴즈',
        subtitle: 'Python 연결 리스트 코드의 빈칸을 채우며 자료구조를 완벽하게 마스터하세요',
        badge: '🐍 Python 자료구조 퀴즈'
    },

    // Quiz modules (folders)
    // Each module = one folder in the project
    modules: [
        {
            id: 'linked_list',
            name: '연결 리스트',
            icon: '🔗',
            folder: 'quizzes/linked_list',      // Folder name relative to root
            type: 'quiz',               // 'quiz' or 'review'
            quizzes: [
                { id: 1, title: '1회차', subtitle: '골격 & 포인터', count: 46, icon: '📦', difficulty: 'easy' },
                { id: 2, title: '2회차', subtitle: '흐름 제어', count: 35, icon: '🔀', difficulty: 'easy' },
                { id: 3, title: '3회차', subtitle: '내장함수', count: 20, icon: '⚡', difficulty: 'medium' },
                { id: 4, title: '4회차', subtitle: '문법 구조', count: 42, icon: '🔥', difficulty: 'medium' },
                { id: 5, title: '5회차', subtitle: '포인터 흐름', count: 30, icon: '🧩', difficulty: 'medium' },
                { id: 6, title: '6회차', subtitle: '문장 완성', count: 17, icon: '💀', difficulty: 'hard' },
                { id: 7, title: '7회차', subtitle: '1줄 완성 A', count: 27, icon: '🎯', difficulty: 'medium' },
                { id: 8, title: '8회차', subtitle: '1줄 완성 B', count: 23, icon: '🎲', difficulty: 'medium' },
                { id: 9, title: '9회차', subtitle: '핵심 로직', count: 30, icon: '👑', difficulty: 'hard' },
                { id: 10, title: '10회차', subtitle: '백지 스켈레톤', count: 88, icon: '🏆', difficulty: 'hard' },
                { id: 'linked-list-full', title: '전체 코드', subtitle: 'Set 1+2', count: 48, icon: '📚', file: 'linked-list-full.html' },
                { id: 'blank-practice', title: '백지 복습', subtitle: '직접 코드 작성', icon: '✍️', file: 'blank-practice.html' }
            ]
        },
        {
            id: 'database',
            name: '데이터베이스',
            icon: '🗄️',
            folder: 'quizzes/database',
            type: 'v2',
            quizzes: [
                { id: 'set1', title: '세트 1', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set1.html' },
                { id: 'set2', title: '세트 2', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set2.html' },
                { id: 'set3', title: '세트 3', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set3.html' },
                { id: 'set4', title: '세트 4', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set4.html' },
                { id: 'set5', title: '세트 5', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set5.html' },
                { id: 'set6', title: '세트 6', subtitle: '빈칸', count: 27, icon: '📊', file: 'database-set6.html' },
                { id: 'set7', title: '세트 7', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set7.html' },
                { id: 'set8', title: '세트 8', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set8.html' },
                { id: 'set9', title: '세트 9', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set9.html' },
                { id: 'set10', title: '세트 10', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set10.html' },
                { id: 'set11', title: '세트 11', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set11.html' },
                { id: 'set12', title: '세트 12', subtitle: '서술형', count: 27, icon: '✍️', file: 'database-set12.html' }
            ]
        }
    ]
};

/**
 * Get the URL for a quiz
 */
function getQuizUrl(module, quiz) {
    if (quiz.file) {
        // Custom file path
        return `${module.folder}/${quiz.file}`;
    }
    // Standard quiz file pattern
    return `${module.folder}/quiz-${quiz.id}.html`;
}

/**
 * Get total quiz count across all modules
 */
function getTotalQuizCount() {
    let total = 0;
    QUIZ_CONFIG.modules.forEach(module => {
        if (module.type === 'quiz') {
            module.quizzes.forEach(q => {
                if (q.count) total += q.count;
            });
        }
    });
    return total;
}

/**
 * Get total rounds count
 */
function getTotalRounds() {
    let total = 0;
    QUIZ_CONFIG.modules.forEach(module => {
        if (module.type === 'quiz') {
            total += module.quizzes.length;
        }
    });
    return total;
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.QUIZ_CONFIG = QUIZ_CONFIG;
    window.getQuizUrl = getQuizUrl;
    window.getTotalQuizCount = getTotalQuizCount;
    window.getTotalRounds = getTotalRounds;
}
