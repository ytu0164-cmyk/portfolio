const root = document.documentElement;
root.classList.add('js');
const themeToggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('tuye-theme');

if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.dataset.theme = 'dark';
}

themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('tuye-theme', next);
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const progress = document.querySelector('.scroll-progress span');
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const value = total > 0 ? (window.scrollY / total) * 100 : 0;
  progress.style.width = `${value}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const copyButton = document.querySelector('.copy-button');
const toast = document.querySelector('.toast');
let toastTimer;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    toast.textContent = '邮箱已复制';
  } catch {
    toast.textContent = '请复制：ytu0164@gmail.com';
  }
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 1800);
});
