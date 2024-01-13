import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="h-[95%] mt-12 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
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
              src={urlFor(project?.image).url()}
              alt="Project Img"
              className="h-44 lg:h-64"
            />

            {/* project details */}
            <div className="px-0 md:px-10 max-w-6xl flex flex-col">
              {/* project title */}
              <h4 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              {/* tech used */}
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies?.map((technology) => (
                  <img
                    className="my-2 h-10 w-10 "
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>

              {/* project summary */}
              <p className="text-sm md:text-lg text-center md:text-left">
                {project?.summary}
              </p>

              {/* Links button */}
              <div className="flex justify-evenly mt-4">
                <button className="h-8 bg-[#F7AB0A] px-2 md:px-4 rounded-md text-black font-bold text-sm md:text-md">
                  <Link href={project?.linkToDocumentation} target="_blank">Read More</Link>
                </button>
                <button className="h-8 bg-[#F7AB0A] px-2 md:px-4 rounded-md text-black font-bold text-sm md:text-md">
                  <Link href={project?.linkToBuild} target="_blank">Build Preview</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* tilted-bg */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
