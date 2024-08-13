// script.js

const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const themeIconOff = document.getElementById('theme-icon-off');
const themeIconOn = document.getElementById('theme-icon-on');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  rootElement.classList.add(currentTheme);

  if (currentTheme === 'dark-mode') {
    themeToggle.checked = true;
    themeIconOff.style.display = 'none';
    themeIconOn.style.display = 'inline';
  }
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    rootElement.classList.add('dark-mode');
    themeIconOff.style.display = 'none';
    themeIconOn.style.display = 'inline';
    localStorage.setItem('theme', 'dark-mode');
  } else {
    rootElement.classList.remove('dark-mode');
    themeIconOff.style.display = 'inline';
    themeIconOn.style.display = 'none';
    localStorage.setItem('theme', 'light');
  }
});
