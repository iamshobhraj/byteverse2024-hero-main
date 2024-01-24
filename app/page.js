'use client'

import { motion } from 'framer-motion';

import Image from 'next/image'
import Navigation from './components/navigation'
import Logo from './components/Logo'
import Ground from './components/Ground'
import Baadal from './components/Silverlines'
import Body from './components/body'

export default function Home() {
  return (
    <main className="relative flex min-h-screen overflow-hidden flex-col items-center justify-center px-52 pt-9">
      <Navigation />
      <Image
      alt="bg-1"
      src='/image2.svg'
      quality={100}
      fill
      sizes="100vh 100vw"
      className="object-cover"
      style={{
        zIndex: '-1',
        width: '100%'
      }}
      />
      <Image
        alt="bg-2"
        src='/Rectangle.svg'
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          mixBlendMode: 'color-burn',
          zIndex:'-1'
        }}
      />
      <Baadal />
      <motion.div
            initial={{ y: 100 }}
            animate={{ y: [100, -20, 0] }}
            transition={{ duration: 0.6, delay: 4.9, ease: "easeOut" }} className="md:-translate-y-2 -translate-y-20 w-5/6 flex flex-col items-center justify-center gap-5 absolute">
        <Logo />
        <Body />
      </motion.div>
      <Ground />
    </main>
  )
}
