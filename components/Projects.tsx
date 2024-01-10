import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5];
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
        {projects?.map((project,i) => (
          <div
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
              src="./projects/news-mania-2.0.png"
              alt="Project Img"
              className="h-44 lg:h-64"
            />

            {/* project details */}
            <div className="px-0 md:px-10 max-w-6xl">
              {/* project title */}
              <h4 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i+1} of {projects.length}:
                </span>{" "}
                News Mania
              </h4>

              {/* tech used */}
              <div className="flex items-center space-x-2 justify-center">
                  <img
                    className="my-2 h-10 w-10 "
                    src="./project_techstacks/mediastackNewsAPI.jpeg"
                    alt=""
                  />
              </div>

              {/* project summary */}
              <p className="text-sm md:text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores repellendus temporibus a recusandae sed non officia incidunt laudantium omnis! Alias iure accusantium quas aperiam consequatur eum laboriosam, harum omnis fugiat?
              </p>
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
