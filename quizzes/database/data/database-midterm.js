/**
 * Database Midterm Quiz - Combined Data
 * Loads all sets and combines them into one quizRound
 * 
 * Usage: Include set1.js, set2.js, set3.js, set4.js BEFORE this file
 */

// Combine all sets into one quizRound
const quizRound = {
    id: 'database-midterm',
    title: '데이터베이스: 중간고사 연습',
    subject: 'database',
    level: 'intermediate',
    tags: ['sqlserver', 'insert', 'update', 'delete', 'function', 'datatype', 'join'],

    // Flatten all questions from all sets
    questions: [
        ...(typeof set1 !== 'undefined' ? set1.questions : []),
        ...(typeof set2 !== 'undefined' ? set2.questions : []),
        ...(typeof set3 !== 'undefined' ? set3.questions : []),
        ...(typeof set4 !== 'undefined' ? set4.questions : []),
        ...(typeof set5 !== 'undefined' ? set5.questions : []),
        ...(typeof set6 !== 'undefined' ? set6.questions : []),
        ...(typeof set7 !== 'undefined' ? set7.questions : []),
        ...(typeof set8 !== 'undefined' ? set8.questions : []),
        ...(typeof set9 !== 'undefined' ? set9.questions : []),
        ...(typeof set10 !== 'undefined' ? set10.questions : []),
        ...(typeof set11 !== 'undefined' ? set11.questions : []),
        ...(typeof set12 !== 'undefined' ? set12.questions : [])
    ]
};

// Export for use in HTML
if (typeof window !== 'undefined') {
    window.quizRound = quizRound;
}
