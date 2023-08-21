/* Hero Title section Client Component */

import { variantsText } from '@/utils/Framer'
import { motion } from 'framer-motion'

function HeroTitle() {
  return (
    <motion.h2 
    variants={variantsText} initial="hidden" animate="show" 
    className="text-3xl md:text-6xl font-bold text-center relative ">A Link in Bio .<br />
      But Rich and Beautiful.              
      <p className="text-lg md:text-2xl text-gray-500 font-normal pt-6">Your personal page to show everything you are and create.        
      </p>
  </motion.h2>
  )
}

export default HeroTitle
