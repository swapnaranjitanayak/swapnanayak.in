document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Observer, ScrollToPlugin);

    // Smooth scroll to case studies section
    document.querySelector('.case-studies-link').addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#case-studies"});
    });

});