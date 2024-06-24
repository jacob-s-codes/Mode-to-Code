gsap.set('.items-center > div, #allMain, #whatWeDo, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', { y: 50, opacity: 0 }); 

        gsap.to('.items-center > div, #allMain, #learnStuff, #whatWeDo, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
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


// const initApp = () => {
//     const hamburgerBtn = document.getElementById("hamburger");
//     const mobileMenu = document.getElementById("mobile-menu");
//     const closeBtn = mobileMenu.querySelector('button');

//     const toggleMenu = () => {
//         mobileMenu.classList.toggle('hidden');
//         mobileMenu.classList.toggle('flex');
//         mainContent.classList.toggle('hidden');
//     }

//     hamburgerBtn.addEventListener('click', toggleMenu);
//     closeBtn.addEventListener('click', toggleMenu);

//     // Prevent clicks on the mobile menu from closing it when interacting inside the menu
//     mobileMenu.addEventListener('click', (e) => {
//         e.stopPropagation();
//     });

//     // Close the mobile menu when clicking outside of it
//     document.addEventListener('click', (e) => {
//         if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
//             if (mobileMenu.classList.contains('flex')) {
//                 toggleMenu();
//             }
//         }
//     });
// }

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