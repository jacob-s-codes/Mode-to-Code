let sleepTime = 100;
const phrase = "Still working on this section!";

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const writeLoop = async() => {
    const el = document.getElementById('typewriter');
    while (true) {
        await sleep(1000);
        for (let i = 0; i < phrase.length; i++) {
            el.innerText = phrase.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = phrase.length; i > 0; i--) {
            el.innerText = phrase.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    writeLoop();
});
