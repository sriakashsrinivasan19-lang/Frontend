/**
 * ============================================================================
 * AI LEARN ENTERPRISE - STORAGE SERVICE (LOCALSTORAGE PERSISTENCE)
 * ============================================================================
 */

window.StorageService = (function() {
    'use strict';

    const KEYS = {
        USER_PROGRESS: 'ai_learn_progress_v2',
        ENROLLED_COURSES: 'ai_learn_enrolled_courses',
        COMPLETED_LESSONS: 'ai_learn_completed_lessons',
        QUIZ_SCORES: 'ai_learn_quiz_scores',
        BOOKMARKS: 'ai_learn_bookmarks'
    };

    function getItem(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.warn('StorageService read error:', e);
            return defaultValue;
        }
    }

    function setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.warn('StorageService write error:', e);
            return false;
        }
    }

    // High level helpers
    function getProgressData() {
        return getItem(KEYS.USER_PROGRESS, {
            overallProgress: 35,
            lessonsCompleted: 8,
            topicsLearned: 12,
            quizScore: 85,
            streakDays: 5,
            lastActive: new Date().toISOString()
        });
    }

    function saveProgressData(data) {
        return setItem(KEYS.USER_PROGRESS, data);
    }

    function markLessonCompleted(lessonId) {
        const completed = getItem(KEYS.COMPLETED_LESSONS, []);
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            setItem(KEYS.COMPLETED_LESSONS, completed);
            
            // Update counts
            const prog = getProgressData();
            prog.lessonsCompleted = Math.max(prog.lessonsCompleted, completed.length);
            prog.overallProgress = Math.min(100, Math.round((prog.lessonsCompleted / 24) * 100));
            saveProgressData(prog);
        }
        return completed;
    }

    function isLessonCompleted(lessonId) {
        const completed = getItem(KEYS.COMPLETED_LESSONS, []);
        return completed.includes(lessonId);
    }

    function saveQuizResult(category, score, total) {
        const scores = getItem(KEYS.QUIZ_SCORES, []);
        scores.push({
            category: category,
            score: score,
            total: total,
            percentage: Math.round((score / total) * 100),
            date: new Date().toISOString()
        });
        setItem(KEYS.QUIZ_SCORES, scores);

        const prog = getProgressData();
        prog.quizScore = Math.round((score / total) * 100);
        saveProgressData(prog);
    }

    return {
        KEYS: KEYS,
        getItem: getItem,
        setItem: setItem,
        getProgressData: getProgressData,
        saveProgressData: saveProgressData,
        markLessonCompleted: markLessonCompleted,
        isLessonCompleted: isLessonCompleted,
        saveQuizResult: saveQuizResult
    };
})();
