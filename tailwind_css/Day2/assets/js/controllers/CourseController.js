/**
 * ============================================================================
 * AI LEARN ENTERPRISE - COURSE CONTROLLER (CATALOG & LESSON VIEWS)
 * ============================================================================
 */

window.CourseController = (function() {
    'use strict';

    /**
     * Render Course Catalog in courses.html
     */
    function initCatalog() {
        const grid = document.getElementById('courseCatalogGrid');
        if (!grid) return;

        // Check URL parameters for category filter
        const urlParams = new URLSearchParams(window.location.search);
        const initialCategory = urlParams.get('filter') || 'all';

        renderCatalogCards(initialCategory);
        attachCatalogListeners();
    }

    function renderCatalogCards(category = 'all', searchQuery = '') {
        const grid = document.getElementById('courseCatalogGrid');
        if (!grid || !window.CourseModel) return;

        let courses = window.CourseModel.getCoursesByCategory(category);
        if (searchQuery) {
            courses = window.CourseModel.searchCourses(searchQuery);
        }

        if (courses.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full py-16 text-center glass-panel rounded-3xl p-8 border border-white/10">
                    <div class="w-12 h-12 mx-auto rounded-xl bg-white/5 text-slate-400 flex items-center justify-center mb-3">
                        ${window.UIComponents.getIcon('search', 'w-6 h-6')}
                    </div>
                    <h3 class="text-lg font-display font-bold text-white mb-1">No Matching Courses Found</h3>
                    <p class="text-xs text-slate-400">Try adjusting your filter or search keywords</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = courses.map(course => {
            const iconSvg = window.UIComponents ? window.UIComponents.getIcon(course.icon, 'w-6 h-6 text-cyan-400') : '';
            return `
                <div class="glass-panel p-6 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                                ${iconSvg}
                            </div>
                            <span class="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full ${
                                course.difficulty === 'Beginner' 
                                ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20' 
                                : 'bg-purple-400/10 text-purple-300 border border-purple-400/20'
                            }">
                                ${course.difficulty}
                            </span>
                        </div>
                        <h3 class="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            ${course.title}
                        </h3>
                        <p class="text-xs text-slate-300 leading-relaxed mb-4">
                            ${course.shortDesc}
                        </p>
                        <div class="flex items-center gap-4 text-xs font-mono text-slate-400 mb-6 pt-3 border-t border-white/10">
                            <span class="flex items-center gap-1.5">${window.UIComponents.getIcon('clock', 'w-3.5 h-3.5 text-cyan-400')} ${course.duration}</span>
                            <span class="flex items-center gap-1.5">${window.UIComponents.getIcon('book', 'w-3.5 h-3.5 text-purple-400')} ${course.lessonsCount} Lessons</span>
                            <span class="flex items-center gap-1.5 text-emerald-400 font-bold">★ ${course.rating}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <a href="course-detail.html?id=${course.id}" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-xs text-center shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span>Open Curriculum</span>
                            ${window.UIComponents.getIcon('arrowRight', 'w-3.5 h-3.5')}
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    function attachCatalogListeners() {
        const filterButtons = document.querySelectorAll('.catalog-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-cyan-400/20', 'text-cyan-400', 'border-cyan-400/40');
                    b.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
                });
                e.currentTarget.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
                e.currentTarget.classList.add('bg-cyan-400/20', 'text-cyan-400', 'border-cyan-400/40');

                const cat = e.currentTarget.getAttribute('data-category');
                renderCatalogCards(cat);
            });
        });

        const searchInput = document.getElementById('catalogSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                renderCatalogCards('all', e.target.value.trim());
            });
        }
    }

    /**
     * Render Course Detail & Interactive Lesson Player in course-detail.html
     */
    function initDetail() {
        const detailContainer = document.getElementById('courseDetailView');
        if (!detailContainer || !window.CourseModel) return;

        const urlParams = new URLSearchParams(window.location.search);
        const courseId = urlParams.get('id') || 'ai-fundamentals';
        const course = window.CourseModel.getCourseById(courseId);

        renderCourseDetail(course);
    }

    function renderCourseDetail(course) {
        const titleEl = document.getElementById('detailCourseTitle');
        const descEl = document.getElementById('detailCourseDesc');
        const outcomesList = document.getElementById('detailOutcomesList');
        const curriculumSidebar = document.getElementById('detailCurriculumSidebar');
        const activeLessonView = document.getElementById('activeLessonView');

        if (titleEl) titleEl.innerText = course.title;
        if (descEl) descEl.innerText = course.overview;

        if (outcomesList) {
            outcomesList.innerHTML = course.learningOutcomes.map(out => `
                <li class="flex items-start gap-2.5 text-xs text-slate-300">
                    <span class="text-cyan-400 flex-shrink-0 mt-0.5">${window.UIComponents.getIcon('checkCircle', 'w-4 h-4')}</span>
                    <span>${out}</span>
                </li>
            `).join('');
        }

        // Render syllabus sidebar
        if (curriculumSidebar && course.modules.length > 0) {
            curriculumSidebar.innerHTML = course.modules.map((mod, mIdx) => `
                <div class="mb-4">
                    <div class="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2 px-1">
                        <span>${mod.title}</span>
                        <span class="text-cyan-400">${mod.duration}</span>
                    </div>
                    <div class="space-y-1.5">
                        ${mod.lessons.map((les, lIdx) => {
                            const isDone = window.StorageService ? window.StorageService.isLessonCompleted(les.id) : false;
                            return `
                                <button onclick="window.CourseController.selectLesson('${course.id}', ${mIdx}, ${lIdx})" class="w-full text-left p-3 rounded-xl glass-panel border border-white/5 hover:border-cyan-400/40 hover:bg-white/5 transition-all flex items-center justify-between text-xs text-slate-200 group">
                                    <div class="flex items-center gap-2.5">
                                        <span class="text-cyan-400">${window.UIComponents.getIcon(les.type === 'video' ? 'play' : 'book', 'w-3.5 h-3.5')}</span>
                                        <span class="group-hover:text-cyan-400 transition-colors">${les.title}</span>
                                    </div>
                                    <span class="font-mono text-[10px] ${isDone ? 'text-emerald-400' : 'text-slate-500'}">
                                        ${isDone ? 'Completed' : les.duration}
                                    </span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('');

            // Select first lesson by default
            selectLesson(course.id, 0, 0);
        }
    }

    function selectLesson(courseId, moduleIndex, lessonIndex) {
        const course = window.CourseModel.getCourseById(courseId);
        const module = course.modules[moduleIndex];
        if (!module) return;
        const lesson = module.lessons[lessonIndex];
        if (!lesson) return;

        const view = document.getElementById('activeLessonView');
        if (!view) return;

        const isDone = window.StorageService ? window.StorageService.isLessonCompleted(lesson.id) : false;

        view.innerHTML = `
            <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/30 shadow-2xl relative">
                <div class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                    <div>
                        <span class="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/30">
                            ${module.title}
                        </span>
                        <h2 class="text-2xl font-display font-bold text-white mt-2">${lesson.title}</h2>
                    </div>
                    <button onclick="window.CourseController.toggleComplete('${lesson.id}')" id="markCompleteBtn" class="px-5 py-2.5 rounded-xl ${isDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/30'} text-xs font-semibold transition-all flex items-center gap-2">
                        ${window.UIComponents.getIcon('checkCircle', 'w-4 h-4')}
                        <span>${isDone ? 'Marked Completed' : 'Mark as Complete'}</span>
                    </button>
                </div>

                <!-- Main Content -->
                <div class="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 mb-8">
                    <p>${lesson.content}</p>

                    ${lesson.keyPoints ? `
                        <div class="p-5 rounded-2xl bg-white/5 border border-white/10 my-6">
                            <h4 class="text-xs font-mono uppercase font-bold text-cyan-400 mb-3 flex items-center gap-2">
                                ${window.UIComponents.getIcon('zap', 'w-4 h-4')} Key Conceptual Takeaways
                            </h4>
                            <ul class="space-y-2 text-xs text-slate-200">
                                ${lesson.keyPoints.map(pt => `<li class="flex items-start gap-2"><span class="text-cyan-400">▪</span> <span>${pt}</span></li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${lesson.codeExample ? `
                        <div class="mt-6">
                            <div class="flex items-center justify-between text-xs font-mono bg-slate-900 px-4 py-2 rounded-t-xl border border-b-0 border-white/10 text-slate-400">
                                <span>Code Implementation Example</span>
                                <span class="text-cyan-400">Python 3.11</span>
                            </div>
                            <pre class="code-block p-4 rounded-b-xl overflow-x-auto text-xs text-cyan-300 leading-relaxed"><code>${lesson.codeExample}</code></pre>
                        </div>
                    ` : ''}
                </div>

                <!-- Bottom Navigation within course -->
                <div class="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span class="text-slate-400">Tracked in Local Enterprise Telemetry</span>
                    <a href="quiz.html" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-all">
                        <span>Take Topic Assessment</span>
                        ${window.UIComponents.getIcon('arrowRight', 'w-3.5 h-3.5')}
                    </a>
                </div>
            </div>
        `;
    }

    function toggleComplete(lessonId) {
        if (window.StorageService) {
            window.StorageService.markLessonCompleted(lessonId);
            window.NavigationController.showToast('Progress updated! Lesson recorded.', 'checkCircle');
            
            const btn = document.getElementById('markCompleteBtn');
            if (btn) {
                btn.className = 'px-5 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all flex items-center gap-2';
                btn.innerHTML = `${window.UIComponents.getIcon('checkCircle', 'w-4 h-4')} <span>Marked Completed</span>`;
            }
        }
    }

    return {
        initCatalog: initCatalog,
        initDetail: initDetail,
        selectLesson: selectLesson,
        toggleComplete: toggleComplete
    };
})();
