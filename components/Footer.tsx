/* Footer section  */
import { variantsImg, variantsLogo, variantsName } from '@/utils/Framer';
import { motion } from 'framer-motion'
import Image from "next/image";
function Footer() {
  return (
    <div className=" flex justify-center items-center gap-20 mt-[100px] flex-col">
      <div className="flex justify-center items-center gap-8 flex-col">
        <motion.img  variants={variantsLogo} initial="hidden" whileInView="show" viewport={{once :true}} src={"/Logo.svg"} height={100} width={70} alt="logo"></motion.img>
        <motion.h1 variants={variantsName} initial="hidden" whileInView="show" viewport={{once :true}} className="font-bold text-gray-500">Designed in Berlin. Built for Creatives</motion.h1>
      </div>
      <motion.div variants={variantsName} initial="hidden" whileInView="show" viewport={{once :true}}  className="flex justify-center items-center gap-12 flex-col md:flex-row text-center">
        <div className="flex justify-center items-center gap-4 md:gap-12 flex-col md:flex-row ">
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">Log In</p>
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">About us</p>
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">Changelog</p>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-12 flex-col md:flex-row">
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">Join the team</p>
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">Explore</p>
          <p className="hover:underline hover:text-blue-700 transition-all text-gray-500">Download Brand Asset</p>
        </div>

      </motion.div>
      <motion.div variants={variantsImg} initial="hidden" whileInView="show" viewport={{once :true}} className="">
        <Image src={"/10.svg"} height={100} width={260} alt="s" className="contrast-50"></Image>
      </motion.div>
    </div>
  )
}

export default Footer
