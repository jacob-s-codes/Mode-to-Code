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
for (let i = 0; i<date.length; i++) {
    date[i].innerHTML = '&copy; ' + currYear + '. All rights reserved';
}
const mainContent = document.querySelector('main');


        const initApp = () => {
            const hamburgerBtn = document.getElementById("hamburger");
            const mobileMenu = document.getElementById("mobile-menu");

            const toggleMenu = () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                mainContent.classList.toggle('hidden')
            }

            hamburgerBtn.addEventListener('click', toggleMenu);
            mobileMenu.addEventListener('click', toggleMenu);
        }
        document.addEventListener('DOMContentLoaded', initApp);

document.addEventListener('DOMContentLoaded', initApp);
        // const mainContent = document.querySelector('main');

        // const initApp = () => {
        //     const hamburgerBtn = document.getElementById("hamburger");
        //     const mobileMenu = document.getElementById("mobile-menu");

        //     const toggleMenu = () => {
        //         mobileMenu.classList.toggle('hidden');
        //         mobileMenu.classList.toggle('flex');
        //         mainContent.classList.toggle('hidden')
        //     }

        //     hamburgerBtn.addEventListener('click', toggleMenu);
        //     mobileMenu.addEventListener('click', toggleMenu);
        // }
        // document.addEventListener('DOMContentLoaded', initApp);


        
        // Optional: Add an event listener to handle close buttons inside dialogs
        // document.querySelectorAll('.dialog-close').forEach(button => {
        //     button.addEventListener('click', (event) => {
        //         const dialog = event.currentTarget.closest('.dialog');
        //         dialog.classList.remove('flex');
        //         dialog.classList.add('hidden');
        //         dialog.classList.remove('opacity-100');
        //     });
        // });
        
    function showDialog() {
        let dialog = document.querySelector('#dialog');
        dialog.classList.remove('hidden');
        dialog.classList.add('flex');
        setTimeout(() => {
            dialog.classList.add('opacity-100');
        }, 20);
    }

    function hideDialog() {
        let dialog = document.querySelector('#dialog');
        dialog.classList.remove('flex');
        dialog.classList.add('hidden');
        dialog.classList.remove('opacity-100');
    }

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