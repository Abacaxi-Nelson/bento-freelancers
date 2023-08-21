// import { variantsImg } from '@/utils/Framer'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import React from 'react'
// import { MutableRefObject } from 'react'

// type props ={
//   ref :  MutableRefObject<null>,
// }

// const HeroImages = React.forwardRef<HTMLInputElement , props>(({ref}) =>{
//   const {scrollYProgress}=useScroll({
//     target :ref,
//     offset:["start end", "end end"]
//   })
//   //////////
//   const img1=useTransform(scrollYProgress ,[0,1],["-6%","-16%"])
//   const img1R=useTransform(scrollYProgress ,[0,1],[-3,-14])
//   //////////
//   const img2=useTransform(scrollYProgress ,[0,1],["6%","-16%"])
//   const img2R=useTransform(scrollYProgress ,[0,1],[-5,-30])
//   const img2T=useTransform(scrollYProgress ,[0,1],["-20%","-100%"])
//   ///////// 
//   const img3R=useTransform(scrollYProgress ,[0,1],[5,30])
//   ///////////
//   const img4T=useTransform(scrollYProgress ,[0,1],["-5%","-40%"])
//   const img4=useTransform(scrollYProgress ,[0,1],["15%","-20%"])

//   return (
//   <div className="">
//     <motion.img
//       variants={variantsImg} initial="hidden" animate="show" 
//       style={{left:img1, rotate:img1R}}
//       src="63e5079c2efbf624bd00d1e3_hero verge-p-800.png" alt="img"
//       className="absolute w-[460px] shadow-xl rounded-3xl top-[50%] 
//     " />
//     <motion.img
//       variants={variantsImg} initial="hidden" animate="show" 
//       // style={{right:img2, rotate:img2R ,top:img2T}}
//       src="63e5097d8203b5520ba10809_hero substack-p-500.png" alt="img"
//       className="absolute w-[200px] shadow-xl rounded-3xl 
//     " />
//     <motion.img
//       variants={variantsImg} initial="hidden" animate="show" 
//       // style={{left:img2, rotate:img3R , top:img2T }}
//       src="d.png" alt="img"
//       className="absolute w-[300px] shadow-xl rounded-3xl 
//     " />            
//     <motion.img
//       variants={variantsImg} initial="hidden" animate="show" 
//       // style={{left:img4, rotate:img3R , bottom:img4T }}
//       src="63ebce23e53ac60a7fa7bd43_hero youtube.png" alt="img"
//       className="absolute w-[180px] shadow-xl rounded-3xl 
//     " />
//       <motion.img
//         variants={variantsImg} initial="hidden" animate="show" 
//         style={{right:img4, rotate:img3R ,bottom:img4T }}
//         src="63ea7d42d96b453e6c24c20f_hero buymeacoffee.png" alt="img"
//         className="absolute w-[160px] shadow-xl rounded-3xl 
//       " /> 
//   </div>
  
//   )
// })

// export default HeroImages
