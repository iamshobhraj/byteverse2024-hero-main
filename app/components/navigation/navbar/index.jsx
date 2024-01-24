import React from "react";
import Link from "next/link";

export default function Navbar() {
    return(
        <div className="md:flex hidden xl:mx-64 lg:mx-40 mx-24 w-full xl:h-36 md:h-28 items-center font-japanese xl:text-2xl lg:text-xl text-lg uppercase whitespace-nowrap">
            <ul className="flex w-full text-white justify-between">
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#home" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">Home</Link>
                </li>
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#about" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">About Us</Link>
                </li>
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#timeline" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">Timeline</Link>
                </li>
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#rules" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">Rules</Link>
                </li>
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#sponsors" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">Sponsors</Link>
                </li>
                <li className="md:hover:text-white/80 group transition-all cursor-pointer">
                    <Link href="#contact" className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300">Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}
