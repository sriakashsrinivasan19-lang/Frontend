/**
 * ============================================================================
 * AI LEARN ENTERPRISE - DASHBOARD CONTROLLER (STUDENT ANALYTICS)
 * ============================================================================
 */

window.DashboardController = (function() {
    'use strict';

    function init() {
        if (!window.StorageService) return;

        const data = window.StorageService.getProgressData();
        const completedList = window.StorageService.getItem(window.StorageService.KEYS.COMPLETED_LESSONS, []);
        const quizHistory = window.StorageService.getItem(window.StorageService.KEYS.QUIZ_SCORES, []);

        // Render Metric Stats
        const statLessons = document.getElementById('dashLessonsCount');
        const statTopics = document.getElementById('dashTopicsCount');
        const statScore = document.getElementById('dashAvgScore');
        const statStreak = document.getElementById('dashStreak');
        const progPercent = document.getElementById('dashProgressPercent');
        const progCircle = document.getElementById('dashProgressCircle');

        if (statLessons) statLessons.innerText = Math.max(data.lessonsCompleted, completedList.length);
        if (statTopics) statTopics.innerText = data.topicsLearned;
        if (statScore) statScore.innerText = `${data.quizScore}%`;
        if (statStreak) statStreak.innerText = `${data.streakDays} Days`;
        if (progPercent) progPercent.innerText = `${data.overallProgress}%`;

        if (progCircle) {
            // Circumference is 2 * PI * 40 ≈ 251.2
            const offset = 251.2 - (251.2 * data.overallProgress) / 100;
            progCircle.style.strokeDashoffset = offset;
        }

        // Render Enrolled Courses List
        renderEnrolledCourses();
        renderAssessmentHistory(quizHistory);
    }

    function renderEnrolledCourses() {
        const list = document.getElementById('dashEnrolledList');
        if (!list || !window.CourseModel) return;

        const allCourses = window.CourseModel.getAllCourses().slice(0, 3);
        list.innerHTML = allCourses.map(course => {
            const iconSvg = window.UIComponents ? window.UIComponents.getIcon(course.icon, 'w-5 h-5 text-cyan-400') : '';
            return `
                <div class="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-3.5">
                        <div class="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                            ${iconSvg}
                        </div>
                        <div>
                            <h4 class="text-sm font-display font-bold text-white">${course.title}</h4>
                            <p class="text-xs text-slate-400">${course.difficulty} • ${course.duration}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                        <a href="course-detail.html?id=${course.id}" class="px-4 py-2 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-xs font-semibold flex items-center gap-1.5 transition-all">
                            <span>Resume</span>
                            ${window.UIComponents.getIcon('play', 'w-3 h-3')}
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderAssessmentHistory(history) {
        const historyContainer = document.getElementById('dashAssessmentHistory');
        if (!historyContainer) return;

        if (!history || history.length === 0) {
            historyContainer.innerHTML = `
                <div class="p-6 rounded-2xl glass-panel text-center text-xs text-slate-400 border border-white/5">
                    No recent assessments recorded yet. Complete an assessment to log telemetry.
                </div>
            `;
            return;
        }

        historyContainer.innerHTML = history.slice(-4).reverse().map(item => `
            <div class="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <span class="text-emerald-400">${window.UIComponents.getIcon('checkCircle', 'w-4 h-4')}</span>
                    <div>
                        <span class="font-bold text-white block">${item.category}</span>
                        <span class="text-[10px] text-slate-400">${new Date(item.date).toLocaleDateString()}</span>
                    </div>
                </div>
                <span class="font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/20">
                    ${item.percentage}% Verified
                </span>
            </div>
        `).join('');
    }

    return {
        init: init
    };
})();
