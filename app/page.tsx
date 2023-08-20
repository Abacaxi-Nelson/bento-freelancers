"use client"
import { motion ,useScroll ,useTransform } from "framer-motion";
import { useRef } from "react";
import { variantsLogo,variantsName,variantsImg,variantsBtn,variantsNav,variantsText  } from "@/utils/Framer"; 
import Nav from "@/components/Nav";
import Image from "next/image";


export default function Home() {
  const  ref =useRef(null)
  const  ref2 =useRef(null)
  const {scrollYProgress :a1 }=useScroll({
    target :ref,
    offset:["start end", "end end"]
  })
  let {scrollYProgress : a2 }=useScroll({
    target :ref2,
    offset:["start end", "end end"]
  })
  
  const opacity=useTransform(a1 ,[1,0],["0%","100%"])
  const y=useTransform(a1 ,[0,1],["0%","100%"])

  const y2=useTransform(a2 ,[0,1],["70px","-30px"])
  const y22=useTransform(a2 ,[0,1],["-60px","100px"])
  //////////
  const img1=useTransform(a1 ,[0,1],["-6%","-16%"])
  const img1R=useTransform(a1 ,[0,1],[-3,-14])
  //////////
  const img2=useTransform(a1 ,[0,1],["6%","-16%"])
  const img2R=useTransform(a1 ,[0,1],[-5,-30])
  const img2T=useTransform(a1 ,[0,1],["-20%","-100%"])
  ///////// 
  const img3R=useTransform(a1 ,[0,1],[5,30])
  ///////////
  const img4T=useTransform(a1 ,[0,1],["-10%","-40%"])
  const img4=useTransform(a1 ,[0,1],["15%","-20%"])



  return (
    <div className="overflow-hidden">
      <Nav variantsNav={variantsNav}></Nav>
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
              <Image height={80} width={80} src="/x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/1.png" alt="image" 
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/2.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/3.png" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/4.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <a href="https://bento.me/shebl" className="card">
              <Image height={80} width={80} src="/me.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </a>
            <div className="card">
              <Image height={80} width={80} src="/5.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/6.png" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/8.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>

        </div>
        <h1 className="rounded-xl py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-all shadow-lg mt-8 font-medium">Explore the most creative Bentos &gt;</h1>
      </div>
      <div className="mx-auto container py-[100px] flex justify-center items-center flex-col">
        <motion.h1 
          className="text-6xl font-bold text-center leading-[70px] mb-8"
          variants={variantsText} initial="hidden" whileInView="show">
          Your Videos. Podcasts.<br /> Newsletters. Photos.<br /> Paid Products. Streams.<br /> Calendar.
        </motion.h1>
        <motion.p 
          variants={variantsName} initial="hidden" whileInView="show"
          className="text-3xl font-medium text-center text-gray-500 ">
          All your content integrated into your personal page. <br />
          No more hiding your content behind links.
        </motion.p>
        <div className="gridSystem" ref={ref2}>
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
        <h1 className="text-3xl font-bold text-center leading-[70px] mb-8">And many more</h1>
        <div className="slider pb-[200px]">
          <div className="slider-track">
            <div className="slide">
              <Image src={"/1.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/2.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/3.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/4.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/5.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/6.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/7.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/8.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/9.svg"} height={40} width={50} alt="brand"></Image>
            </div>

            <div className="slide">
              <Image src={"/1.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/2.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/3.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/4.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/5.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/6.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/7.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/8.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            <div className="slide">
              <Image src={"/9.svg"} height={40} width={50} alt="brand"></Image>
            </div>
            
          </div>
        </div>
        <motion.h1 
          className="text-6xl font-bold text-center leading-[70px] mb-8 "
          variants={variantsText} initial="hidden" whileInView="show">
          Your unique link.
        </motion.h1>
        <motion.p 
          variants={variantsName} initial="hidden" whileInView="show"
          className="text-3xl font-medium text-center text-gray-500 mb-20 ">
            And btw, the good ones are still free.
        </motion.p>
        <div className="flex justify-center items-center gap-2 rounded-3xl
            border-2 border-gray-200 bg-gray-100 p-20 w-[70%] relative h-[600px] "
        >
          <h1 className="text-5xl font-medium text-center text-gray-400" >bento.me/</h1>
          <div className="sliderh">
            <div className="slider-trackh">
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >shebl</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ahmed</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ali</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mona</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hager</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Maryem</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mohamed</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Amer</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hassan</h1>

              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >shebl</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ahmed</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ali</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mona</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hager</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Maryem</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mohamed</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Amer</h1>
              <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hassan</h1>
            </div>
          </div>
          <div className="images">
          <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              src="a3.png" alt="img"
              className="absolute w-[200px] shadow-2xl rounded-3xl top-[60px] right-[-80px] rotate-[12deg]
            " />
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              src="a2.png" alt="img"
              className="absolute w-[200px] shadow-2xl rounded-3xl top-[-60px] left-[-80px] -rotate-[12deg]
                
            " />
            <motion.img
              variants={variantsImg} initial="hidden" animate="show" 
              src="d.png" alt="img" 
              className="absolute w-[340px] shadow-2xl rounded-3xl bottom-[-20px] left-[80px] rotate-[7deg]
            " />            
          </div>
        </div>
      </div>
    </div>
  )
}
