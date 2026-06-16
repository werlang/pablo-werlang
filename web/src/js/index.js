import '../css/index.css';

import TemplateVar from './helpers/template-var.js';

const navRoot = document.querySelector('[data-nav-root]');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const observedSections = navLinks
    .map(link => document.querySelector(link.hash))
    .filter(Boolean);

/**
 * Highlights the navigation entry that matches the section most visible in the viewport.
 */
function bindSectionHighlighter() {
    if (!('IntersectionObserver' in window) || !navRoot) {
        return;
    }

    const observer = new IntersectionObserver(entries => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!visible) {
            return;
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.hash === `#${visible.target.id}`);
        });
    }, {
        rootMargin: '-18% 0px -60% 0px',
        threshold: [0.2, 0.45, 0.7],
    });

    observedSections.forEach(section => observer.observe(section));
}

document.documentElement.dataset.appName = TemplateVar.get('appName');
bindSectionHighlighter();
