/**
 * Quiz Configuration File
 * 
 * This file defines all quiz modules (folders/topics).
 * When you add a new folder in the file explorer, just add an entry here.
 * The main page and sidebar will automatically update.
 * 
 * STRUCTURE:
 * - Each module is a folder (e.g., computational_math, web_projecting)
 * - Each module can have multiple quizzes
 * - All modules use v2 quiz engine
 */

const QUIZ_CONFIG = {
    // Application metadata
    meta: {
        title: '시험 대비 퀴즈',
        subtitle: '전산수학, 웹기획 등 다양한 과목의 퀴즈를 풀어보세요',
        badge: '📚 Quiz Master'
    },

    // Quiz modules (folders)
    // Each module = one folder in the project
    modules: [
        {
            id: 'computational_math',
            name: '전산수학',
            icon: '🔢',
            folder: 'quizzes/computational_math',
            type: 'v2',
            quizzes: [
                { id: 'set1', title: '세트 1', subtitle: '변수/문자열', count: 10, icon: '📝', file: 'math-set1.html' },
                { id: 'set2', title: '세트 2', subtitle: '리스트/딕셔너리', count: 12, icon: '📋', file: 'math-set2.html' },
                { id: 'set3', title: '세트 3', subtitle: '조건/반복/함수', count: 17, icon: '🔄', file: 'math-set3.html' },
                { id: 'set4', title: '세트 4', subtitle: '함수 심화', count: 10, icon: '⚡', file: 'math-set4.html' },
                { id: 'set5', title: '세트 5', subtitle: '클래스/모듈', count: 9, icon: '🏗️', file: 'math-set5.html' },
                { id: 'set6', title: '세트 6', subtitle: 'Pandas 기초', count: 14, icon: '🐼', file: 'math-set6.html' },
                { id: 'set7', title: '세트 7', subtitle: 'Pandas 심화', count: 11, icon: '📊', file: 'math-set7.html' },
                { id: 'set8', title: '세트 8', subtitle: 'Numpy', count: 13, icon: '🔢', file: 'math-set8.html' },
                { id: 'set9', title: '세트 9', subtitle: '추가 문제', count: 35, icon: '➕', file: 'math-set9.html' },
                { id: 'set-all', title: '전체 문제', subtitle: '모든 문제 (섞기 가능)', count: 131, icon: '🎯', file: 'math-all.html' }
            ]
        },
        {
            id: 'web_projecting',
            name: '웹기획',
            icon: '🌐',
            folder: 'quizzes/web_projecting',
            type: 'v2',
            quizzes: [
                { id: 'set1', title: '세트 1', subtitle: 'RFP/WBS/IA/UX/페르소나', count: 30, icon: '📋', file: 'web-set1.html' },
                { id: 'set2', title: '세트 2', subtitle: 'RFP/WBS 심화', count: 30, icon: '📝', file: 'web-set2.html' },
                { id: 'set3', title: '세트 3', subtitle: 'IA 정보구조 심화', count: 30, icon: '🗺️', file: 'web-set3.html' },
                { id: 'set4', title: '세트 4', subtitle: 'UI/UX 심화', count: 30, icon: '🎨', file: 'web-set4.html' }
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

/**
 * Get current page info (module and quiz index)
 */
function getCurrentPageInfo() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    for (const module of QUIZ_CONFIG.modules) {
        // Check if current path contains the module folder
        if (path.includes(module.folder) || path.includes(module.id)) {
            const quizzes = module.quizzes;
            for (let i = 0; i < quizzes.length; i++) {
                const quiz = quizzes[i];
                const expectedFile = quiz.file || `quiz-${quiz.id}.html`;
                if (filename === expectedFile) {
                    return { module, quizIndex: i, quiz };
                }
            }
        }
    }
    return null;
}

/**
 * Check if previous quiz exists
 */
function hasPrevQuiz() {
    const info = getCurrentPageInfo();
    return info && info.quizIndex > 0;
}

/**
 * Check if next quiz exists
 */
function hasNextQuiz() {
    const info = getCurrentPageInfo();
    return info && info.quizIndex < info.module.quizzes.length - 1;
}

/**
 * Get previous quiz URL
 */
function getPrevQuizUrl() {
    const info = getCurrentPageInfo();
    if (!info || info.quizIndex <= 0) return null;
    const prevQuiz = info.module.quizzes[info.quizIndex - 1];
    return prevQuiz.file || `quiz-${prevQuiz.id}.html`;
}

/**
 * Get next quiz URL
 */
function getNextQuizUrl() {
    const info = getCurrentPageInfo();
    if (!info || info.quizIndex >= info.module.quizzes.length - 1) return null;
    const nextQuiz = info.module.quizzes[info.quizIndex + 1];
    return nextQuiz.file || `quiz-${nextQuiz.id}.html`;
}

/**
 * Get home URL
 */
function getHomeUrl() {
    return '../../index.html';
}

/**
 * Get prev/next quiz info for display
 */
function getPrevQuizInfo() {
    const info = getCurrentPageInfo();
    if (!info || info.quizIndex <= 0) return null;
    return info.module.quizzes[info.quizIndex - 1];
}

function getNextQuizInfo() {
    const info = getCurrentPageInfo();
    if (!info || info.quizIndex >= info.module.quizzes.length - 1) return null;
    return info.module.quizzes[info.quizIndex + 1];
}

// Export navigation functions
if (typeof window !== 'undefined') {
    window.getCurrentPageInfo = getCurrentPageInfo;
    window.hasPrevQuiz = hasPrevQuiz;
    window.hasNextQuiz = hasNextQuiz;
    window.getPrevQuizUrl = getPrevQuizUrl;
    window.getNextQuizUrl = getNextQuizUrl;
    window.getHomeUrl = getHomeUrl;
    window.getPrevQuizInfo = getPrevQuizInfo;
    window.getNextQuizInfo = getNextQuizInfo;
}
