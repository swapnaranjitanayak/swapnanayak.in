document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Observer, ScrollToPlugin);

    const hoverImage = document.getElementById('hover-image');

    function showHoverImage(event) {
        hoverImage.style.display = 'block';
        hoverImage.style.left = event.pageX + 30 + 'px';
        hoverImage.style.top = event.pageY - 90 + 'px';
    }

    function hideHoverImage() {
        hoverImage.style.display = 'none';
    }

    document.querySelectorAll('.hero-header').forEach(element => {
        element.addEventListener('mousemove', showHoverImage);
        element.addEventListener('mouseleave', hideHoverImage);
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