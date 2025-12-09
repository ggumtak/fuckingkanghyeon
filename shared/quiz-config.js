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
                { id: 11, title: '11회차', subtitle: '12주차 종합', count: 59, icon: '🎓', difficulty: 'hard' },
                { id: 12, title: '12회차', subtitle: '한 줄 완성', count: 53, icon: '💯', difficulty: 'hard' },
                { id: 'linked-list-full', title: '전체 코드', subtitle: 'Set 1+2', count: 48, icon: '📚', file: 'linked-list-full.html' },
                { id: 'blank-practice', title: '백지 복습', subtitle: '직접 코드 작성', count: 0, icon: '✍️', file: 'blank-practice.html' }
            ]
        },
        {
            id: 'database',
            name: '데이터베이스',
            icon: '🗄️',
            folder: 'quizzes/database',
            type: 'v2',
            quizzes: [
                // 시험 유형 1-3: DML (INSERT/UPDATE/DELETE)
                { id: 'set12', title: 'INSERT 구문', subtitle: '데이터 삽입', count: 15, icon: '➕', file: 'database-set12.html' },
                { id: 'set13', title: 'UPDATE/DELETE', subtitle: '수정/삭제 구문', count: 15, icon: '✏️', file: 'database-set13.html' },
                // 시험 유형 4: 함수 결과 예측
                { id: 'set1', title: '함수 (1/4)', subtitle: '형변환·수치·문자열', count: 17, icon: '🔢', file: 'database-set1.html' },
                { id: 'set2', title: '함수 (2/4)', subtitle: '문자열·날짜·MAX', count: 16, icon: '📅', file: 'database-set2.html' },
                { id: 'set3', title: '함수 (3/4)', subtitle: '수치·문자열 계산', count: 10, icon: '🧮', file: 'database-set3.html' },
                { id: 'set4', title: '함수 (4/4)', subtitle: '날짜·순위·분석', count: 11, icon: '📊', file: 'database-set4.html' },
                { id: 'set22', title: '함수 예측', subtitle: '결과 예측 문제', count: 30, icon: '🔮', file: 'database-set22.html' },
                // 시험 유형 5: 데이터 타입 설명
                { id: 'set23', title: '데이터 타입', subtitle: '타입 설명 문제', count: 16, icon: '📖', file: 'database-set23.html' },
                // 시험 유형 6: 필드 작성
                { id: 'set24', title: '필드 작성 (1/4)', subtitle: '타입+제약조건', count: 30, icon: '🏗️', file: 'database-set24.html' },
                { id: 'set8', title: '필드 작성 (2/4)', subtitle: '기본 필드 정의', count: 15, icon: '🔧', file: 'database-set8.html' },
                { id: 'set9', title: '필드 작성 (3/4)', subtitle: '심화 필드 정의', count: 15, icon: '⚙️', file: 'database-set9.html' },
                { id: 'set10', title: '필드 작성 (4/4)', subtitle: '제약조건 필드', count: 15, icon: '🛠️', file: 'database-set10.html' },
                // 시험 유형 7: JOIN 결과
                { id: 'set11', title: 'JOIN 결과', subtitle: 'INNER/LEFT/RIGHT', count: 15, icon: '🔗', file: 'database-set11.html' },
                { id: 'set26', title: 'JOIN 집중', subtitle: '조인 쿼리 모음', count: 15, icon: '🔗', file: 'database-set26.html' },
                // 종합/시험/기말
                { id: 'set5', title: '종합 (1/6)', subtitle: 'DML+함수+타입+JOIN', count: 30, icon: '📝', file: 'database-set5.html' },
                { id: 'set6', title: '종합 (2/6)', subtitle: 'DML+함수+타입+JOIN', count: 30, icon: '📝', file: 'database-set6.html' },
                { id: 'set7', title: '종합 (3/6)', subtitle: 'DML+함수+타입+JOIN', count: 33, icon: '📝', file: 'database-set7.html' },
                { id: 'set25', title: '종합 (4/6)', subtitle: 'DML+함수+타입+JOIN', count: 33, icon: '📝', file: 'database-set25.html' },
                { id: 'set27', title: '종합 (5/6)', subtitle: 'DML+함수+타입+JOIN', count: 33, icon: '📝', file: 'database-set27.html' },
                { id: 'set14', title: '최종 점검 (1/3)', subtitle: 'DML+함수+타입+필드+JOIN', count: 25, icon: '🎯', file: 'database-set14.html' },
                { id: 'set15', title: '최종 점검 (2/3)', subtitle: 'DML+함수+타입+필드+JOIN', count: 25, icon: '🎯', file: 'database-set15.html' },
                { id: 'set16', title: '최종 점검 (3/3)', subtitle: 'DML+함수+타입+필드+JOIN', count: 25, icon: '🎯', file: 'database-set16.html' },
                { id: 'set17', title: '시험 (4/5)', subtitle: 'DML/타입/함수/JOIN', count: 33, icon: '✍️', file: 'database-set17.html' },
                { id: 'set18', title: '시험 (5/5)', subtitle: 'DML/타입/함수/JOIN', count: 33, icon: '✍️', file: 'database-set18.html' },
                { id: 'set19', title: '기말 (1/3)', subtitle: 'DML·함수·타입·JOIN', count: 28, icon: '🎯', file: 'database-set19.html' },
                { id: 'set20', title: '기말 (2/3)', subtitle: 'DML·함수·타입·JOIN', count: 28, icon: '🎯', file: 'database-set20.html' },
                { id: 'set21', title: '기말 (3/3)', subtitle: '실전 응용편', count: 28, icon: '🚀', file: 'database-set21.html' }
            ]
        },
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
                { id: 'set8', title: '세트 8', subtitle: 'Numpy', count: 13, icon: '🔢', file: 'math-set8.html' }
            ]
        },
        {
            id: 'web_projecting',
            name: '웹기획',
            icon: '🌐',
            folder: 'quizzes/web_projecting',
            type: 'v2',
            quizzes: [
                { id: 'set1', title: '객관식 세트 1', subtitle: 'RFP/WBS/IA/UX/페르소나', count: 30, icon: '📋', file: 'web-set1.html' }
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
