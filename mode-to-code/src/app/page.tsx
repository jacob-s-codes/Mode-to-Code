"use client";
import Navbar from "./components/Navbar";
import styles from "./styles/Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".reviews",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
        markers: true, // Remove in production
      }
    });

    tl.fromTo(".rl", { y: '350%' }, { y: '-150%' }, 0);
    tl.fromTo(".rr", { y: '300%' }, { y: '-50%' }, 0);

    return () => {
      tl.kill(); // Cleanup on unmount
    };
  }, []);


  return (
    <div>
      <Navbar />
      <div className="w-full h-screen mtcbg  xl:text-5xl md:text-4xl text-3xl bg-gradient-to-b from-white to-blue-200">
        <div className="flex flex-row items-center justify-center ">
          {/* <div className="flex flex-col gap-y-12 items-center justify-center">
                <img src="./assets/teachingimg6.jpg" alt=""
                    className="max-w-xl ml-12 lg:w-fit w-96 h-auto rounded-xl shadow-2xl animatedown shadow-black "/>
                <img src="./assets/teachingimg9.jpg" alt=""
                    className="max-w-xl lg:hidden visible ml-32 lg:w-fit w-96 h-auto rounded-xl shadow-2xl animatedownfaster shadow-black "/>
            </div> */}
          <div className="flex justify-center text-center h-screen items-center">
            <h1 className="lg:max-w-6xl max-w-3xl toupper uppercase font-bold animatedown">Teaching the next generation valuable technological
              tools</h1>
          </div>
          {/* <div className="flex flex-col gap-y-12 items-center justify-center">
                <img src="./assets/teachingimg2.jpg" alt=""
                    className="max-w-xl hidden lg:visible h-auto mr-12 rounded-xl animatedown shadow-2xl shadow-black"/>
                <img src="./assets/teachingimg8.jpg" alt=""className="max-w-xl lg:w-fit w-96 h-auto mr-32 rounded-xl animatedownfaster shadow-2xl shadow-black " />
            </div> */}
        </div>
      </div>
      <div className=" bg-blue-200">
        <div className="max-w-[1800px] mx-auto px-12">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col max-w-3xl gap-y-12 animateleft">
              <h2 className="uppercase text-4xl font-bold underline decoration-[8px]">Who we are</h2>
              <p className={`text-2xl font-thin test ${styles['test']}`}>We are a team of dedicated professionals who are passionate about
                teaching the
                next generation valuable technological tools. We believe that the future of the world is in the
                hands of the young people and we are committed to ensuring that they are well equipped to take
                on the challenges of the future.</p>
              <a href="/about.html" className="relative inline-flex px-8 py-4 font-medium group w-fit">
                <span
                  className="absolute inset-0 transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white font-thin">LEARN MORE ABOUT US</span>
              </a>


            </div>
            <div className="max-w-3xl animateright">
              <img src="/teachingimg1.jpg" alt="Image of someone teaching" className="rounded-xl shadow-2xl shadow-black" />
            </div>

          </div>
        </div>
      </div>

      <div className="bg-blue-200 pb-64 pt-64">
        <div className="max-w-[1800px] mx-auto px-12">
          <div className="flex flex-row items-center justify-center font-thin">
            <div className="flex flex-col w-xl gap-y-6 items-center text-center ">
              <img src="/onlineclasses.png" alt="" className="w-96 rounded-xl" />

              <p className="text-xl max-w-96">Teaching students virtually and online in Vermont, India and more! </p>
            </div>
            <svg className="h-96 w-24" viewBox="0 0 10 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C5 259.4 5 344.333 5 355" stroke="black" strokeWidth="5" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col items-center w-xl gap-y-6 text-center">
              <img src="/inpersonclasses.png" alt="" className="w-96 rounded-xl" />
              <p className="text-xl max-w-96">Teaching students in multiple schools all over San Francisco! </p>
            </div>
            <svg className="h-96 w-24" viewBox="0 0 10 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C5 259.4 5 344.333 5 355" stroke="black" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col items-center w-xl gap-y-6 text-center">
              <img src="/teachingsenior.png" alt="" className="w-96 rounded-xl" />
              <p className="text-xl max-w-96">Teaching students virtually and online in Vermont, India and more! </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-96 px-24 bg-blue-950 text-white ">
        <section className={`${styles["section"]} z-30`}>
          <h2 className="text-center text-9xl font-bold pb-64 decoration-[8px] absolute mx-auto leading-16 z-10 rtitle">
            TESTIMONIALS</h2>
          <div className={`${styles["review-wrp"]}  z-20 text-black`}>
            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>


              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>



            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>
              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="/teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>
            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>
              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>
            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>
              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>

            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>
              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>

            <div
              className="review rl bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative">
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"I enjoyed learning about all the ways that AI shows up in
                our lives."</p>
              <div
                className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <img src="teachingimg5.jpg" alt=""
                    className="rounded-full w-36 h-36 object-cover border-4 border-white" />
                </div>
                <p className="text-2xl">Josie</p>
                <p>Student at Live Oak School</p>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div className="mt-[50vh]">
        Hi
      </div>

    </div>
  );
}
