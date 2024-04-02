import { I18n } from "i18n-js";

const i18n = new I18n();
export async function loadTranslations(page: string) {
    const languages = ['ar', 'en', 'de', 'fr'];
    const locale = (navigator.language && languages.includes(navigator.language.substring(0, 2))) ? navigator.language.substring(0, 2) : 'en';
    const response = await fetch(`../locales/${page}/${locale}.json`);
    if (response) {
        const translations = await response.json();
        i18n.locale = locale;
        i18n.store(translations);
    } else {
        console.error("Translations failed to load.")
    }
}

export function translate(key: string | null, defaultValue: string) {
    if (key) {
        return i18n.t(key);
    }
    return defaultValue;
}