gsap.set('.items-center > div, #allMain, .allHeaders, .buttonsAnimate, #whatWeDo, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', { y: 50, opacity: 0 });

gsap.to('.items-center > div, #allMain, .allHeaders, .buttonsAnimate, #learnStuff, #whatWeDo, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    delay: 0.5, // Delay before animation starts
    duration: 1, // Animation duration
    ease: 'power3.out' // Easing function
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


const date = document.getElementsByClassName("dateCopyright");
const currYear = new Date().getFullYear();
for (let i = 0; i < date.length; i++) {
    date[i].innerHTML = '&copy; ' + currYear + '. All rights reserved';
}
const mainContent = document.querySelector('main');


const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mainContainer = document.querySelector('.main-container');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mainContent.classList.toggle('hidden');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}
document.addEventListener('DOMContentLoaded', initApp);

document.addEventListener('DOMContentLoaded', initApp);
const dialogs = document.querySelectorAll('.dialog');

// function showDialog(index) {
//     if (index < dialogs.length) {
//         let dialog = dialogs[index];
//         let footer = document.getElementById('footerLearnJava');
//         dialog.classList.remove('hidden');
//         dialog.classList.add('flex');
        
//         setTimeout(() => {
//             dialog.classList.add('opacity-100');
//             footer.classList.add('hidden');
//         }, 20);
//     } else {
//         console.error('Invalid dialog index:', index);
//     }
// }

// function hideDialog(index) {
//     if (index < dialogs.length) {
//         let dialog = dialogs[index];
//         let footer = document.getElementById('footerLearnJava');
//         if (dialog) {
//             dialog.classList.remove('flex');
//             dialog.classList.add('hidden');
//             dialog.classList.remove('opacity-100');
//             footer.classList.remove('hidden');
//         } else {
//             console.error('Dialog not found at index:', index);
//         }
//     } else {
//         console.error('Invalid dialog index:', index);
//     }
// }



