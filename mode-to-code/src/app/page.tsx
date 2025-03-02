"use client";
import Navbar from "./components/Navbar";
import styles from "./styles/Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";
import OtherTestimonial from "./components/OtherTestimonial";

export default function Home() {

  


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

      <Testimonials/>

      <div className="mt-[50vh]">
        Hi
      </div>

    </div>
  );
}
