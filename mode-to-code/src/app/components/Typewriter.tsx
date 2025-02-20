'use client'
import React, { useEffect } from "react";


const Typewriter = () => {
  useEffect(() => {
    const sleep = (ms: number): Promise<void> =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const phrases = ["AI", "to make video games", "to build websites"];
    let phraseIndex = 0;
    let sleepTime = 100;
    const el = document.getElementById("typewriter");
    if (!el) return; // Ensure `el` exists before proceeding
    let isWriting = true;

    const writeLoop = async () => {
      while (true) {
        if (!isWriting) {
          await sleep(sleepTime);
          continue;
        }

        const curWord = phrases[phraseIndex];
        for (let i = 0; i < curWord.length; i++) {
          if (!isWriting) break;
          if (el) el.innerText = curWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          if (!isWriting) break;
          if (el) el.innerText = curWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    };

    writeLoop();
  }, []);

  return (
      <span
      id="typewriter"
      className=""
    >
    </span>
    
  );
};

export default Typewriter;
