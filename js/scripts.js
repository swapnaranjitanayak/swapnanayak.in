document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Observer, ScrollToPlugin);

    // Smooth scroll to case studies section
    document.querySelector('.case-studies-link').addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: "#case-studies"});
    });

    // Update the copyright year dynamically
    const currentYearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    document.querySelectorAll('.profile-pic').forEach(profilePic => {
        profilePic.addEventListener('mousemove', (e) => {
            const rect = profilePic.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            const img = profilePic.querySelector('img');
            img.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${deltaY * -10}deg)`;
        });

        profilePic.addEventListener('mouseleave', () => {
            const img = profilePic.querySelector('img');
            img.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });

});