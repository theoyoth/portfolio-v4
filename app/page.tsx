"use client"

import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  gsap.registerPlugin(useGSAP)

  const container = useRef<HTMLDivElement>(null)
  const mainText = useRef(null)
  const split = useRef<SplitText | null>(null)

  const {contextSafe} = useGSAP(() => {
    split.current = SplitText.create(mainText.current,{
      type:"chars"
    })
  },{scope:container})
  
  const animateWeightText = contextSafe(() => {
    if (!split.current) return

    split.current.chars.forEach((el) => {
      gsap.from(el,{
        fontWeight:400,
        stagger:0.02,
        ease:"power3.in"
      })
      gsap.to(el,{
        fontWeight:800,
        stagger:0.02,
        ease:"power3.in"
      })
    }) 
  })

  const resetWeightText = contextSafe(() => {
    if (!split.current) return

    split.current.chars.forEach((el) => {
      gsap.from(el,{
        fontWeight:800,
        stagger:0.02,
        ease:"power3.in"
      })
      gsap.to(el,{
        fontWeight:400,
        stagger:0.02,
        ease:"power3.in"
      })
    }) 
  })


  return (
    <div ref={container} className="text-4xl h-screen flex flex-col flex-1 items-center justify-center bg-primary">
      <div className="relative z-50">
        <h1 
          ref={mainText} 
          onMouseEnter={animateWeightText} 
          onMouseLeave={resetWeightText} 
          className="border md:text-[7rem] text-[4rem] font-bold text-center md:leading-24 leading-none">
            LET ME <br/>SHOW <span className="text-third font-normal">&</span> INTRODUCE <br/><span className="text-third font-normal">my PASSION</span></h1>
      </div>
      <Image 
        src="/assets/hero1.jpg" 
        preload={true} 
        width={200} 
        height={200} 
        alt="hero image 1" 
        className="absolute z-10 md:bottom-16 bottom-32 md:left-48"
      />
      <Image 
        src="/assets/hero2.jpg" 
        preload={true} 
        width={200} 
        height={200} 
        alt="hero image 2" 
        className="absolute z-10 md:top-32 top-32 md:right-40"
      />
    </div>
  );
}
