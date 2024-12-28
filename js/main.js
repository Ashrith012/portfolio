// DOM Elements
const modal = document.getElementById('socialModal');
const contactBtn = document.querySelector('.contact-btn');
const closeModal = document.querySelector('.close-modal');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links li a');
const navbar = document.querySelector('.navbar');

// Modal functionality
const handleModal = {
    open: () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    },
    close: () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
};

// Navigation functionality
const navigation = {
    toggleMobileMenu: () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    },
    closeMobileMenu: () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    },
    handleScroll: () => {
        navbar.classList.toggle('sticky', window.scrollY > 0);
        
        // Update active section
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }
};

// Projects panel functionality
const toggleMoreProjects = () => {
    const panel = document.querySelector('.more-projects-panel');
    panel.classList.toggle('active');
    document.body.classList.toggle('panel-open');
};

// Event Listeners
// Modal events
contactBtn.addEventListener('click', handleModal.open);
closeModal.addEventListener('click', handleModal.close);
window.addEventListener('click', (e) => {
    if (e.target === modal) handleModal.close();
});

// Navigation events
hamburger.addEventListener('click', navigation.toggleMobileMenu);
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigation.closeMobileMenu();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navigation.closeMobileMenu();
    }
});

// Scroll event
window.addEventListener('scroll', navigation.handleScroll);



