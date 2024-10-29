import aboutImg from "../assets/sample about2.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-5 max-w-1xl py-8 font-light tracking-normal text-lg lg:text-base text-wrap">

            I am a dedicated Computer Science teacher with extensive experience in academic instruction and a strong emphasis on the application of technology in education. My expertise lies in computer networking and information security systems, where I have successfully trained and developed students' skills through effective teaching methods and tailored educational materials. My communication skills are reflected in my engaging presentations, detailed lesson plans, and evaluations that aim to enhance student learning outcomes.<br /><br />

            In addition to my teaching responsibilities, I have actively contributed to the research community, with several publications in the last five years. My research interests include weather forecasting and water management through machine learning, the detection of fake news using machine learning models, and exploring advancements in network architecture with the transition to 6G technology. I have also participated in surveys on penetration testing and cybersecurity, providing valuable insights into these critical fields.<br /><br />

            My skills encompass a wide range of areas, including computer networking, cybersecurity, system administration, and programming in C. I am adept at multitasking, planning and designing effective curricula, and providing both group and individual instruction, allowing me to cater to diverse student needs and promote their academic success.<br /><br />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
