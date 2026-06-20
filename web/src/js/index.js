import '../css/index.css';

const navLinks = [...document.querySelectorAll('.site-nav a')];
const observedSections = navLinks
    .map(link => document.querySelector(link.hash))
    .filter(Boolean);

/**
 * Highlights the navigation entry that matches the section most visible in the viewport.
 */
function bindSectionHighlighter() {
    if (!('IntersectionObserver' in window) || navLinks.length === 0) {
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

/**
 * Reveals large page blocks as they enter the viewport.
 */
function bindViewportReveal() {
    const revealBlocks = [...document.querySelectorAll('.reveal-block')];

    if (revealBlocks.length === 0) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        revealBlocks.forEach(block => block.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
    });

    revealBlocks.forEach(block => observer.observe(block));
}

bindSectionHighlighter();
bindViewportReveal();
