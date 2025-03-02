import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    text: "I enjoyed learning about all the ways that AI shows up in our lives.",
    name: "Josie",
    school: "Student at Live Oak School",
    image: "/assets/teachingimg5.jpg",
  },
  // Duplicate or modify for more testimonials
  {
    text: "AI is everywhere, and this helped me understand how it works!",
    name: "Alex",
    school: "Student at Oak Ridge Academy",
    image: "/assets/teachingimg5.jpg",
  },
  {
    text: "This experience really opened my eyes to new technologies.",
    name: "Samantha",
    school: "Student at Pinehill School",
    image: "/assets/teachingimg5.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-96 px-24 bg-blue-950 text-white">
      <section className={styles.reviews}>
        <h2 className="text-center text-9xl font-bold pb-64 decoration-[8px] absolute mx-auto leading-16 z-10 rtitle">
          TESTIMONIALS
        </h2>
        <div className={styles.reviewWrapper}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white w-96 h-96 rounded-xl shadow-2xl shadow-black flex flex-col items-center justify-between mx-4 relative ${
                index % 2 === 0 ? styles.reviewLeft : styles.reviewRight
              }`}
            >
              <p className="text-xl pr-12 pb-4 px-4 pt-12">"{testimonial.text}"</p>
              <div className="text-center bg-gradient-to-r from-darkbg to-blue-950 w-full text-white absolute bottom-0 h-[calc(50%+0.5rem)] rounded-b-xl">
                <div className="flex justify-center -mt-10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={144}
                    height={144}
                    className="rounded-full object-cover border-4 border-white"
                  />
                </div>
                <p className="text-2xl">{testimonial.name}</p>
                <p>{testimonial.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
