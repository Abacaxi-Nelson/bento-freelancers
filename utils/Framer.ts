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

export {variantsNav ,variantsBtn ,variantsImg ,variantsLogo,variantsName ,variantsText}