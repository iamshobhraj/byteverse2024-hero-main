"use client";
import Image from "next/image";
import byte from '@/public/byte.svg';
import erse from '@/public/erse.svg'
import v from '@/public/vv.png'
import sun from '@/public/sun.svg'

export default function Logo() {
    return(
        <div className="flex object-contain w-full inset-y-48 justify-center md:items-center">
            <div className="flex justify-center w-full h-fit md:gap-3 gap-10 z-20 md:-translate-y-4 -translate-y-8">
                <Image
                alt="byte"
                src={byte}
                quality={100}
                className="md:scale-x-75 md:scale-y-75 size-2/5 invert"/>

                <Image
                alt="erse"
                src={erse}
                quality={100}
                className="md:scale-x-75 md:scale-y-75 size-2/5 invert"
                />
            </div>
            
            <Image
            alt="sun"
            src={sun}
            quality={100}
            className="absolute md:scale-75 scale-50 -translate-y-40 md:translate-y-0" />

            <Image
            alt="v"
            src={v}
            quality={100}
            className="z-30 md:scale-x-75 md:scale-y-75 md:-translate-y-4 -translate-y-20 scale-[0.5] absolute"
            />

            

        </div>
    )
}
