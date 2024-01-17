import Image from 'next/image'
import Navigation from './components/navigation'
import localFont from 'next/font/local'
import Logo from './components/logo'
import Ground from './components/Ground'
import Baadal from './components/Silverlines'
import Bodyy from './components/body'

const Japanese3017 = localFont({ 
  src: [
    {
      path: './Japanese017.otf',
      weight: '400',
      variable: '--font-japani',
    },
  ],
})

export default function Home() {
  return (
    <main className={` relative flex min-h-screen overflow-hidden flex-col items-center justify-center px-52 pt-9 ${Japanese3017.variable}`}>
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
    <Navigation />

    <Baadal />
    <div className="translate-y-6 w-5/6 flex flex-col items-center justify-center gap-5 absolute">
      <Logo />

      <Bodyy />
    </div>
    
    <Ground />

    </main>
  )
}
