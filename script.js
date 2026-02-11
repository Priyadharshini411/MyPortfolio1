// Select the slides container
const slidesContainer = document.querySelector('.slides');

// Set auto-scroll speed (pixels per interval)
let scrollAmount = 0;
const scrollSpeed = 1; // pixels per frame
const scrollDelay = 10; // milliseconds

function autoScrollSlides() {
    scrollAmount += scrollSpeed;
    if(scrollAmount >= slidesContainer.scrollWidth - slidesContainer.clientWidth){
        // Reset to start when reaching the end
        scrollAmount = 0;
    }
    slidesContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScrollSlides);
}

// Start auto-scrolling
autoScrollSlides();

