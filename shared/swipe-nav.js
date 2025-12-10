/**
 * Swipe Navigation Module
 * Enables swipe gestures from screen edges to navigate between quiz pages
 * Works on both mobile (touch) and desktop (mouse drag)
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        edgeWidth: 50,           // Width of edge zone in pixels (both sides)
        minSwipeDistance: 80,    // Minimum swipe distance to trigger navigation
        maxSwipeTime: 500,       // Maximum time for a valid swipe (ms)
        indicatorSize: 60,       // Size of the visual indicator
        feedbackThreshold: 30    // Distance to show visual feedback
    };

    // State
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isEdgeSwipe = false;
    let swipeDirection = null; // 'left' or 'right'
    let indicator = null;

    /**
     * Get current quiz info from QUIZ_CONFIG
     */
    function getCurrentQuizInfo() {
        if (typeof QUIZ_CONFIG === 'undefined') return null;

        const path = window.location.pathname;
        const filename = path.split('/').pop();

        for (const module of QUIZ_CONFIG.modules) {
            const folderName = module.folder.split('/').pop();

            // Check if we're in this module's folder
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

        if (x <= CONFIG.edgeWidth) {
            return 'left';
        } else if (x >= screenWidth - CONFIG.edgeWidth) {
            return 'right';
        }
        return null;
    }

    /**
     * Create visual indicator element
     */
    function createIndicator() {
        if (indicator) return;

        indicator = document.createElement('div');
        indicator.id = 'swipe-nav-indicator';
        indicator.innerHTML = `
            <div class="swipe-arrow"></div>
            <div class="swipe-label"></div>
        `;
        document.body.appendChild(indicator);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #swipe-nav-indicator {
                position: fixed;
                top: 50%;
                transform: translateY(-50%);
                width: ${CONFIG.indicatorSize}px;
                height: ${CONFIG.indicatorSize * 1.5}px;
                background: rgba(0, 0, 0, 0.7);
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.15s ease;
                pointer-events: none;
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
            }
            #swipe-nav-indicator.visible {
                opacity: 1;
            }
            #swipe-nav-indicator.left {
                left: 10px;
            }
            #swipe-nav-indicator.right {
                right: 10px;
            }
            #swipe-nav-indicator.ready {
                background: rgba(76, 175, 80, 0.85);
            }
            #swipe-nav-indicator.disabled {
                background: rgba(100, 100, 100, 0.6);
            }
            .swipe-arrow {
                font-size: 28px;
                color: white;
                margin-bottom: 4px;
            }
            .swipe-label {
                font-size: 10px;
                color: rgba(255, 255, 255, 0.9);
                text-align: center;
                max-width: 50px;
                line-height: 1.2;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Show indicator with direction and state
     */
    function showIndicator(direction, isReady, label) {
        if (!indicator) createIndicator();

        const arrow = indicator.querySelector('.swipe-arrow');
        const labelEl = indicator.querySelector('.swipe-label');

        indicator.className = 'visible ' + direction;

        if (label === null) {
            indicator.classList.add('disabled');
            arrow.textContent = '🚫';
            labelEl.textContent = '없음';
        } else {
            if (isReady) indicator.classList.add('ready');
            arrow.textContent = direction === 'left' ? '👈' : '👉';
            labelEl.textContent = isReady ? '놓으면 이동' : (direction === 'left' ? '이전' : '다음');
        }
    }

    /**
     * Hide indicator
     */
    function hideIndicator() {
        if (indicator) {
            indicator.className = '';
        }
    }

    /**
     * Handle swipe/drag start
     */
    function handleStart(x, y) {
        const edge = isInEdgeZone(x);
        if (!edge) return;

        startX = x;
        startY = y;
        startTime = Date.now();
        isEdgeSwipe = true;
        swipeDirection = edge;

        // Show initial indicator
        const targetUrl = edge === 'left' ? getPrevQuizUrl() : getNextQuizUrl();
        showIndicator(edge, false, targetUrl);
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
            showIndicator(swipeDirection, isReady, targetUrl);
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
            absDeltaX > absDeltaY * 2 && // More horizontal than vertical
            elapsedTime <= CONFIG.maxSwipeTime) {

            // Determine navigation direction
            if (swipeDirection === 'left' && deltaX > 0) {
                // Swiped right from left edge -> go to previous
                const prevUrl = getPrevQuizUrl();
                if (prevUrl) {
                    window.location.href = prevUrl;
                }
            } else if (swipeDirection === 'right' && deltaX < 0) {
                // Swiped left from right edge -> go to next
                const nextUrl = getNextQuizUrl();
                if (nextUrl) {
                    window.location.href = nextUrl;
                }
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
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            handleStart(touch.clientX, touch.clientY);
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!isEdgeSwipe) return;
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            if (!isEdgeSwipe) return;
            const touch = e.changedTouches[0];
            handleEnd(touch.clientX, touch.clientY);
        });

        document.addEventListener('touchcancel', () => {
            hideIndicator();
            isEdgeSwipe = false;
        });
    }

    /**
     * Initialize mouse events (desktop)
     */
    function initMouseEvents() {
        let isMouseDown = false;

        document.addEventListener('mousedown', (e) => {
            // Only primary button
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
     * Initialize the swipe navigation
     */
    function init() {
        // Only initialize on quiz pages (not main page)
        const isMainPage = window.location.pathname.endsWith('index.html') ||
            window.location.pathname === '/' ||
            window.location.pathname.endsWith('/');

        if (isMainPage) return;

        // Wait for QUIZ_CONFIG to be available
        if (typeof QUIZ_CONFIG === 'undefined') {
            setTimeout(init, 100);
            return;
        }

        createIndicator();
        initTouchEvents();
        initMouseEvents();

        console.log('🔄 Swipe navigation initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for testing
    if (typeof window !== 'undefined') {
        window.swipeNav = {
            getPrevQuizUrl,
            getNextQuizUrl,
            getCurrentQuizInfo
        };
    }
})();
