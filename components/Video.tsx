import React, { MutableRefObject, RefObject } from 'react'

type props ={
  refVideo :  RefObject<HTMLInputElement>
}
function Video({refVideo} :props) {

  return (
    <div ref={refVideo} className="mx-auto container
      lg:bg-slate-700  rounded-[40px] p-0
        z-20 relative pb-[220px] lg:p-10 lg:mb-40">
      <iframe  src="https://www.youtube.com/embed/asFa8_2EeVM"
        className="shadow-2xl md:rounded-lg lg:rounded-3xl overflow-hidden h-[350px] md:h-[600px] xl:h-[860px] "
        width="100%"           
        >            
        </iframe>
    </div> 
  )
}

export default Video
