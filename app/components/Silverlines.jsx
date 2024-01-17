"use client"
import Image from 'next/image'
import cloud1 from '@/public/baadal1.svg'
import cloud2 from '@/public/baadal2.svg'
import cloud3 from '@/public/baadal3.svg'

export default function Baadal() {
    return(
        <div className='md:flex flex-col w-full h-fit z-40 absolute inset-y-14 hidden'>
            
             <Image
            alt='cloud3'
            src={cloud3}
            quality={100}
            className="scale-90 translate-x-[53vw]"
            />
            


            <Image
            alt='cloud2'
            src={cloud2}
            quality={100}
            className="scale-90 translate-x-[60vw]"
            />

            <Image
            alt='cloud1'
            src={cloud1}
            quality={100}
            className="scale-90 translate-x-[36vw]"
            />
        </div>
    )
}
