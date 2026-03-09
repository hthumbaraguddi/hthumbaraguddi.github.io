// Initialize Lucide Icons
lucide.createIcons();

// Theme Toggling Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// Function to set the theme
function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    const icon = theme === 'dark' ? 'sun' : 'moon';
    themeToggleBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
}

// Check for saved theme preference or OS preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    return 'light'; // Default to light if no preference
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    // Determine user preference or default to dark right off the bat
    // The design looks premium in dark out-of-the-box
    const defaultTheme = getPreferredTheme();
    setTheme(defaultTheme);
    
    // Attach listener
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Scroll reveal animation for post content
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
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
