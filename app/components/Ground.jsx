'use client'

import { motion } from "framer-motion";

import Image from "next/image";
import ninja from "@/public/ninja.png";
import castle from "@/public/castle.png";
import base from "@/public/Vector2.svg";

export default function Ground() {
  return (
    <motion.div
      initial={{ scale: 3, }}
      animate={{ scale: 1.02 }}
      transition={{ duration: 0.8, delay: 5, type: 'spring', bounce: 0.15 }}
      className="flex flex-col w-full h-2/3 absolute bottom-0 overflow-hidden items-center">
      <div className="flex justify-between w-full items-end">
        <Image
          alt="ninja"
          src={ninja}
          quality={100}
          className="scale-50 md:scale-75 lg:scale-[1.0] lg:translate-y-12 md:translate-y-16 translate-y-24 md:ml-12 -ml-6"
        />
        <Image
          alt="castle"
          src={castle}
          quality={100}
          className="scale-50 md:scale-[0.7] lg:scale-[1.0] lg:translate-y-16 md:translate-y-[7.2rem] translate-y-36 md:mr-10 -mr-10"
        />
      </div>
      <Image
        alt="ground"
        src={base}
        quality={100}
        className="w-full h-full object-cover"
        style={{
          zIndex: "-1",
        }}
      />
    </motion.div>
  );
}
