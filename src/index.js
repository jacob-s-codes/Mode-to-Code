gsap.set('.items-center > div, #allMain, .buttonsAnimate, #whatWeDo, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', { y: 50, opacity: 0 });

gsap.to('.items-center > div, #allMain, .buttonsAnimate, #learnStuff, #whatWeDo, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
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

function showDialog(index) {
    if (index < dialogs.length) {
        let dialog = dialogs[index];
        dialog.classList.remove('hidden');
        dialog.classList.add('flex');
        setTimeout(() => {
            dialog.classList.add('opacity-100');
        }, 20);
    } else {
        console.error('Invalid dialog index:', index);
    }
}

function hideDialog(index) {
    if (index < dialogs.length) {
        let dialog = dialogs[index];
        if (dialog) {
            dialog.classList.remove('flex');
            dialog.classList.add('hidden');
            dialog.classList.remove('opacity-100');
        } else {
            console.error('Dialog not found at index:', index);
        }
    } else {
        console.error('Invalid dialog index:', index);
    }
}

// Ensure buttons have the correct IDs
document.getElementById('startHereButton').addEventListener('click', () => showDialog(0));
document.getElementById('learnSyntaxButton').addEventListener('click', () => showDialog(1));

// Add event listeners to modals and their close buttons
dialogs.forEach((dialog, index) => {
    dialog.addEventListener('click', () => hideDialog(index));
    dialog.querySelector('.close-button').addEventListener('click', (event) => {
        event.stopPropagation();
        hideDialog(index);
    });
});



//create an array that gets every class element for dialog and display the dialog and display the dialog at that index
// const dialogs = document.querySelectorAll('.dialog');

// function showDialog() {
//     let dialog = document.querySelector('#dialog');
//     dialog.classList.remove('hidden');
//     dialog.classList.add('flex');
//     setTimeout(() => {
//         dialog.classList.add('opacity-100');
//     }, 20);
// }

// function hideDialog() {
//     let dialog = document.querySelector('#dialog');
//     dialog.classList.remove('flex');
//     dialog.classList.add('hidden');
//     dialog.classList.remove('opacity-100');
// }

// function showDialog1() {
//     let dialog = document.querySelector('#dialog');
//     let button1 = document.querySelector('#learnSyntax');
//     button1.classList.add('hidden');
//     dialog.classList.remove('hidden');
//     dialog.classList.add('flex');
//     setTimeout(() => {
//         dialog.classList.add('opacity-100');
//     }, 20);
// }

// function hideDialog1() {
//     let dialog = document.querySelector('#dialog');
//     let button1 = document.querySelector('#learnSyntax');
//     button1.classList.remove('hidden');
//     dialog.classList.remove('flex');
//     dialog.classList.add('hidden');
//     dialog.classList.remove('opacity-100');
// }