// ========================
// BACK TO TOP BUTTON
// ========================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================
// SCROLL ANIMATION OBSERVER
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.className.includes('fade-in-on-scroll') 
                ? 'fadeInOnScroll 0.8s ease-out forwards' 
                : 'slideInOnScroll 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate, .fade-in-on-scroll').forEach(element => {
    observer.observe(element);
});

// ========================
// STAGGERED CARD ANIMATION
// ========================

const skillCards = document.querySelectorAll('.scroll-animate');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ========================
// SMOOTH SCROLL FOR NAVIGATION
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================
// ACTIVE NAV LINK INDICATOR
// ========================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('id');
        
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => {
                link.style.color = '#cfd8dc';
                link.style.backgroundColor = 'transparent';
            });
            
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.style.color = '#081b29';
                activeLink.style.backgroundColor = '#00abf0';
            }
        }
    });
});
