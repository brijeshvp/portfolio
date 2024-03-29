import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, This is ${pageInfo?.name}!`,
      "Guy-who-loves-Chai.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const renamedResume = `${pageInfo?.resumeURL}?dl=brijesh-peshvani_resume.pdf`
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden pt-20">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Brijesh Peshvani"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        {pageInfo?.role}
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className='pt-5'>
          <Link href="#about"><button className='heroButton'>About</button></Link>
          <Link href="#experience"><button className='heroButton'>Experience</button></Link>
          <Link href="#skills"><button className='heroButton'>Skills</button></Link>
          <Link href="#projects"><button className='heroButton'>Projects</button></Link>
          {/* <Link href={renamedResume} target="_blank"><button className='heroButton'>Resume</button></Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
