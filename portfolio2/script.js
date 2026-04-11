// ===================================
// PAGE NAVIGATION FUNCTIONALITY
// ===================================

function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const sectionId = sectionName + '-section';
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    showSection('home');

    // Add smooth navigation click handlers
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('href').substring(1);
            showSection(sectionName);

            // Update active nav link styling
            navLinks.forEach(l => l.style.borderBottom = 'none');
            this.style.borderBottom = '3px solid white';
        });
    });
});

// ===================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const sectionName = href.substring(1);
            showSection(sectionName);
        }
    });
});

// ===================================
// DYNAMIC SKILL HIGHLIGHTING
// ===================================

function initializeSkillAnimation() {
    const cards = document.querySelectorAll('.experience-card, .about-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in';
                observer.unobserve(entry.target);
            }
        });
    });

    cards.forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', initializeSkillAnimation);

// ===================================
// MOBILE MENU TOGGLE (Future Enhancement)
// ===================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = 
            navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}

// ===================================
// CONTACT FORM VALIDATION (Optional)
// ===================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// ANALYTICS & TRACKING (Optional)
// ===================================

console.log('Portfolio site loaded successfully');
console.log('Joshua Stadler - RN, BSN | Healthcare Professional');
