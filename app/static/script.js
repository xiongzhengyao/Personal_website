function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Add this function to toggle the visibility of the details section
function toggleDetails() {
    const detailsSection = document.querySelector('.details-section');
    if (detailsSection.style.display === 'none' || detailsSection.style.display === '') {
        detailsSection.style.display = 'block';
    } else {
        detailsSection.style.display = 'none';
    }
} 