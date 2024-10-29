import { TbCloudComputing } from "react-icons/tb" 
import { BiNetworkChart } from "react-icons/bi"
import { FcLinux } from "react-icons/fc";
import { SiCyberdefenders } from "react-icons/si"
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { BsHddNetworkFill } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";  
import { animate, motion } from "framer-motion"; 

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbCloudComputing className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiNetworkChart className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-white-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCyberdefenders className="text-7xl text-red-700"/>
                </motion.div>
                <motion.div
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <LiaNetworkWiredSolid className="text-7xl text-purple-600"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsHddNetworkFill className="text-7xl text-white-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl text-blue-800"/>
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiAdminLine className="text-7xl text-amber-700"/>
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies