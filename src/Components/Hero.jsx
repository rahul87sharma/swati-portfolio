import profilePic from "../assets/photo5.png";
import resumeFile from "../assets/resume.pdf"; 
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1, delay: delay},
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
             className="pb-16 text-6xl font-serif tracking-tight lg:mt-16 lg:text-8xl">
              Swati Rampal  
            </motion.h1> {/* Name of the portfolio holder */}
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Assistant Professor | Network Security Engineer {/* Current Designation */}
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-5 max-w-1xl py-8 font-light tracking-normal text-lg lg:text-base text-justify">
              {/* {HERO_CONTENT} */}
              
              I am an accomplished Assistant Professor at Lovely Professional University, with over 5.5 years of experience in delivering high-quality instruction in Computer Science, particularly in Computer Networking and Cybersecurity. My expertise includes systems administration and programming in C, along with a strong focus on penetration testing and network security. I have a proven track record of evaluating student progress, adapting teaching methods, and fostering professional relationships within the academic community to enhance student engagement and understanding. My commitment to creating a positive learning environment encourages students to achieve their academic and professional goals, preparing them for successful careers in technology.

            </motion.p>

            {/* Resume Download Button */}
            
            <motion.a
              href={resumeFile}
              download="Swati_Rampal_Resume.pdf"
              variants={container(1.5)}
            initial="hidden"
            animate="visible"
              className="mt-1 inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white px-8 py-4 text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity duration-300 mb-10"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-3">
          <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }} 
            src={profilePic}
            alt="Swati Rampal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;