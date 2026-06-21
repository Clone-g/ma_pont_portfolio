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

    // Initialize EmailJS
    emailjs.init('QEPIeIu7TYHZnK6fy');

    // Handle Contact Form Submission via EmailJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const sendBtn = contactForm.querySelector('.btn-send');
            const originalText = sendBtn.innerText;
            sendBtn.innerText = 'Sending...';
            sendBtn.disabled = true;

            const nameVal = contactForm.querySelector('[name="name"]').value;
            const emailVal = contactForm.querySelector('[name="email"]').value;
            const titleVal = contactForm.querySelector('[name="title"]').value;
            const messageVal = contactForm.querySelector('[name="message"]').value;

            emailjs.send('service_q650vis', 'template_8ia8egc', {
                name: nameVal,
                from_name: nameVal,
                email: emailVal,
                title: titleVal,
                message: messageVal
            })
                .then(() => {
                    sendBtn.innerText = '✓ Message Sent!';
                    sendBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    contactForm.reset();

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        sendBtn.innerText = originalText;
                        sendBtn.style.background = '';
                        sendBtn.disabled = false;
                    }, 3000);
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    sendBtn.innerText = '✗ Failed to Send';
                    sendBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

                    // Reset button after 3 seconds
                    setTimeout(() => {
                        sendBtn.innerText = originalText;
                        sendBtn.style.background = '';
                        sendBtn.disabled = false;
                    }, 3000);
                });
        });
    }
});
