import React from "react";
import Link from "next/link";

export default function NavBar() {
    return(
        <div className="w-5/6 h-20 flex items-center">
            
                
                    <ul className="hidden md:flex text-white w-full justify-between font-sans">
                        <li>
                            <Link href="">
                                <p>HOME</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>ABOUT US</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>TIMELINE</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>RULES</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>SPONSORS</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>CONTACT US</p>
                            </Link>
                        </li>
                    </ul>
                
            
        </div>
    )
}
