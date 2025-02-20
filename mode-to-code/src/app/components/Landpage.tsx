import Typewriter from "./Typewriter";
import styles from './styles/Video.module.css';


const Landpage = () => {
    return (
      <div className="w-full h-auto flex items-center justify-center relative">
        <video
          src="/Backgroundvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: 'brightness(40%)' }}
          className=" w-full h-auto  object-cover"
        ></video>
        <div className={`absolute z-10 text-white md:px-24 px-12 ${styles['thick-text-shadow-style']}`}>
            <h1 className="lg:top-24 md:top-48 top-96 xl:text-6xl lg:text-4xl text-2xl text-center">Start learning <span><Typewriter/></span><span className="blink-cursor">|</span></h1>
            <h2 className="mt-24 xl:text-5xl lg:text-3xl text-center">Interested in coding? Don't know where to start? You've come to the right place!</h2>
        </div>
        
      </div>
    );
  };
  
  export default Landpage;
  