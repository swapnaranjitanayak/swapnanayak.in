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

// document.addEventListener("DOMContentLoaded", function () {
//     function toSentenceCase(text) {
//       return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
//     }
  
//     document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => {
//       header.textContent = toSentenceCase(header.textContent);
//     });
//   });