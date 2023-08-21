/* Button section (login and create bento BTNS)*/

import { variantsBtn } from '@/utils/Framer'
import { motion } from 'framer-motion'

function Button() {
  return (
    <motion.div
    variants={variantsBtn} initial="hidden" animate="show" 
    className="flex justify-center items-center flex-col gap-2">
      <p className="text-1xl font-bold bg-blue-400 cursor-pointer py-4 px-12 rounded-xl text-white">Create Your Bento</p>
      <p className="cursor-pointer text-gray-500">Log In</p>
  </motion.div>
  )
}

export default Button
