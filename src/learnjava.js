
        const el = document.getElementById("typewriter");
        const phrase = " build websites";

        const sleep = (ms) => {
            return new Promise((resolve) => setTimeout(resolve, ms));
        };

        const writeLoop = async () => {
            await sleep(1000);
            for (let i = 0; i < phrase.length; i++) {
                el.innerText = phrase.substring(0, i + 1);
                await sleep(sleepTime);
            }
        };

        writeLoop();
    

writeLoop();

document.addEventListener("DOMContentLoaded", () => {
    writeLoop();
});
