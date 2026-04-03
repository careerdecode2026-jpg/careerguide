// Sidebar toggle for mobile
const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

function openSidebar()  { sidebar.classList.add('open');  overlay.classList.add('show'); }
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('show'); }

hamburger.addEventListener('click', () => sidebar.classList.contains('open') ? closeSidebar() : openSidebar());
overlay.addEventListener('click', closeSidebar);

// Highlight active page in sidebar
const links = document.querySelectorAll('.sidebar a');
const current = window.location.pathname.split('/').pop() || 'index.html';
links.forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === current) a.classList.add('active');
});
