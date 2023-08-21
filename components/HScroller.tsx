import { variantsImg, variantsName, variantsText } from '@/utils/Framer'
import { motion } from 'framer-motion'
import Image from "next/image";


function HScroller() {
  return (
    <>
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
        className="text-3xl md:text-6xl font-bold text-center leading-[70px] mb-8 "
        variants={variantsText} initial="hidden" whileInView="show" viewport={{once :true}} >
        Your unique link.
      </motion.h1>
      <motion.p 
        variants={variantsName} initial="hidden" whileInView="show" viewport={{once :true}}
        className="text-lg md:text-3xl font-medium text-center text-gray-500 mb-20 ">
          And btw, the good ones are still free.
      </motion.p>
      <div className="flex justify-center items-center gap-2 rounded-3xl
          border-2 border-gray-200 bg-gray-100 p-4 md:p-20 w-[93%] md:w-[70%] relative h-[340px]  md:h-[600px]  "
      >
        <h1 className="text-3xl md:text-5xl font-medium text-center text-gray-400" >bento.me/</h1>
        <div className="sliderh">
          <div className="slider-trackh">
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >shebl</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ahmed</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ali</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mona</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hager</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Maryem</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Abra</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Amer</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hassan</h1>

            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >shebl</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ahmed</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Ali</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Mona</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hager</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Maryem</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Abra</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Amer</h1>
            <h1 className="slideh text-5xl font-medium text-center text-gray-800" >Hassan</h1>
          </div>
        </div>
        <div className="images hidden md:block">
        <motion.img
            variants={variantsImg} initial="hidden" animate="show" 
            src="a3.png" alt="img"
            className="absolute w-[200px] shadow-2xl rounded-3xl top-[60px] right-[-140px] xl:right-[-40px] rotate-[12deg]
          " />
          <motion.img
            variants={variantsImg} initial="hidden" animate="show" 
            src="a2.png" alt="img"
            className="absolute w-[200px] shadow-2xl rounded-3xl top-[-60px] left-[-80px] -rotate-[12deg]
              
          " />
          <motion.img
            variants={variantsImg} initial="hidden" animate="show" 
            src="d.png" alt="img" 
            className="absolute w-[340px] shadow-2xl rounded-3xl bottom-[-20px] left-[-35px] xl:left-[80px] rotate-[7deg]
          " />            
        </div>
      </div>
      <motion.div variants={variantsText} initial="hidden" whileInView="show" viewport={{once :true}} className="pt-[100px]">
        <p className="text-lg  md:text-2xl font-bold bg-blue-400 cursor-pointer py-4 px-12 rounded-xl text-white shadow-2xl">Create Your Bento</p>
      </motion.div>
    </>
  )
}

export default HScroller
