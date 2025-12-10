/**
 * 전산수학 Quiz - 전체 문제 세트
 * Chapter 01-09 모든 문제 통합
 * set1 ~ set9의 모든 문제를 포함
 */

// Import all sets dynamically
function loadAllQuestions() {
    const allQuestions = [];

    // Load from each set
    [window.set1, window.set2, window.set3, window.set4, window.set5,
    window.set6, window.set7, window.set8, window.set9].forEach(set => {
        if (set && set.questions) {
            allQuestions.push(...set.questions);
        }
    });

    return allQuestions;
}

const setAll = {
    setId: "set-all",
    get questions() {
        return loadAllQuestions();
    }
};

if (typeof window !== 'undefined') window.setAll = setAll;
