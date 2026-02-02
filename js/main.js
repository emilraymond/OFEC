/**
 * main.js - Shared logic for OEC Church Website
 */

// Save language preference and allow the link to proceed
function switchLanguage(lang) {
    localStorage.setItem('church_lang', lang);
}

// Execute when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Detect current page language from the <html lang="..."> attribute
    const currentLang = document.documentElement.lang || 'ar';

    console.log(`OEC Site Loaded in: ${currentLang}`);

    // Logic for loading dynamic placeholders
    initializePlaceholders(currentLang);
});

function initializePlaceholders(lang) {
    const newsElement = document.getElementById('news-placeholder');

    if (newsElement) {
        if (lang === 'ar') {
            newsElement.innerText = "جاري تحميل أحدث الأخبار من الكنيسة...";
        } else {
            newsElement.innerText = "Loading latest church news...";
        }
    }
}