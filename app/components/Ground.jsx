"use client";
import Image from "next/image";
import ninja from "@/public/ninja.png";
import castle from "@/public/castle.png";
import base from "@/public/Vector2.svg";

export default function Ground() {
  return (
    <div className="flex flex-col w-full h-fit absolute -bottom-4 md:-bottom-28 overflow-hidden md:-space-y-9 -space-y-20 items-center">
      <div className="flex justify-between w-full md:px-9 px-0 items-end">
        <Image
          alt="ninja"
          src={ninja}
          quality={100}
          className="scale-50 md:scale-x-100 md:scale-y-100"
        />

        <Image
          alt="castle"
          src={castle}
          quality={100}
          className="scale-50 md:scale-x-100 md:scale-y-100 translate-y-6"
        />
      </div>
      <Image
        alt="ground"
        src={base}
        quality={100}
        className="object-fill"
        style={{
          zIndex: "-1",
        }}
      />
    </div>
  );
}
