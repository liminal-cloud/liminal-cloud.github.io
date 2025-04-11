export function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize dark mode based on system preference
    document.documentElement.classList.toggle('dark-mode', prefersDarkScheme.matches);
    darkModeToggle.checked = prefersDarkScheme.matches;

    // Toggle dark mode
    darkModeToggle.addEventListener('change', () => {
        document.documentElement.classList.toggle('dark-mode');
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark-mode', e.matches);
        darkModeToggle.checked = e.matches;
    });
}