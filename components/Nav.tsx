import { motion } from 'framer-motion'
import React from 'react'

type props ={
  variantsNav: {
    hidden: {
      opacity: number;
      filter: string;
    };
    show: {
      opacity: number;
      filter: string;
      transition: {
        ease: string;
        duration: number;
        delay: number;
      };
    };
  } 
}
function Nav({variantsNav}:props) {
  return (
    <motion.div
    variants={variantsNav} initial={"hidden"} animate="show" 
    className=" bg-blue-400 text-center text-white font-semibold cursor-pointer p-4 text-lg -z-10">Big News! Go And Check &gt;
  </motion.div>
  )
}

export default Nav
