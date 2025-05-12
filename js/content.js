import { commonTranslations } from './content_data/translations_common.js';
import { dutchTranslations } from './content_data/translations_dutch.js';
import { homeContent } from './content_data/page_home.js';
import { dutchPageContent } from './content_data/page_dutch.js';
import { dutch1PageContent } from './content_data/page_dutch1.js';
import { dutch1_1PageContent } from './content_data/page_dutch1_1.js';
import { dutch1_2PageContent } from './content_data/page_dutch1_2.js';
import { dutch1_3PageContent } from './content_data/page_dutch1_3.js';
import { dutch2PageContent } from './content_data/page_dutch2.js';
import { exercisesPageContent } from './content_data/page_exercises.js';
import { exercise1PageContent } from './content_data/exercise1.js';
import { exercise2PageContent } from './content_data/exercise2.js';

export const LANGUAGES = {
    NL: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', flagStyle: 'fi fi-nl' },
    EN: { name: 'English', nativeName: 'English', flag: '🇬🇧', flagStyle: 'fi fi-gb' },
    FR: { name: 'French', nativeName: 'Français', flag: '🇫🇷', flagStyle: 'fi fi-fr' },
    DE: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', flagStyle: 'fi fi-de' },
    IT: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', flagStyle: 'fi fi-it' },
    PT: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', flagStyle: 'fi fi-pt' },
    SV: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', flagStyle: 'fi fi-sv' }
};
export const DEFAULT_LANGUAGE = 'EN';
export const STORAGE_KEYS = {
    currentLanguage: 'preferred-language',
    previousLanguage: 'previous-language'
};

export let currentLanguage = (() => {
    const storedLang = localStorage.getItem(STORAGE_KEYS.currentLanguage);
    if (storedLang && LANGUAGES[storedLang]) {
        return storedLang;
    }
    // Basic browser language detection (can be expanded)
    const browserLang = navigator.language.split('-')[0].toUpperCase();
    if (LANGUAGES[browserLang]) {
        return browserLang;
    }
    return DEFAULT_LANGUAGE;
})();

class TranslationManager {
    static translations = new Map();
    static addTranslations(namespace, translations) {
        this.translations.set(namespace, translations);
    }
    static get(namespace, key, lang = currentLanguage) {
        const nsTranslations = this.translations.get(namespace);
        if (!nsTranslations) return key;
        return nsTranslations[lang]?.[key] || nsTranslations[DEFAULT_LANGUAGE][key] || key;
    }
    static setLanguage(lang) {
        if (LANGUAGES[lang]) {
            try {
                localStorage.setItem(STORAGE_KEYS.previousLanguage, currentLanguage);
                localStorage.setItem(STORAGE_KEYS.currentLanguage, lang);
                currentLanguage = lang;
            } catch (e) {
                console.warn('LocalStorage not available:', e);
                currentLanguage = lang;
            }
        }
    }
    static getPreviousLanguage() {
        try {
            return localStorage.getItem(STORAGE_KEYS.previousLanguage) || DEFAULT_LANGUAGE;
        } catch (e) {
            console.warn('LocalStorage not available:', e);
            return DEFAULT_LANGUAGE;
        }
    }
}

class ContentManager {
    static content = new Map();
    static addContent(pageId, content) {
        this.content.set(pageId, content);
    }
    static getContent(pageId) {
        return this.content.get(pageId);
    }
    static getStaticContent(pageId) {
        const content = this.getContent(pageId);
        if (!content) return null;
        return convertToStaticLinks(content.body[DEFAULT_LANGUAGE]);
    }
}

// Initialize and add content
// Common translations (available on all pages)
TranslationManager.addTranslations('common', commonTranslations);

// Home page content
ContentManager.addContent('home', homeContent);

// Dutch specific translations
TranslationManager.addTranslations('NL', dutchTranslations);

// Dutch main page content
ContentManager.addContent('dutch', dutchPageContent);

// Dutch lesson content
ContentManager.addContent('dutch1', dutch1PageContent);
ContentManager.addContent('dutch1_1', dutch1_1PageContent);
ContentManager.addContent('dutch1_2', dutch1_2PageContent);
ContentManager.addContent('dutch1_3', dutch1_3PageContent);
ContentManager.addContent('dutch2', dutch2PageContent);

// Exercises overview page
ContentManager.addContent('exercises', exercisesPageContent);

// Specific exercises
ContentManager.addContent('exercise1', exercise1PageContent);
ContentManager.addContent('exercise2', exercise2PageContent);

const STATIC_PAGE_GROUPS = {
    'lessons': {
        title: 'Dutch Course - Lesson 1',
        pages: ['dutch1', 'dutch1_1', 'dutch1_2', 'dutch1_3'],
        staticFile: 'dutch-lesson1.html'
    },
    'exercises': {
        title: 'Dutch Course - Exercises',
        pages: ['exercise1', 'exercise2'],
        staticFile: 'exercises.html'
    }
};

// Make available globally since we're not using modules
globalThis.STATIC_PAGE_GROUPS = STATIC_PAGE_GROUPS;

globalThis.LANGUAGES = LANGUAGES;
globalThis.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
globalThis.currentLanguage = currentLanguage;
globalThis.TranslationManager = TranslationManager;
globalThis.ContentManager = ContentManager;

function convertToStaticLinks(content) {
    return content.replace(
        /onclick="loadContent\('([^']+)'\)"/g,
        'href="$1.html"'
    );
}

// Make available globally
globalThis.convertToStaticLinks = convertToStaticLinks;