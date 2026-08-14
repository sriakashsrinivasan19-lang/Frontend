/**
 * ============================================================================
 * AI LEARN ENTERPRISE - UI COMPONENTS & SVG ICON SYSTEM (NO EMOJIS)
 * ============================================================================
 */

window.UIComponents = (function() {
    'use strict';

    // SVG Icon Dictionary (High precision vector paths)
    const Icons = {
        brain: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
        
        neural: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V11a3 3 0 00-3 3v2.5a2.5 2.5 0 102 0V14a5 5 0 015-5c1.2 0 2.3.5 3 1.3M8 6a4 4 0 00-4 4c0 1.5.8 2.8 2 3.5V15a3 3 0 003 3v2.5a2.5 2.5 0 102 0V18a5 5 0 01-5-5"/></svg>`,
        
        chart: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
        
        sparkles: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
        
        book: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
        
        code: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
        
        terminal: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
        
        eye: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
        
        robot: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`,
        
        shield: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
        
        trophy: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 3v4a5 5 0 005 5h4a5 5 0 005-5V3M5 3h14M5 3H3m16 0h2M12 12v6m-4 3h8"/></svg>`,
        
        cpu: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`,
        
        database: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
        
        map: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
        
        zap: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
        
        checkCircle: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
        
        clock: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
        
        arrowRight: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
        
        externalLink: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
        
        play: `<svg class="w-current h-current" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`,
        
        filter: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>`,
        
        search: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
        
        user: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
        
        lock: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
        
        mail: `<svg class="w-current h-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    };

    /**
     * Get SVG icon markup with specified sizing class
     */
    function getIcon(name, sizeClass = 'w-5 h-5') {
        const iconSvg = Icons[name] || Icons['brain'];
        return iconSvg.replace('w-current h-current', sizeClass);
    }

    /**
     * Render Global Navbar Component
     */
    function renderNavbar(activePage = 'home') {
        const navContainer = document.getElementById('globalNavbar');
        if (!navContainer) return;

        const navLinks = [
            { id: 'home', label: 'Home', href: 'index.html' },
            { id: 'courses', label: 'Courses', href: 'courses.html' },
            { id: 'roadmap', label: 'Roadmap', href: 'roadmap.html' },
            { id: 'quiz', label: 'Assessments', href: 'quiz.html' },
            { id: 'dashboard', label: 'Dashboard', href: 'dashboard.html' },
            { id: 'resources', label: 'Resources', href: 'resources.html' }
        ];

        navContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <!-- Brand Logo -->
                <a href="index.html" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                        <div class="w-full h-full bg-[#060813] rounded-[10px] flex items-center justify-center text-cyan-400">
                            ${getIcon('zap', 'w-5 h-5')}
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                            AI <span class="text-gradient">Learn</span>
                            <span class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">Enterprise</span>
                        </span>
                        <span class="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Future Intelligence</span>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden md:flex items-center gap-1 lg:gap-1.5">
                    ${navLinks.map(link => `
                        <a href="${link.href}" class="px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                            activePage === link.id 
                            ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30' 
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }">
                            ${link.label}
                        </a>
                    `).join('')}
                </nav>

                <!-- Action Controls -->
                <div class="hidden md:flex items-center gap-3">
                    <button onclick="window.NavigationController.openAuthModal('login')" class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                        Sign In
                    </button>
                    <a href="courses.html" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95">
                        <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-[#060813] rounded-[10px] group-hover:bg-opacity-0 font-semibold flex items-center gap-2">
                            <span>Explore Catalog</span>
                            ${getIcon('arrowRight', 'w-4 h-4 group-hover:translate-x-0.5 transition-transform')}
                        </span>
                    </a>
                </div>

                <!-- Mobile Hamburger Button -->
                <button id="mobileMenuToggle" class="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none" aria-label="Toggle Navigation Menu">
                    <svg id="menuIconSvg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Drawer -->
            <div id="mobileDrawer" class="md:hidden hidden glass-panel border-t border-white/10 px-6 py-5 space-y-2.5">
                ${navLinks.map(link => `
                    <a href="${link.href}" class="block py-2 text-sm font-medium ${
                        activePage === link.id ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-400'
                    }">
                        ${link.label}
                    </a>
                `).join('')}
                <div class="pt-4 border-t border-white/10 flex flex-col gap-2">
                    <button onclick="window.NavigationController.openAuthModal('login')" class="w-full py-2.5 rounded-xl border border-white/10 text-sm font-medium text-white hover:bg-white/5">Sign In</button>
                    <a href="courses.html" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-center text-sm font-semibold text-white">Get Started</a>
                </div>
            </div>
        `;

        // Attach mobile toggle listener
        const toggleBtn = document.getElementById('mobileMenuToggle');
        const drawer = document.getElementById('mobileDrawer');
        if (toggleBtn && drawer) {
            toggleBtn.addEventListener('click', () => {
                drawer.classList.toggle('hidden');
            });
        }
    }

    /**
     * Render Global Footer Component
     */
    function renderFooter() {
        const footerContainer = document.getElementById('globalFooter');
        if (!footerContainer) return;

        footerContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
                    <!-- Col 1: Brand Info -->
                    <div class="md:col-span-2 space-y-4">
                        <a href="index.html" class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center p-0.5">
                                <div class="w-full h-full bg-[#060813] rounded-[10px] flex items-center justify-center text-cyan-400">
                                    ${getIcon('zap', 'w-4 h-4')}
                                </div>
                            </div>
                            <span class="font-display font-bold text-xl text-white">AI <span class="text-gradient">Learn</span></span>
                        </a>
                        <p class="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                            Enterprise-grade educational ecosystem engineered for deep comprehension of Artificial Intelligence, Machine Learning, Deep Neural Nets, and Autonomous Agents.
                        </p>
                        <div class="flex items-center gap-3 pt-2 text-slate-400">
                            <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10">Architecture: MVC Enterprise</span>
                            <span class="text-xs font-mono px-2.5 py-1 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">Strict Vector SVG</span>
                        </div>
                    </div>

                    <!-- Col 2: Navigation -->
                    <div>
                        <h4 class="font-display font-semibold text-white text-sm mb-4">Platform Hubs</h4>
                        <ul class="space-y-2.5 text-xs text-slate-400">
                            <li><a href="courses.html" class="hover:text-cyan-400 transition-colors">Course Catalog</a></li>
                            <li><a href="roadmap.html" class="hover:text-cyan-400 transition-colors">Career Pathways</a></li>
                            <li><a href="quiz.html" class="hover:text-cyan-400 transition-colors">Skill Assessments</a></li>
                            <li><a href="dashboard.html" class="hover:text-cyan-400 transition-colors">Student Analytics</a></li>
                            <li><a href="resources.html" class="hover:text-cyan-400 transition-colors">Tech Whitepapers</a></li>
                        </ul>
                    </div>

                    <!-- Col 3: Domains -->
                    <div>
                        <h4 class="font-display font-semibold text-white text-sm mb-4">Core Domains</h4>
                        <ul class="space-y-2.5 text-xs text-slate-400">
                            <li><a href="courses.html?filter=ml" class="hover:text-cyan-400 transition-colors">Machine Learning</a></li>
                            <li><a href="courses.html?filter=dl" class="hover:text-cyan-400 transition-colors">Deep Neural Networks</a></li>
                            <li><a href="courses.html?filter=genai" class="hover:text-cyan-400 transition-colors">Generative AI & LLMs</a></li>
                            <li><a href="courses.html?filter=cv" class="hover:text-cyan-400 transition-colors">Computer Vision</a></li>
                            <li><a href="courses.html?filter=ethics" class="hover:text-cyan-400 transition-colors">AI Alignment & Safety</a></li>
                        </ul>
                    </div>

                    <!-- Col 4: Standards -->
                    <div>
                        <h4 class="font-display font-semibold text-white text-sm mb-4">Governance</h4>
                        <ul class="space-y-2.5 text-xs text-slate-400">
                            <li><a href="index.html#what-is-ai" class="hover:text-cyan-400 transition-colors">Data Pipeline Model</a></li>
                            <li><a href="index.html#types-of-ai" class="hover:text-cyan-400 transition-colors">ANI vs AGI Standards</a></li>
                            <li><a href="resources.html" class="hover:text-cyan-400 transition-colors">Research Citations</a></li>
                            <li><a href="quiz.html" class="hover:text-cyan-400 transition-colors">Certification Verification</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Bottom Copyright -->
                <div class="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2026 AI Learn Enterprise Inc. All rights reserved.</p>
                    <div class="flex items-center gap-6">
                        <a href="#" class="hover:text-slate-400 transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-slate-400 transition-colors">Terms of Enterprise Service</a>
                        <a href="#" class="hover:text-slate-400 transition-colors">Security Compliance</a>
                    </div>
                </div>
            </div>
        `;
    }

    return {
        Icons: Icons,
        getIcon: getIcon,
        renderNavbar: renderNavbar,
        renderFooter: renderFooter
    };
})();
