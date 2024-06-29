
document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showAnimate');
            } else {
                entry.target.classList.remove('showAnimate');
            }
        });
    }, {
        root: null,
        rootMargin: '-500px 0px 0px 0px',
        threshold: 0
    });
    



    const hiddenElementsRight = document.querySelectorAll('.hiddenAnimate');
    const hiddenElementsLeft = document.querySelectorAll('.hiddenAnimateLeft');
    hiddenElementsRight.forEach((el) => observer.observe(el));
    hiddenElementsLeft.forEach((el) => observer.observe(el));
});

