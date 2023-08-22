/*  */

import { variantsName, variantsText } from '@/utils/Framer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from "next/image";
import { useRef } from 'react';

function GridSystem() {
  const  ref2 =useRef(null)
  let {scrollYProgress : a2 }=useScroll({
    target :ref2,
    offset:["start end", "end end"]
  })
  const y2=useTransform(a2 ,[0,1],["70px","-30px" ]) /* "70px","-30px" */
  const y22=useTransform(a2 ,[0,1],["-60px","100px"]) /* "-60px","100px" */
  
  return (
    <div>
      <motion.h1 
        className="text-3xl lg:text-5xl font-bold text-center mb-8"
        variants={variantsText} initial="hidden" whileInView="show" viewport={{once :true}} > 
        Your Videos. Podcasts.<br /> Newsletters. Photos.<br /> Paid Products. Streams.<br /> Calendar.
        <div className="fade-out"></div>
      </motion.h1>
      <motion.p 
        variants={variantsName} initial="hidden" whileInView="show" viewport={{once :true}}
        className="text-lg lg:text-3xl font-medium text-center text-gray-500 px-4">
        All your content integrated<br /> into your personal page. 
        No more hiding <br /> your content behind links.
      </motion.p>
      <div className="gridSystem hidden xl:grid" ref={ref2}>
          <motion.div style={{translateY:y2}}className="a1">
            <Image src={"/a8.png"} width={500} height={100} alt="image"></Image>
          </motion.div>
          <div  className="a2">
            <Image src={"/a11.png"} width={500} height={100} alt="image"></Image>
          </div>
          <motion.div style={{translateY:y22}} className="a3">
            <Image src={"/a10.png"} width={500} height={100} alt="image"></Image>
          </motion.div>
          <motion.div style={{translateY:y22}} className="a4">
          <Image src={"/a1.png"} width={500} height={100} alt="image"></Image>
          </motion.div>
          <motion.div style={{translateY:y22}} className="a5">
            <Image src={"/a3.png"} width={500} height={100} alt="image"></Image>
          </motion.div>
          <motion.div style={{translateY:y22}} className="a6">
            <Image src={"/d.png"} width={500} height={100} alt="image"></Image>           
          </motion.div>
          <div className="a7">
          <Image src={"/63ebcd583d088274b088fd2c_instagramwidget-p-500.png"} width={500} height={100} alt="image"></Image> 
          </div>
          <motion.div style={{translateY:y2}} className="a8">
            <Image src={"/63e5097d8203b5520ba10809_hero substack-p-500.png"} width={500} height={100} alt="image"></Image> 
          </motion.div>
          <div className="a9">
            <Image src={"/a5.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a10">
              <Image src={"/a4.png"} width={500} height={100} alt="image"></Image> 
          </div>
          <div className="a11">
            <Image src={"/a13.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a12">
            <Image src={"/a6.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a13">
            <Image src={"/a2.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="x1"></div>
          <div className="x3"></div>
          <motion.div style={{translateY:y2}} className="x2"></motion.div>
          <motion.div style={{translateY:y2}} className="x4"></motion.div>
          <motion.div style={{translateY:y2}} className="x5"></motion.div>
          <div className="x6"></div>
          <div className="x7"></div>
      </div>
      <div className="gridSystem grid xl:hidden" >
          <div className="a1">
            <Image src={"/a8.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div  className="a2">
            <Image src={"/a11.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div  className="a3">
            <Image src={"/a10.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div  className="a4">
          <Image src={"/a1.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div  className="a5">
            <Image src={"/a3.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div  className="a6">
            <Image src={"/d.png"} width={500} height={100} alt="image"></Image>           
          </div>
          <div className="a7">
          <Image src={"/63ebcd583d088274b088fd2c_instagramwidget-p-500.png"} width={500} height={100} alt="image"></Image> 
          </div>
          <div  className="a8">
            <Image src={"/63e5097d8203b5520ba10809_hero substack-p-500.png"} width={500} height={100} alt="image"></Image> 
          </div>
          <div className="a9">
            <Image src={"/a5.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a10">
              <Image src={"/a4.png"} width={500} height={100} alt="image"></Image> 
          </div>
          <div className="a11">
            <Image src={"/a13.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a12">
            <Image src={"/a6.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="a13">
            <Image src={"/a2.png"} width={500} height={100} alt="image"></Image>
          </div>
          <div className="x1"></div>
          <div className="x3"></div>
          <div  className="x2"></div>
          <div  className="x4"></div>
          <div  className="x5"></div>
          <div className="x6"></div>
          <div className="x7"></div>
      </div>
    </div>
  )
}

export default GridSystem
