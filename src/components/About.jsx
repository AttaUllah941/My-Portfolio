import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full flex-shrink-0'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an Angular Developer with 2 years of experience building and optimizing dynamic web applications. 
        Proficient in the full Angular ecosystem, including NgRx, RxJS, and Signals, with a strong focus on 
        performance, user experience, and robust error handling. A collaborative team player adept at working 
        in Agile environments to deliver high-quality, maintainable code. I specialize in creating reusable 
        components, implementing state management solutions, and optimizing application performance to deliver 
        exceptional user experiences.
      </motion.p>

      <div className='mt-20 w-full'>
        <div className='flex flex-wrap gap-10 justify-center items-center'>
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <ServiceCard key={`service-${index}-${service.title}`} index={index} {...service} />
            ))
          ) : (
            <p className='text-white'>No services available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
