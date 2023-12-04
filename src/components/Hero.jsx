import { Icon } from "@iconify/react";
import pp from "../images/pp1.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="py-[64px] flex gap-[64px] justify-between mb:flex-col sm:flex-row-reverse ">
      <Image
        src={pp}
        alt="photo"
        className=" aspect-[4/5] max-w-[240px] object-cover shadow-2xl object-top border rounded-3xl mb:mx-auto"
      />
      <div className="flex gap-[48px] flex-col">
        <div>
          <h1 className=" text-3xl font-bold animate-bounce">
            Hello! I&#39;m Bishal Rajbahak!
          </h1>
          <p>
            I am a frontend developer skilled in HTML, CSS, React.js, and
            Next.js. I love turning designs into user-friendly websites and
            building dynamic interfaces with React.js. With a focus on creating
            efficient and visually appealing experiences, I&#39;m eager to
            contribute my skills to your projects!
          </p>
        </div>
        <div>
          <span className="flex items-center gap-1">
            <Icon icon="carbon:location" />
            Kathmandu,Nepal
          </span>
          <span className="flex items-center gap-1 absolute animate-pulse">
            <Icon icon="fluent-emoji-flat:green-circle" className="text-xs" />
            Available for new projects.
          </span>
        </div>
        <div className="flex gap-4">
          <Icon icon="iconoir:github" />
          <Icon icon="uil:linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
