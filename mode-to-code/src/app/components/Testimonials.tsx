"use client";
import React from 'react';
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Testimonials = () => {

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
        <div className="pt-32 pb-96 px-24 bg-blue-950 text-white ">
            <section className={styles.section}>
                <h2 className="text-center text-9xl font-bold pb-64 decoration-[8px] absolute mx-auto leading-16 z-10 rtitle">
                    TESTIMONIALS</h2>
                <div className={`${styles.reviewwrp} text-black z-20`}>
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
    )
}

export default Testimonials