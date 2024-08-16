'use client'

import { Menu } from 'lucide-react'
import React from 'react'

const SideBar = () => {
    return (
        <div>
            <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
                <div className="">logo</div>
                <h1 className="font-extrabold text-2xl">EDSTOCK</h1>
                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 ">
                    <Menu className='size-4' />
                </button>
            </div>
            {/* links */}

            <div className="flex-grow mt-8">

            </div>
            {/* footer */}
            <div className="">
                <p className='text-center text-xs text-gray-500'>&copy; 2024 edstock</p>
            </div>
        </div>
    )
}

export default SideBar