// Initialize Lucide Icons
lucide.createIcons();

// ========================================
// Theme Toggling (Dark / Light)
// ========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update icon
    const icon = theme === 'dark' ? 'sun' : 'moon';
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = `<i data-lucide="${icon}" style="width: 18px; height: 18px;"></i>`;
        lucide.createIcons();
    }
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    // Check current design for default
    const design = localStorage.getItem('design') || 'glassmorphic';
    if (design === 'magazine') return 'light';

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'dark'; // Default dark for glassmorphic
}

// ========================================
// Design Switching (Glassmorphic / Magazine)
// ========================================
const designToggleBtn = document.getElementById('design-toggle');

// Hero content for each design
const designContent = {
    glassmorphic: {
        title: "Writing on tech, life, and everything between.",
        subtitle: "Welcome to my digital garden. Here you'll find tutorials, thoughts on software architecture, and reflections on continuous learning.",
        logoHtml: '<i data-lucide="terminal" class="logo-icon" style="color: var(--accent-color)"></i><span class="logo-text">Harsha\'s<span>Blog</span></span>',
        defaultTheme: 'dark'
    },
    magazine: {
        title: "Writing on tech, life, and everything between.",
        subtitle: "Welcome to my digital garden. Here you'll find tutorials, thoughts on software architecture, and reflections on continuous learning.",
        logoHtml: '<i data-lucide="terminal" class="logo-icon" style="color: var(--accent-color)"></i><span class="logo-text">Harsha\'s<span>Blog</span></span>',
        defaultTheme: 'light'
    }
};

function setDesign(design) {
    htmlEl.setAttribute('data-design', design);
    localStorage.setItem('design', design);

    // Update hero content if elements exist
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const logo = document.getElementById('blog-logo');

    if (heroTitle && designContent[design]) {
        heroTitle.textContent = designContent[design].title;
    }
    if (heroSubtitle && designContent[design]) {
        heroSubtitle.textContent = designContent[design].subtitle;
    }
    if (logo && designContent[design]) {
        logo.innerHTML = designContent[design].logoHtml;
        lucide.createIcons();
    }

    // Update design toggle icon tooltip
    if (designToggleBtn) {
        const nextDesign = design === 'glassmorphic' ? 'Magazine' : 'Glassmorphic';
        designToggleBtn.title = `Switch to ${nextDesign}`;
    }
}

function getPreferredDesign() {
    return localStorage.getItem('design') || 'glassmorphic';
}

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Set design first (it affects default theme)
    const defaultDesign = getPreferredDesign();
    setDesign(defaultDesign);

    // Then set theme
    const defaultTheme = getPreferredTheme();
    setTheme(defaultTheme);

    // Theme toggle listener
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Design toggle listener
    if (designToggleBtn) {
        designToggleBtn.addEventListener('click', () => {
            const currentDesign = htmlEl.getAttribute('data-design');
            const newDesign = currentDesign === 'glassmorphic' ? 'magazine' : 'glassmorphic';
            setDesign(newDesign);

            // Auto-switch to the design's preferred color theme
            setTheme(designContent[newDesign].defaultTheme);
        });
    }

    // Scroll reveal animation for post content
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.post-content > *').forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(element);
    });
});
