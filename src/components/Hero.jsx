import { motion } from "framer-motion";

import { styles } from "../styles";
import heroBackground from "../assets/atta-ullah-image.jpeg";
import { textVariant, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <div
        className={`relative z-10 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 0.8)}
          initial="hidden"
          animate="show"
          className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </motion.div>

        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
        >
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>ATTA ULLAH</span>
          </h2>
          <motion.p 
            variants={fadeIn("", "", 0.5, 0.8)}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
          Angular Developer with 2+ years of experience building dynamic web applications with focus on performance, user experience, and robust error handling
          </motion.p>
        </motion.div>
      </div>


      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
