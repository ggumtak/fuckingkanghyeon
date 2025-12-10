/**
 * Swipe Navigation Module
 * Enables swipe gestures from screen edges to navigate between quiz pages
 * Works on both mobile (touch) and desktop (mouse drag)
 * 
 * v2: Simplified visual indicator - just a subtle arrow
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        edgeWidth: 40,           // Width of edge zone in pixels
        minSwipeDistance: 60,    // Minimum swipe distance to trigger navigation
        maxSwipeTime: 800,       // Maximum time for a valid swipe (ms)
        feedbackThreshold: 20    // Distance to show visual feedback
    };

    // State
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isEdgeSwipe = false;
    let swipeDirection = null; // 'left' or 'right'
    let indicator = null;
    let styleElement = null;

    /**
     * Get current quiz info from QUIZ_CONFIG
     */
    function getCurrentQuizInfo() {
        if (typeof QUIZ_CONFIG === 'undefined') return null;

        const path = window.location.pathname;
        const filename = path.split('/').pop();

        for (const module of QUIZ_CONFIG.modules) {
            const folderName = module.folder.split('/').pop();

            if (path.includes(folderName)) {
                const quizzes = module.quizzes;

                for (let i = 0; i < quizzes.length; i++) {
                    const quiz = quizzes[i];
                    const quizFile = quiz.file || `quiz-${quiz.id}.html`;

                    if (filename === quizFile || filename.includes(`-${quiz.id}.html`) || filename.includes(`-set${quiz.id}.html`)) {
                        return {
                            module: module,
                            currentIndex: i,
                            quizzes: quizzes,
                            folderName: folderName
                        };
                    }
                }
            }
        }
        return null;
    }

    /**
     * Get previous quiz URL
     */
    function getPrevQuizUrl() {
        const info = getCurrentQuizInfo();
        if (!info || info.currentIndex <= 0) return null;
        const prevQuiz = info.quizzes[info.currentIndex - 1];
        return prevQuiz.file || `quiz-${prevQuiz.id}.html`;
    }

    /**
     * Get next quiz URL
     */
    function getNextQuizUrl() {
        const info = getCurrentQuizInfo();
        if (!info || info.currentIndex >= info.quizzes.length - 1) return null;
        const nextQuiz = info.quizzes[info.currentIndex + 1];
        return nextQuiz.file || `quiz-${nextQuiz.id}.html`;
    }

    /**
     * Check if position is in edge zone
     */
    function isInEdgeZone(x) {
        const screenWidth = window.innerWidth;
        if (x <= CONFIG.edgeWidth) return 'left';
        if (x >= screenWidth - CONFIG.edgeWidth) return 'right';
        return null;
    }

    /**
     * Create minimal visual indicator
     */
    function createIndicator() {
        if (indicator) return;

        // Add styles
        styleElement = document.createElement('style');
        styleElement.textContent = `
            #swipe-indicator {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                font-size: 32px;
                opacity: 0;
                transition: opacity 0.15s ease;
                pointer-events: none;
                z-index: 10000;
                text-shadow: 0 2px 8px rgba(0,0,0,0.5);
                filter: drop-shadow(0 0 4px rgba(255,255,255,0.3));
            }
            #swipe-indicator.left { left: 12px; }
            #swipe-indicator.right { right: 12px; }
            #swipe-indicator.visible { opacity: 0.5; }
            #swipe-indicator.ready { opacity: 0.9; }
            #swipe-indicator.disabled { opacity: 0.2; }
        `;
        document.head.appendChild(styleElement);

        indicator = document.createElement('div');
        indicator.id = 'swipe-indicator';
        document.body.appendChild(indicator);
    }

    /**
     * Show indicator
     */
    function showIndicator(direction, isReady, hasTarget) {
        if (!indicator) createIndicator();

        indicator.className = direction;

        if (!hasTarget) {
            indicator.classList.add('visible', 'disabled');
            indicator.textContent = '🚫';
        } else {
            indicator.classList.add('visible');
            if (isReady) indicator.classList.add('ready');
            indicator.textContent = direction === 'left' ? '◀' : '▶';
        }
    }

    /**
     * Hide indicator
     */
    function hideIndicator() {
        if (indicator) {
            indicator.className = '';
            indicator.textContent = '';
        }
    }

    /**
     * Handle swipe/drag start
     */
    function handleStart(x, y) {
        const edge = isInEdgeZone(x);
        if (!edge) return false;

        startX = x;
        startY = y;
        startTime = Date.now();
        isEdgeSwipe = true;
        swipeDirection = edge;
        return true;
    }

    /**
     * Handle swipe/drag move
     */
    function handleMove(x, y) {
        if (!isEdgeSwipe) return;

        const deltaX = x - startX;
        const absDeltaX = Math.abs(deltaX);

        // Determine if we're swiping in the correct direction
        const isValidDirection = (swipeDirection === 'left' && deltaX > 0) ||
            (swipeDirection === 'right' && deltaX < 0);

        if (absDeltaX > CONFIG.feedbackThreshold && isValidDirection) {
            const targetUrl = swipeDirection === 'left' ? getPrevQuizUrl() : getNextQuizUrl();
            const isReady = absDeltaX >= CONFIG.minSwipeDistance;
            showIndicator(swipeDirection, isReady, targetUrl !== null);
        } else {
            hideIndicator();
        }
    }

    /**
     * Handle swipe/drag end
     */
    function handleEnd(x, y) {
        if (!isEdgeSwipe) return;

        const deltaX = x - startX;
        const deltaY = y - startY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        const elapsedTime = Date.now() - startTime;

        hideIndicator();

        // Check if it's a valid swipe
        if (absDeltaX >= CONFIG.minSwipeDistance &&
            absDeltaX > absDeltaY * 1.5 && // More horizontal than vertical
            elapsedTime <= CONFIG.maxSwipeTime) {

            if (swipeDirection === 'left' && deltaX > 0) {
                const prevUrl = getPrevQuizUrl();
                if (prevUrl) window.location.href = prevUrl;
            } else if (swipeDirection === 'right' && deltaX < 0) {
                const nextUrl = getNextQuizUrl();
                if (nextUrl) window.location.href = nextUrl;
            }
        }

        // Reset state
        isEdgeSwipe = false;
        swipeDirection = null;
        startX = 0;
        startY = 0;
        startTime = 0;
    }

    /**
     * Initialize touch events (mobile)
     */
    function initTouchEvents() {
        let activeTouchId = null;

        document.addEventListener('touchstart', (e) => {
            if (activeTouchId !== null) return; // Already tracking a touch

            const touch = e.touches[0];
            if (handleStart(touch.clientX, touch.clientY)) {
                activeTouchId = touch.identifier;
            }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (activeTouchId === null || !isEdgeSwipe) return;

            // Find our tracked touch
            let touch = null;
            for (let i = 0; i < e.touches.length; i++) {
                if (e.touches[i].identifier === activeTouchId) {
                    touch = e.touches[i];
                    break;
                }
            }
            if (touch) {
                handleMove(touch.clientX, touch.clientY);
            }
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            if (activeTouchId === null) return;

            // Find our tracked touch in changedTouches
            let touch = null;
            for (let i = 0; i < e.changedTouches.length; i++) {
                if (e.changedTouches[i].identifier === activeTouchId) {
                    touch = e.changedTouches[i];
                    break;
                }
            }
            if (touch) {
                handleEnd(touch.clientX, touch.clientY);
            }
            activeTouchId = null;
        }, { passive: true });

        document.addEventListener('touchcancel', () => {
            hideIndicator();
            isEdgeSwipe = false;
            activeTouchId = null;
        }, { passive: true });
    }

    /**
     * Initialize mouse events (desktop)
     */
    function initMouseEvents() {
        let isMouseDown = false;

        document.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isMouseDown = true;
            handleStart(e.clientX, e.clientY);
        });

        document.addEventListener('mousemove', (e) => {
            if (!isMouseDown || !isEdgeSwipe) return;
            handleMove(e.clientX, e.clientY);
        });

        document.addEventListener('mouseup', (e) => {
            if (!isMouseDown) return;
            isMouseDown = false;
            if (isEdgeSwipe) {
                handleEnd(e.clientX, e.clientY);
            }
        });

        document.addEventListener('mouseleave', () => {
            hideIndicator();
            isEdgeSwipe = false;
        });
    }

    /**
     * Initialize
     */
    function init() {
        const isMainPage = window.location.pathname.endsWith('index.html') ||
            window.location.pathname === '/' ||
            window.location.pathname.endsWith('/');

        if (isMainPage) return;

        if (typeof QUIZ_CONFIG === 'undefined') {
            setTimeout(init, 100);
            return;
        }

        createIndicator();
        initTouchEvents();
        initMouseEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    if (typeof window !== 'undefined') {
        window.swipeNav = { getPrevQuizUrl, getNextQuizUrl, getCurrentQuizInfo };
    }
})();
