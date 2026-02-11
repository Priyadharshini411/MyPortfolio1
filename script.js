// Welcome popup disappears after 3 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('welcomePopup').style.display = 'none';
    }, 3000);
});

// TOC Button toggle
const tocBtn = document.getElementById('tocBtn');
const tocMenu = document.getElementById('tocMenu');

tocBtn.addEventListener('click', () => {
    tocMenu.style.display = tocMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Auto-scroll slides
const slidesContainer = document.querySelector('.slides');
let scrollAmount = 0;
const scrollSpeed = 1; // pixels per frame

function autoScrollSlides() {
    scrollAmount += scrollSpeed;
    if(scrollAmount >= slidesContainer.scrollWidth - slidesContainer.clientWidth){
        scrollAmount = 0;
    }
    slidesContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScrollSlides);
}

autoScrollSlides();
