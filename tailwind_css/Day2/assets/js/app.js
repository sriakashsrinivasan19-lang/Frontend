/**
 * ============================================================================
 * AI LEARN ENTERPRISE - MAIN APPLICATION BOOTSTRAP (MVC ROUTER)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Identify current page from body attribute or URL
    const pageId = document.body.getAttribute('data-page') || 'home';

    // Initialize Navigation & UI Framework
    if (window.NavigationController) {
        window.NavigationController.init(pageId);
    }

    // Initialize Page Specific Controllers
    switch(pageId) {
        case 'home':
            initHomePage();
            break;
        case 'courses':
            if (window.CourseController) window.CourseController.initCatalog();
            break;
        case 'course-detail':
            if (window.CourseController) window.CourseController.initDetail();
            break;
        case 'quiz':
            if (window.QuizController) window.QuizController.init();
            break;
        case 'dashboard':
            if (window.DashboardController) window.DashboardController.init();
            break;
        case 'roadmap':
            initRoadmapPage();
            break;
        case 'resources':
            initResourcesPage();
            break;
    }

    /**
     * Home Page Custom Inits (Topic Modal, Pipeline Flow, Home Quiz Preview)
     */
    function initHomePage() {
        // Render 12 Core Topics with SVG Icons
        renderHomeTopicGrid();

        // Initialize embedded quick assessment widget
        if (window.QuizController) {
            window.QuizController.init();
        }
    }

    function renderHomeTopicGrid() {
        const grid = document.getElementById('homeTopicsGrid');
        if (!grid || !window.TopicModel) return;

        const topics = window.TopicModel.getAllTopics();
        grid.innerHTML = topics.map(t => {
            const iconSvg = window.UIComponents ? window.UIComponents.getIcon(t.icon, 'w-6 h-6 text-cyan-400') : '';
            return `
                <div class="topic-card glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between" data-category="${t.category.toLowerCase()}">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                                ${iconSvg}
                            </div>
                            <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                                t.category === 'Beginner' 
                                ? 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20' 
                                : 'bg-purple-400/10 text-purple-300 border border-purple-400/20'
                            }">${t.category}</span>
                        </div>
                        <h3 class="text-lg font-display font-bold text-white mb-2">${t.title}</h3>
                        <p class="text-slate-300 text-xs leading-relaxed mb-4">${t.desc}</p>
                    </div>
                    <button onclick="window.openTopicModal('${t.id}')" class="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-cyan-400/20 text-xs font-medium text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-center gap-1.5">
                        <span>Inspect Domain</span>
                        ${window.UIComponents.getIcon('arrowRight', 'w-3.5 h-3.5')}
                    </button>
                </div>
            `;
        }).join('');
    }

    function initRoadmapPage() {
        // Any roadmap node interactive triggers
    }

    function initResourcesPage() {
        // Any resource filters
    }
});

/**
 * Global Topic Detail Modal Helper
 */
window.openTopicModal = function(topicId) {
    if (!window.TopicModel || !window.UIComponents) return;
    const t = window.TopicModel.getTopicById(topicId);
    if (!t) return;

    let modal = document.getElementById('topicDetailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'topicDetailModal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060813]/85 backdrop-blur-md';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/40 max-w-lg w-full shadow-2xl relative">
            <button onclick="window.closeTopicModal()" class="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div class="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mb-4">
                ${window.UIComponents.getIcon(t.icon, 'w-6 h-6')}
            </div>
            <h3 class="text-2xl font-display font-bold text-white mb-1">${t.title}</h3>
            <div class="flex items-center gap-2 mb-4">
                <span class="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">${t.category}</span>
                <span class="text-xs font-mono text-purple-300 px-2 py-0.5 rounded bg-purple-400/10 border border-purple-400/20">${t.curriculumLevel}</span>
            </div>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">${t.desc}</p>
            
            <div class="p-3.5 rounded-xl bg-slate-900 border border-white/10 mb-4 font-mono text-xs text-cyan-300">
                <span class="text-[10px] text-slate-500 block mb-1 uppercase tracking-wider">Governing Formulation / Architecture</span>
                ${t.keyFormula}
            </div>

            <div class="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                <h4 class="text-xs font-mono uppercase text-slate-400 mb-2">Core Engineering Takeaways</h4>
                <ul class="text-xs text-slate-300 space-y-1.5">
                    ${t.details.map(pt => `<li class="flex items-start gap-2"><span class="text-cyan-400 mt-0.5">▪</span> <span>${pt}</span></li>`).join('')}
                </ul>
            </div>

            <div class="flex items-center gap-3">
                <a href="courses.html" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold text-xs text-center shadow-lg shadow-cyan-500/20">
                    Find Related Courses
                </a>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
};

window.closeTopicModal = function() {
    const modal = document.getElementById('topicDetailModal');
    if (modal) modal.classList.add('hidden');
};

window.filterHomeTopics = function(category) {
    const cards = document.querySelectorAll('.topic-card');
    const btns = document.querySelectorAll('.topic-filter-btn');

    btns.forEach(btn => {
        btn.classList.remove('bg-cyan-400/20', 'text-cyan-400', 'border-cyan-400/40');
        btn.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
    });

    if (window.event && window.event.target) {
        window.event.target.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
        window.event.target.classList.add('bg-cyan-400/20', 'text-cyan-400', 'border-cyan-400/40');
    }

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
};
