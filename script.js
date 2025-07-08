document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking a link
            const navUl = document.querySelector('nav ul');
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            if (navUl && navUl.classList.contains('nav-active')) {
                hamburgerMenu.classList.remove('active');
                navUl.classList.remove('nav-active');
            }
        });
    });

    // Simple scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Hamburger menu logic
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    if (hamburgerMenu && navUl) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navUl.classList.toggle('nav-active');
        });
    }

    // Close nav when a link is clicked (for mobile) - This is now handled within the smooth scrolling logic

    // Project Modal Logic
    const projectModal = document.getElementById('project-modal');
    const modalContent = projectModal.querySelector('.modal-content');
    const closeButton = projectModal.querySelector('.close-button');
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const projectItem = this.closest('.project-item');
            const title = projectItem.dataset.title;
            const imgSrc = projectItem.dataset.imgSrc;
            const description = projectItem.dataset.description;
            const liveLink = projectItem.dataset.liveLink;

            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-link').href = liveLink;

            projectModal.classList.add('visible');
        });
    });

    function closeModal() {
        projectModal.classList.remove('visible');
    }

    closeButton.addEventListener('click', closeModal);

    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeModal();
        }
    });

    // Navbar transparency on scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust this value as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

}); 