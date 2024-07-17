const dialogs = document.querySelectorAll('.dialog');
const footer = document.getElementById('makeAVideoGameFooter');

function showDialog(index) {
    if (index < dialogs.length) {
        let dialog = dialogs[index];
        dialog.classList.remove('hidden', 'hide');
        dialog.classList.add('show', 'flex');
        document.body.classList.add('overflow-hidden');
        
        setTimeout(() => {
            dialog.classList.add('opacity-100');
            //footer.classList.add('hidden');
        }, 20);
    } else {
        console.error('Invalid dialog index:', index);
    }
}

function hideDialog(index) {
    if (index < dialogs.length) {
        let dialog = dialogs[index];
        if (dialog) {
            dialog.classList.remove('show');
            dialog.classList.add('hide');
            //footer.classList.remove('hidden');
            
            document.body.classList.remove('bg-opacity-50');
            setTimeout(() => {
                dialog.classList.remove('flex');
                dialog.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }, 300);
        } else {
            console.error('Dialog not found at index:', index);
        }
    } else {
        console.error('Invalid dialog index:', index);
    }
}

// Ensure buttons have the correct IDs
document.getElementById('introToProgrammingButton').addEventListener('click', () => showDialog(0));
document.getElementById('writeYourFirstProgramButton').addEventListener('click', () => showDialog(1));
document.getElementById('variablesButton').addEventListener('click', () => showDialog(2));
document.getElementById('basicDataTypesButton').addEventListener('click', () => showDialog(3));
document.getElementById('userInputButton').addEventListener('click', () => showDialog(4));
document.getElementById('conditionalsButton').addEventListener('click', () => showDialog(5));
document.getElementById('loopsButton').addEventListener('click', () => showDialog(6));
document.getElementById('stringsButton').addEventListener('click', () => showDialog(7));
document.getElementById('functionsButton').addEventListener('click', () => showDialog(8));
document.getElementById('moreDataTypesButton').addEventListener('click', () => showDialog(9));

// Add event listeners to modals and their close buttons
dialogs.forEach((dialog, index) => {
    dialog.addEventListener('click', () => hideDialog(index));
    dialog.querySelector('.close-button').addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        hideDialog(index);
    });
});




gsap.set('.items-center > div, #allMain, .allHeaders, .buttonsAnimate, #whatWeDo, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', { y: 50, opacity: 0 });

gsap.to('.items-center > div, #allMain, .allHeaders, .buttonsAnimate, #learnStuff, #whatWeDo, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    delay: 0.5, // Delay before animation starts
    duration: 1, // Animation duration
    ease: 'power3.out' // Easing function
});

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

let sleepTime = 100;
const el = document.getElementById('typewriter');
const phrase = 'print("Make Your Own Video Game!")';

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const writeLoop = async() => {
    await sleep(1000);
    for (let i = 0; i < phrase.length; i++) {
        el.innerText = phrase.substring(0, i + 1);
        await sleep(sleepTime);
    }
    
}


writeLoop();

gsap.registerPlugin(ScrollTrigger);
gsap.to("#introToProgrammingButton", {
    scrollTrigger: {
        trigger: "#introToProgrammingButton",
        start: "20px center",
        toggleActions: "restart pause none none"
    },
    opacity: 1,
    rotation: 360,
    duration: 1
});



    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".theline", {
        strokeDashoffset: 1000
    }, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });







