/**
 * ============================================================================
 * AI LEARN ENTERPRISE - NAVIGATION CONTROLLER
 * ============================================================================
 */

window.NavigationController = (function() {
    'use strict';

    function init(activePage = 'home') {
        if (window.UIComponents) {
            window.UIComponents.renderNavbar(activePage);
            window.UIComponents.renderFooter();
        }
        if (window.ParticleCanvas) {
            window.ParticleCanvas.init('neuralCanvas');
        }
    }

    function showToast(message, iconName = 'zap') {
        let toast = document.getElementById('toastNotification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toastNotification';
            toast.className = 'fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 glass-panel px-5 py-3.5 rounded-2xl border border-cyan-400/40 text-xs font-medium text-white shadow-2xl flex items-center gap-3';
            document.body.appendChild(toast);
        }

        const iconSvg = window.UIComponents ? window.UIComponents.getIcon(iconName, 'w-4 h-4 text-cyan-400') : '';
        toast.innerHTML = `${iconSvg} <span>${message}</span>`;
        toast.classList.remove('translate-y-24', 'opacity-0');

        setTimeout(() => {
            toast.classList.add('translate-y-24', 'opacity-0');
        }, 3200);
    }

    function openAuthModal(mode = 'login') {
        let modal = document.getElementById('authModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'authModal';
            modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060813]/85 backdrop-blur-md';
            modal.innerHTML = `
                <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-400/40 max-w-md w-full shadow-2xl relative">
                    <button onclick="window.NavigationController.closeAuthModal()" class="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                    <div class="text-center mb-6">
                        <div class="w-12 h-12 mx-auto rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-3">
                            ${window.UIComponents ? window.UIComponents.getIcon('user', 'w-6 h-6') : ''}
                        </div>
                        <h3 class="text-2xl font-display font-bold text-white">Enterprise Sign In</h3>
                        <p class="text-xs text-slate-400 mt-1">Access personalized learning metrics & synced progress</p>
                    </div>
                    <form onsubmit="window.NavigationController.handleAuthSubmit(event)" class="space-y-4">
                        <div>
                            <label class="block text-xs font-mono text-slate-300 mb-1">Corporate or Personal Email</label>
                            <input type="email" required placeholder="engineer@enterprise.ai" class="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400">
                        </div>
                        <div>
                            <label class="block text-xs font-mono text-slate-300 mb-1">Access Token / Password</label>
                            <input type="password" required placeholder="••••••••••••" class="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400">
                        </div>
                        <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Authenticate Session
                        </button>
                    </form>
                    <p class="text-center text-[11px] text-slate-500 mt-4">
                        Secured with end-to-end telemetry and token authorization.
                    </p>
                </div>
            `;
            document.body.appendChild(modal);
        } else {
            modal.classList.remove('hidden');
        }
    }

    function closeAuthModal() {
        const modal = document.getElementById('authModal');
        if (modal) modal.classList.add('hidden');
    }

    function handleAuthSubmit(e) {
        e.preventDefault();
        closeAuthModal();
        showToast('Authentication verified. Learning profile loaded.', 'checkCircle');
    }

    return {
        init: init,
        showToast: showToast,
        openAuthModal: openAuthModal,
        closeAuthModal: closeAuthModal,
        handleAuthSubmit: handleAuthSubmit
    };
})();
