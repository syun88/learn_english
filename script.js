const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = 'Light';
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? 'Light' : 'Dark';
});

const searchInput = document.getElementById('exampleSearch');
const examples = Array.from(document.querySelectorAll('#exampleList article'));

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  examples.forEach((example) => {
    const text = `${example.textContent} ${example.dataset.keywords}`.toLowerCase();
    example.style.display = text.includes(query) ? 'grid' : 'none';
  });
});
