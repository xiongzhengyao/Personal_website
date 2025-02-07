function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
} 