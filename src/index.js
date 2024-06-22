gsap.set('.items-center > div, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', { y: 50, opacity: 0 }); 

        gsap.to('.items-center > div, #learnStuff, #startCoding, #aboutMode, #whatWeDo, #somePictures', {
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