const toggleCheckbox = document.getElementById('toggle-checkbox');
const body = document.body;

toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});

window.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    for (let i = 0; i < fadeElements.length; i++) {
        const element = fadeElements[i];
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

        if (isVisible) {
            element.classList.add("visible");
        }
    }
});
