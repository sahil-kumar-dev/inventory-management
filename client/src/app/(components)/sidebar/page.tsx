import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/state';
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SidebarLinksProps {
    href: string;
    label: string;
    icon: LucideIcon;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed
}: SidebarLinksProps) => {

    const pathName = usePathname()
    const isActive = pathName === href || (pathName == '/' && href == '/dashboard')

    return (
        <>
            <Link href={href} >
                <div
                    className={`cursor-pointer flex items-center ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'} hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' : ''} `}>
                    <Icon className='!text-gray-700 size-6 ' />
                    <p className='text-gray-700 font-medium'>{label}</p>
                </div>
            </Link>
        </>
    )
}


const SideBar = () => {

    const dispatch = useAppDispatch();

    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 ease-in-out overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${(isSidebarCollapsed ? 'px-5' : 'px-8')}`}>
                <div className="">logo</div>
                <h1 className={`font-extrabold text-2xl ${isSidebarCollapsed ? 'hidden' : 'block'}`}>EDSTOCK</h1>
                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 "
                    onClick={toggleSidebar}
                >
                    <Menu className='size-4' />
                </button>
            </div>
            {/* links */}

            <div className="flex-grow mt-8">
                <SidebarLink
                    href='/dashboard'
                    label='Dashboard'
                    icon={Layout}
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventory"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={Clipboard}
                    label="Products"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Users"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/settings"
                    icon={SlidersHorizontal}
                    label="Settings"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/expenses"
                    icon={CircleDollarSign}
                    label="Expenses"
                    isCollapsed={isSidebarCollapsed}
                />
            </div>
            {/* footer */}

            {
                !isSidebarCollapsed &&
                <div className="">
                    <p className='text-center text-xs text-gray-500'>&copy; 2024 edstock</p>
                </div>
            }
        </div>
    )
}

export default SideBar