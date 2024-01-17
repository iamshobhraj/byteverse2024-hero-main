"use client"

import React from 'react';
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'

export default function SideBar() {
    return(
        <div className="flex md:hidden">
                <UseAnimations animation={menu3} />
        </div>
    )
}
