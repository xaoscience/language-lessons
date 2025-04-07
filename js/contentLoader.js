import { LANGUAGES, currentLanguage, TranslationManager, ContentManager } from './content.js';
class PageRenderer {
    static renderLanguageSwitcher() {
        const existingContainer = document.getElementById('language-switcher-container');
        if (existingContainer) existingContainer.remove();
        return `<div id="language-switcher-container">${Object.entries(LANGUAGES).map(([code, { nativeName, flagStyle }]) => `<button class="language-switch ${code === currentLanguage ? 'active' : ''}" onclick="switchLanguage('${code}')" aria-label="${nativeName}"><span class="${flagStyle}"></span></button>`).join('')}</div>`;
    }
    static renderNavigation(page) {
        const content = ContentManager.getContent(page);
        const navigation = content?.navigation || ['home'];
        return navigation.map(item => `<a href="#" onclick="loadContent('${item}')" class="nav-link" aria-label="${TranslationManager.get('common', item)}">${TranslationManager.get('common', item)}</a>`).join('');
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