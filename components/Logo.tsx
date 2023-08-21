/* Logo section and logo name */

import { variantsLogo, variantsName } from '@/utils/Framer'
import { motion } from 'framer-motion'
import Image from 'next/image'

function Logo() {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <motion.div
      variants={variantsLogo} initial="hidden" animate="show" 
      className="w-[100px]">
          <Image src={"/herologo.png"} width={100} height={100}  alt="logo image "
          className="max-w-[100%]"  />
      </motion.div>
      <motion.h1 
        variants={variantsName} initial="hidden" animate="show" 
        className="text-2xl font-bold">Bento</motion.h1>
    </div>
  )
}

export default Logo
