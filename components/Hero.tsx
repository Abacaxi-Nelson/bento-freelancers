import { motion ,useScroll ,useTransform } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import { variantsLogo,variantsName,variantsImg,variantsBtn,variantsNav,variantsText  } from "@/utils/Framer"; 

type props ={
  ref:any
}
function Hero({ref} : props) {
  
  const {scrollYProgress }=useScroll({
    target :ref,
    offset:["start end", "end end"]
  })
  
  const opacity=useTransform(scrollYProgress ,[1,0],["0%","100%"])
  const y=useTransform(scrollYProgress ,[0,1],["0%","100%"])
  //////////
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
    <motion.div style={{translateY:y,opacity:opacity}} className="container mx-auto pt-[200px] h-screen">
    <div className="flex justify-start  items-center flex-col gap-10 relative">
      <div className="flex justify-center items-center flex-col gap-2">
        <motion.div
          variants={variantsLogo} initial="hidden" animate="show" 
          className="w-[100px]">
          <img src="./63e501246a370e0d4462f2ed_herologo.png" alt="logo"
          className="max-w-[100%]"  />
        </motion.div>
        <motion.h1 
          variants={variantsName} initial="hidden" animate="show" 
          className="text-2xl font-bold">Bento</motion.h1>
      </div>
      <motion.h2 
        variants={variantsText} initial="hidden" animate="show" 
        className="text-6xl font-bold text-center relative">A Link in Bio .<br />
        But Rich and Beautiful.              
        <p className="text-2xl text-gray-500 font-normal pt-2">Your personal page to show everything you are and create.        
        </p>
      </motion.h2>
      <motion.div
        variants={variantsBtn} initial="hidden" animate="show" 
        className="flex justify-center items-center flex-col gap-2">
          <p className="text-1xl font-bold bg-blue-400 cursor-pointer py-4 px-12 rounded-xl text-white">Create Now</p>
          <p className="cursor-pointer text-gray-500">Log In</p>
      </motion.div>
      <div className="">
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
          src="63e91a49f16d3f275eb12ba7_githubwidget-p-500.png" alt="img"
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
  )
}

export default Hero
