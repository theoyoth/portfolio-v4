"use client"

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const LoadingProgress = () => {
    const [isVisible,setIsVisible] = useState<boolean>(true)
    gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
    const container = useRef<HTMLDivElement>(null);
    const textProgress = useRef<HTMLHeadingElement|null>(null);

    const progress = {value:0}

    useGSAP(() => {
        const tlLoader = gsap.timeline({
            onUpdate:() => {
                let percentage = Math.floor(progress.value)
                if(textProgress.current){
                    textProgress.current.textContent = `${percentage.toString()}%`
                }
            }
        })

        tlLoader.to(progress, {
            value:100,
            duration:3.5,
            ease:"sine.out",
        })

        .call(() => {
            gsap.to(textProgress.current,{
                duration:1.6,
                yPercent: -100,
                ease: "expo.inOut",
                onComplete:() => setIsVisible(false)
            })
        })
    },{ scope: container });
    
  return (
    <>
    {
      isVisible ? (
        <div ref={container} className='bg-[#131313] h-dvh w-dvw absolute z-50 flex justify-center items-center'>
          <div className='max-content overflow-hidden'>
            <h1 ref={textProgress} className='text-center text-xl font-bold text-[#d2ff00]'>0%</h1>
          </div>
        </div>
      ) : null
    }
    </>
  )
}

export default LoadingProgress
