document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Observer, ScrollToPlugin);

    // Smooth scroll to case studies section
    document.querySelector('.case-studies-link').addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#case-studies"});
    });

});

document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect on page load
    gsap.from(".container", { opacity: 0, duration: 0.8 });

    // Add transition effect on navigation links
    document.querySelectorAll(".transition-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Stop default link behavior
            let targetUrl = this.href;

            gsap.to(".container", {
                opacity: 0,
                duration: 0.8,
                onComplete: function() {
                    window.location.href = targetUrl; // Navigate after animation
                }
            });
        });
    });
});
