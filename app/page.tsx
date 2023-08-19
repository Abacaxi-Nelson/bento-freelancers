"use client"
import { motion ,useScroll ,useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const  ref =useRef(null)
  const {scrollYProgress }=useScroll({
    target :ref,
    offset:["start end", "end end"]
  })
  const y=useTransform(scrollYProgress ,[0,1],["0%","100%"])

  const img1=useTransform(scrollYProgress ,[0,1],["-6%","-16%"])
  const img1R=useTransform(scrollYProgress ,[0,1],[-3,-14])
  // /
  const img2=useTransform(scrollYProgress ,[0,1],["6%","-16%"])
  const img2R=useTransform(scrollYProgress ,[0,1],[-5,-30])
  const img2T=useTransform(scrollYProgress ,[0,1],["-20%","-100%"])
  // 
  const img3R=useTransform(scrollYProgress ,[0,1],[5,30])
  ////
  const img4T=useTransform(scrollYProgress ,[0,1],["-10%","-40%"])
  const img4=useTransform(scrollYProgress ,[0,1],["15%","-20%"])

  const opacity=useTransform(scrollYProgress ,[1,0],["0%","100%"])

  const variantsText ={
    hidden:{
      opacity:0,
      filter:"blur(5px)" ,
      bottom:-60,
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      bottom:0,
      transition:{ ease: "easeOut", duration: 1.2 , delay:0.2 ,property:"all"}
    },
  }
  const variantsLogo ={
    hidden:{
      opacity:0,
      filter:"blur(10px)" ,
      transform: "scale(3) rotate(90deg)"
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      transform:" scale(1) rotateX(0deg)",
      transition:{ ease: "easeOut", duration: 1 , delay:0.8,property:"all"}
    },
  }
  const variantsName ={
    hidden:{
      opacity:0,
      filter:"blur(5px)" ,
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      transition:{ ease: "easeOut", duration: 0.9 , delay:1.5 }
    },
  }
  const variantsImg ={
    hidden:{
      opacity:0,
      filter:"blur(5px)" ,
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      transition:{ ease: "easeOut", duration: 0.8 , delay:2 }
    },
  }
  const variantsBtn ={
    hidden:{
      opacity:0,
      filter:"blur(5px)" ,
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      transition:{ ease: "easeOut", duration: 1 , delay:2.2 }
    },
  }
  const variantsNav ={
    hidden:{
      opacity:0,
      filter:"blur(5px)" ,
    },
    show:{
      opacity:1,
      filter:"blur(0px)" ,
      transition:{ ease: "easeOut", duration: 1 , delay:2.5 }
    },
  }
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={variantsNav} initial="hidden" animate="show" 
        className=" bg-blue-400 text-center text-white font-semibold cursor-pointer p-4 text-lg -z-10">Big News! Go And Check ->
      </motion.div>
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
      <div ref={ref}  className=" bg-blue-500  mx-auto container rounded-[50px] p-14 z-20 relative shadow-2xl mb-40">
        <iframe src="https://www.youtube.com/embed/asFa8_2EeVM"
          className="shadow-2xl rounded-3xl overflow-hidden"
          width="100%"
          height="860"          
          
          >            
          </iframe>
      </div>
      <div className="mx-auto container py-[100px] flex justify-center items-center flex-col ">
        <h1 className="font-bold text-3xl uppercase text-center mb-14 ">Join thousands of inspiring creatives</h1>
        <div className="flex  gap-6 justify-center items-center flex-row ">
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <img width={80} src="./x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>

        </div>
        <h1 className="rounded-xl py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-all shadow-lg mt-8 font-medium">Explore the most creative Bentos -></h1>
      </div>
      <div className=""></div>
    </div>
  )
}
