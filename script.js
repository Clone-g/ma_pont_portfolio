document.addEventListener('DOMContentLoaded', () => {
    // Handle Hamburger Menu
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerToggle && navMenu) {
        hamburgerToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a nav link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Handle Hero CTA Buttons Scrolling
    const getInTouchBtn = document.getElementById('hero-get-in-touch');
    const viewExperienceBtn = document.getElementById('hero-view-experience');

    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', () => {
            document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (viewExperienceBtn) {
        viewExperienceBtn.addEventListener('click', () => {
            document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Handle Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const sendBtn = contactForm.querySelector('button');
        
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Basic validation
            const inputs = contactForm.querySelectorAll('.form-input');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) isValid = false;
            });

            if (isValid) {
                const originalText = sendBtn.innerText;
                sendBtn.innerText = 'Sending...';
                sendBtn.disabled = true;

                // Simulate network delay
                setTimeout(() => {
                    alert('Thank you for your message, Khin Su Su Hlaing will get back to you soon!');
                    sendBtn.innerText = originalText;
                    sendBtn.disabled = false;
                    inputs.forEach(input => input.value = '');
                }, 1500);
            } else {
                alert('Please fill out all fields before sending.');
            }
        });
    }
});
