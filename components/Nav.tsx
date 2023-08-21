/* Nav bar section Client Component */

import { variantsNav } from '@/utils/Framer'
import { motion } from 'framer-motion'

function Nav() {
  return (
    <motion.div
    variants={variantsNav} initial={"hidden"} animate="show" 
    className=" bg-blue-400 text-center text-white font-semibold cursor-pointer p-4 text-lg -z-10">Big News! Go And Check &gt;
  </motion.div>
  )
}

export default Nav
