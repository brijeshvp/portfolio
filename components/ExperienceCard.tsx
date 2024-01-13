import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[380px] sm:w-[630px] lg:w-[900px] snap-center bg-[#292929] p-6 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden h-[650px] md:h-[850px] lg:h-[950px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Experience Card"
      />

      <div className="px-0 sm:px-10">
        <h4 className="text-2xl sm:text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl sm:text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology?.image).url()}
              alt=""
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300 text-sm sm:text-md">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm sm:text-md md:text-lg  h-60 md:h-96 lg:h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-4">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
