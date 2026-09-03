/**
 * Nalanda College of Engineering (NCE Chandi)
 * Main Frontend Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccessibilityControls();
  initMobileNav();
  initHeroSlider();
  initNoticeTabs();
  initModals();
});

/* ================= ACCESSIBILITY CONTROLS ================= */
function initAccessibilityControls() {
  const btnDecrease = document.getElementById('font-decrease');
  const btnNormal = document.getElementById('font-normal');
  const btnIncrease = document.getElementById('font-increase');
  const btnTheme = document.getElementById('theme-toggle');

  if (btnDecrease) {
    btnDecrease.addEventListener('click', () => {
      document.body.classList.remove('font-large');
      document.body.classList.add('font-small');
      showToast('Accessibility', 'Font size adjusted to Small');
    });
  }

  if (btnNormal) {
    btnNormal.addEventListener('click', () => {
      document.body.classList.remove('font-small', 'font-large');
      showToast('Accessibility', 'Font size reset to Default');
    });
  }

  if (btnIncrease) {
    btnIncrease.addEventListener('click', () => {
      document.body.classList.remove('font-small');
      document.body.classList.add('font-large');
      showToast('Accessibility', 'Font size adjusted to Large');
    });
  }

  // Contrast / Dark Mode Toggle
  if (btnTheme) {
    const savedTheme = localStorage.getItem('nce_theme');
    if (savedTheme === 'high-contrast') {
      document.body.classList.add('high-contrast');
    }

    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const isContrast = document.body.classList.contains('high-contrast');
      localStorage.setItem('nce_theme', isContrast ? 'high-contrast' : 'default');
      showToast('Display Mode', isContrast ? 'High Contrast Mode Enabled' : 'Normal Mode Restored');
    });
  }
}

/* ================= MOBILE NAVIGATION ================= */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navList = document.getElementById('nav-list');

  if (!toggleBtn || !navList) return;

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Close nav when clicking on nav links (on mobile)
  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('open');
      }
    });
  });
}

/* ================= HERO SLIDER ================= */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.slider-indicators .indicator');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const sliderContainer = document.querySelector('.hero-slider');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;
  const slideDuration = 5500;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Pause on hover
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

/* ================= NOTICE BOARD TABS ================= */
function initNoticeTabs() {
  const tabBtns = document.querySelectorAll('.notice-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button states
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update tab pane visibility
      tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === targetTab);
      });
    });
  });
}

/* ================= MODALS SYSTEM ================= */
function initModals() {
  // Open modal buttons
  const openButtons = document.querySelectorAll('.open-modal-btn');
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Close buttons
  const closeButtons = document.querySelectorAll('.modal-close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  // Click outside to close
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Esc key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => {
        if (overlay.classList.contains('open')) {
          closeModal(overlay.id);
        }
      });
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ================= FORM ACTIONS ================= */
function handleModalFormSubmit(modalId, title, message) {
  closeModal(modalId);
  showToast(title, message);
}

function handleFormSubmit(title, message) {
  showToast(title, message);
  const form = document.getElementById('contact-form');
  if (form) form.reset();
}

function handleTrackSubmit() {
  const input = document.getElementById('track-id-input');
  const resultDiv = document.getElementById('track-result');
  if (!input || !resultDiv) return;

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <i class="fa-solid fa-circle-check"></i> <strong>Docket: ${escapeHtml(input.value)}</strong><br>
    Status: <strong>Under Active Scrutiny</strong><br>
    Assigned To: Dean of Academic Affairs & Administration Committee.<br>
    Last Updated: Just now. Expected Resolution: 2 Business Days.
  `;
}

/* ================= TOAST NOTIFICATIONS ================= */
function showToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-bell" style="color: var(--accent-color); font-size: 1.1rem; margin-top: 0.1rem;"></i>
    <div>
      <strong style="display:block; margin-bottom: 0.15rem;">${escapeHtml(title)}</strong>
      <span>${escapeHtml(message)}</span>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4500);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}
