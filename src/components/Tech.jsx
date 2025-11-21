import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="skills" className={`${styles.sectionSubText} `}>Skills</p>
        <h2 className={`${styles.sectionHeadText}`} style={{marginBottom: "10px"}}>My Experties</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' style={{color: "#A6A6C3", marginBottom: "20px"}}
      >
        Proficient in crafting responsive web layouts with HTML, CSS Bootstrap, I specialize in modern JavaScript for dynamic, 
        user-centric web applications. With hands-on experience in React.js and Angular.js, I build efficient single-page applications, 
        utilizing its component-based architecture. My expertise extends to backend development using PHP Laravel and MySQL, 
        where I design and implement RESTful APIs for seamless client-server communication, 
        ensuring optimal functionality and user experience.
      </motion.p>

      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className='flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name} 
            title={technology.title}
            className='w-28 h-28'
            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BallCanvas icon={technology.icon} />
            <p style={{textAlign: "center"}}>{technology.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
