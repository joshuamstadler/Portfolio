function showSection(sectionName) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach((section) => section.classList.remove('active'));

  const selectedSection = document.getElementById(sectionName + '-section');
  if (selectedSection) {
    selectedSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link) => link.classList.remove('active'));

  const activeLink = document.querySelector(`.nav-links a[href="#${sectionName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function initializeSkillAnimation() {
  const cards = document.querySelectorAll('.experience-card, .about-card, .contact-item');

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => {
      card.style.animation = 'fadeIn 0.6s ease-in';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-in';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => observer.observe(card));
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('home');

  const navLinks = document.querySelectorAll('.nav-links a, .btn[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        showSection(href.substring(1));
      }
    });
  });

  initializeSkillAnimation();
  console.log('Portfolio site loaded successfully');
  console.log('Joshua Stadler - RN, BSN | Healthcare Professional');
});
