(function () {
    if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    const revealTargets = document.querySelectorAll(
        ".hero-copy, .hero-art, .section-heading, .lesson-card, .book-copy, " +
        ".pdf-container, .introslide > .left, .introslide > .right, " +
        ".contents-section, .first-div, .third-div, .theo21, .specialcase, " +
        ".Corollary, .general-r, .middle, .quiz-section, .site-footer"
    );

    const observer = new IntersectionObserver(function (entries, currentObserver) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -32px 0px"
    });

    revealTargets.forEach(function (target) {
        target.classList.add("scroll-reveal");
        observer.observe(target);
    });
})();
