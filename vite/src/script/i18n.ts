import { I18n } from "i18n-js";

const i18n = new I18n();
const languages = [
    { value: 'en', langDirection: 'ltr' },
    { value: 'ar', langDirection: 'rtl' },
    { value: 'fr', langDirection: 'ltr' },
    { value: 'de', langDirection: 'ltr' }
];

/**
 * Loads translations for a specific page.
 * @param page - The page name.
 */
export async function loadTranslations(language: string) {
    let page = getPageName();
    i18n.locale = language;
    const response = await fetch(`../locales/${page}/${language}.json`);
    if (response) {
        const translations = await response.json();
        i18n.store(translations);
    } else {
        console.error("Translations failed to load.")
    }
}

/**
 * Changes the language of the application.
 * @param language - The language code.
 */
export async function changeLanguage(language: string) {
    await loadTranslations(language).then(() => {
        localStorage.setItem('language', language);
        translatePage();
    });
}

/**
 * Translates the page elements with the specified data-i18n attribute.
 */
export function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(
        (element) => {
            if (element.getAttribute('data-i18n'))
                element.innerHTML = i18n.t(element.getAttribute('data-i18n') ?? '', { defaultValue: element.innerHTML });
        }
    )
}

/**
 * Gets the name of the current page.
 * @returns The page name.
 */
export function getPageName() {
    const page = window.location.pathname.split('/').filter(Boolean).pop()?.split('.')[0] ?? '';
    return page === '' || page === 'index' ? 'home' : page;
}

export function getBrowserLanguage() {
    return (navigator.language && languages.map(lang => lang.value).includes(navigator.language.substring(0, 2))) ? navigator.language.substring(0, 2) : 'en';
}

export function getCurrentLang() {
    return localStorage.getItem('language') || getBrowserLanguage();
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadTranslations(getCurrentLang()).then(() => {
        translatePage();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select') as HTMLSelectElement;
    if (languageSelect) {
        languageSelect.value = i18n.locale;
        languageSelect.addEventListener('change', function () {
            changeLanguage(this.value);
        });
    }
});
