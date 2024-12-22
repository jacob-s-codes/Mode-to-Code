import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="max-w-[1500px] flex justify-center mx-auto bg-blue-400">
      <div className="w-screen h-screen courier bg-blue-400 ">
        <Navbar></Navbar>
      </div>

      <div className="mt-[150vh]">
        space
      </div>
    </main>
    
  );
}
