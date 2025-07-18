document.addEventListener("DOMContentLoaded", function() {
    // Select all elements that should fade in
    const fadeInElements = document.querySelectorAll('.fade-in, .about-image img');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the 'visible' class to trigger the fade-in
                observer.unobserve(entry.target); // Stop observing once it has faded in
            }
        });
    }, options);

    // Observe each fade-in element
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});