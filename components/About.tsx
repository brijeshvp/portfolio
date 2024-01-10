import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
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
      className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mt-10 -mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        src="about_img.png"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="mt-4 md:mt-0 text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          voluptate. Facere unde nulla pariatur ipsum, ab perferendis,
          voluptates, iusto in commodi reiciendis veniam incidunt tempora. Ipsam
          magni possimus vitae debitis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facere facilis accusamus repudiandae sint ipsum
          provident nisi explicabo enim exercitationem, autem, perspiciatis
          quaerat? Veritatis molestiae sequi mollitia dicta debitis. Asperiores,
          odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          optio, quos odit commodi dolorum adipisci explicabo. Ducimus corporis
          debitis tempora sit. Quia doloremque pariatur iure placeat repudiandae
          ipsam magnam sapiente. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Deserunt laudantium dolorum eligendi vel nisi
          voluptas autem temporibus, totam odit, ducimus ipsum accusamus vitae
          rem dicta amet quisquam mollitia consectetur fugiat.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
