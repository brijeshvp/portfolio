import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
}

const Skill = ({directionLeft, skill}: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={urlFor(skill?.image).url()}
        alt="Skill Icon"
        className="rounded-full border border-gray-500 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 sm:h-20 sm:w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-bold text-black opacity-100">
          {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
