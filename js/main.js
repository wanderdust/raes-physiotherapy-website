/* ============================================================
   main.js — shared interactive behaviour
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initMobileDropdowns();
  initFaqAccordion();
  setActiveNavLink();
});

/* ------------------------------------------------------------
   Mobile navigation drawer
   ------------------------------------------------------------ */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

function closeNav() {
  document.body.classList.remove('nav-open');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
  // Close all accordion dropdowns too
  document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
}

/* ------------------------------------------------------------
   Mobile accordion dropdowns (only active on mobile)
   ------------------------------------------------------------ */
function initMobileDropdowns() {
  document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth > 768) return;

      e.preventDefault();
      const item = link.closest('.has-dropdown');
      const isOpen = item.classList.contains('open');

      // Close all open dropdowns
      document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));

      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ------------------------------------------------------------
   FAQ accordion
   ------------------------------------------------------------ */
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ------------------------------------------------------------
   Active nav link — highlights current page
   ------------------------------------------------------------ */
function setActiveNavLink() {
  const filename = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href && href === filename) {
      link.classList.add('active');
    }
  });
}
