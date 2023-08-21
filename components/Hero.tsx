"Hero section which have this sections {Video ,Button,HeroTitle,Logo} "

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Video from './Video'
import Button from './Button'
import HeroTitle from './HeroTitle'
import Logo from './Logo'
import { variantsImg } from '@/utils/Framer'

function Hero() {
  const  refVideo =useRef<HTMLInputElement>(null);
  
  const {scrollYProgress }=useScroll({
    target :refVideo,
    offset:["start end", "end end"]
  })  
  const opacity=useTransform(scrollYProgress ,[1,0],["0%","100%"])
  const y=useTransform(scrollYProgress ,[0,1],["0%","100%"])

  const img1=useTransform(scrollYProgress ,[0,1],["-6%","-16%"])
  const img1R=useTransform(scrollYProgress ,[0,1],[-3,-14])
  //////////
  const img2=useTransform(scrollYProgress ,[0,1],["6%","-16%"])
  const img2R=useTransform(scrollYProgress ,[0,1],[-5,-30])
  const img2T=useTransform(scrollYProgress ,[0,1],["-20%","-100%"])
  ///////// 
  const img3R=useTransform(scrollYProgress ,[0,1],[5,30])
  ///////////
  const img4T=useTransform(scrollYProgress ,[0,1],["-10%","-40%"])
  const img4=useTransform(scrollYProgress ,[0,1],["15%","-20%"])


  return (
    <div>
      {/* logo and text section */}
      <motion.div style={{translateY:y,opacity:opacity}} className="
        container mx-auto pt-[100px] md:pt-[120px] lg:pt-[180px] h-screen">
        <div className="flex justify-start  items-center flex-col gap-10 relative">
          <Logo/>
          <HeroTitle/>
          <Button/>
          {/* <HeroImages ref={refVideo} />   */}
          <div className="hidden xl:block">
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              style={{left:img1, rotate:img1R}}
              src="63e5079c2efbf624bd00d1e3_hero verge-p-800.png" alt="img"
              className="absolute w-[460px] shadow-xl rounded-3xl top-[50%] 
            " />
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              style={{right:img2, rotate:img2R ,top:img2T}}
              src="63e5097d8203b5520ba10809_hero substack-p-500.png" alt="img"
              className="absolute w-[200px] shadow-xl rounded-3xl 
            " />
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              style={{left:img2, rotate:img3R , top:img2T }}
              src="d.png" alt="img"
              className="absolute w-[300px] shadow-xl rounded-3xl 
            " />            
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              style={{left:img4, rotate:img3R , bottom:img4T }}
              src="63ebce23e53ac60a7fa7bd43_hero youtube.png" alt="img"
              className="absolute w-[180px] shadow-xl rounded-3xl 
            " />
              <motion.img
                variants={variantsImg} initial="hidden" animate="show" 
                style={{right:img4, rotate:img3R ,bottom:img4T }}
                src="63ea7d42d96b453e6c24c20f_hero buymeacoffee.png" alt="img"
                className="absolute w-[160px] shadow-xl rounded-3xl 
              " /> 
          </div>
        </div>
      </motion.div>
      {/* video section */}
      <Video refVideo={refVideo} />
    </div>
  )
}

export default Hero
