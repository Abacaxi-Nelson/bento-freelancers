import Image from "next/image";
import React from 'react'

function Cards() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-bold text-3xl lg:text-5xl uppercase text-center mb-10  ">Join thousands of inspiring creatives</h1>
      <h1 className="text-gray-500 text-lg  text-center mb-14 lg:text-2xl ">You Can Create Awesome Like These</h1>

      <div className="flex gap-16 lg:gap-6 justify-center items-center flex-col md:flex-row  ">
          <div className="flex gap-2 lg:gap-6 justify-center items-center flex-row  ">
            <div className="card ">
              <Image height={80} width={80} src="/x.jpg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card ">
              <Image height={80} width={80} src="/1.png" alt="image" 
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card ">
              <Image height={80} width={80} src="/2.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card ">
              <Image height={80} width={80} src="/3.png" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
          </div>
          <div className="flex gap-2 lg:gap-6 justify-center items-center flex-row  ">
            <div className="card">
              <Image height={80} width={80} src="/4.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>          
            <div className="card">
              <Image height={80} width={80} src="/5.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/1.png" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
            <div className="card">
              <Image height={80} width={80} src="/8.jpeg" alt="image"
              className="cursor-pointer rounded-full " />
            </div>
          </div>
      </div>
      
      <h1 className="rounded-xl py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-all shadow-lg mt-8 font-medium w-fit">Explore the most creative Bentos &gt;</h1>
    </div>
  )
}

export default Cards
