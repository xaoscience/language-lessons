import { LANGUAGES, currentLanguage, TranslationManager, ContentManager } from './content.js';
class PageRenderer {
    static renderLanguageSwitcher() {
        const existingContainer = document.getElementById('language-switcher-container');
        if (existingContainer) existingContainer.remove();
        return `<div id="language-switcher-container">${Object.entries(LANGUAGES).map(([code, { nativeName, flagStyle }]) => `<button class="language-switch ${code === currentLanguage ? 'active' : ''}" onclick="switchLanguage('${code}')" aria-label="${nativeName}"><span class="${flagStyle}"></span></button>`).join('')}</div>`;
    }

    static getPageNavigationLinks(page) {
        const pageOrder = ['home', 'dutch', 'dutch1', 'dutch1_1', 'dutch1_2', 'dutch1_3', 'dutch2', 'exercises', 'exercise1', 'exercise2'];
        const currentIndex = pageOrder.indexOf(page);
        const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
        const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
        
        let links = [];
        links.push(`<a href="#" onclick="loadContent('home')" class="nav-link">${TranslationManager.get('common', 'home')}</a>`);
        
        if (prevPage) {
            links.push(`<a href="#" onclick="loadContent('${prevPage}')" class="nav-link">${TranslationManager.get('common', 'back')}</a>`);
        }
        if (nextPage) {
            links.push(`<a href="#" onclick="loadContent('${nextPage}')" class="nav-link">${TranslationManager.get('common', 'next')}</a>`);
        }
        if (page !== 'exercises') {
            links.push(`<a href="#" onclick="loadContent('exercises')" class="nav-link">${TranslationManager.get('common', 'exercises')}</a>`);
        }
        return links.join('');
    }

    static renderNavigation(page) {
        return this.getPageNavigationLinks(page);
    }

    static renderContent(page) {
        const content = ContentManager.getContent(page);
        if (!content) {
            console.error(`No content found for page: ${page}`);
            return;
        }
        document.getElementById('dynamic-header').innerHTML = `<h1>${TranslationManager.get(page, 'title')}</h1><nav>${this.renderNavigation(page)}</nav>`;
        document.getElementById('content').insertAdjacentHTML('beforebegin', this.renderLanguageSwitcher());
        document.getElementById('content').innerHTML = content.body[currentLanguage] || content.body[DEFAULT_LANGUAGE];
    }
}
function switchLanguage(newLanguage) {
    if (LANGUAGES[newLanguage]) {
        TranslationManager.setLanguage(newLanguage);
        PageRenderer.renderContent(window.currentPage);
    }
}
function loadContent(page) {
    window.currentPage = page;
    PageRenderer.renderContent(page);
}
function toggleContent() {
    const elements = ['content', 'dynamic-header', 'dynamic-footer', 'language-switcher-container'].map(id => document.getElementById(id));
    const isHidden = elements[0].style.display === 'none';
    elements.forEach(el => { if (el) el.style.display = isHidden ? '' : 'none'; });
}
globalThis.loadContent = loadContent;
globalThis.switchLanguage = switchLanguage;
globalThis.toggleContent = toggleContent;
document.addEventListener('DOMContentLoaded', () => loadContent('home'));