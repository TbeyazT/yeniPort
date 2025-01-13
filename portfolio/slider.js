let slider = document.querySelector(".slider");
let scrollAmount = 0;
let scrollStep = 1; // Pixels to scroll each time
let maxScroll = slider.scrollWidth - slider.clientWidth;

function scroll() {
    scrollAmount += scrollStep;

    // Scroll the slider
    slider.scrollLeft = scrollAmount;

    // Reset scrollAmount when the end is reached
    if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
    }
}

// Update maxScroll whenever the slider size or content changes
window.addEventListener("resize", () => {
    maxScroll = slider.scrollWidth - slider.clientWidth;
});

// Run the scroll function repeatedly
setInterval(scroll, 30);
