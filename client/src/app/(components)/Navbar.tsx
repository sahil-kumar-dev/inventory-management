'use client'

import { Bell, Menu, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full mb-7'>
            {/* left side */}
            <div className="flex justify-between items-center gap-5">
                <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" >
                    <Menu className='size-4' />
                </button>
                <div className="relative">
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder='Start type to search groups & products' className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
                    />

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Bell className='size-4 text-gray-500' />
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="flex justify-between items-center gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <div className="">
                        <button className="">
                            <Sun className='cursor-pointer text-gray-500 size-4 ' />
                        </button>
                    </div>
                    <div className="relative">
                        <Bell className='cursor-pointer text-gray-500 size-6 ' />
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                            9+
                        </span>
                    </div>
                    <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="size-9">
                            imaage
                        </div>
                        <div className="font-semibold">Your name</div>
                    </div>
                </div>
                <Link href="/">
                    <Settings className='cursor-pointer text-gray-500 size-6' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar