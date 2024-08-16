'use client'

import React, { useEffect } from 'react'
import Navbar from './(components)/Navbar'
import SideBar from './(components)/sidebar/page'
import StoreProvider, { useAppSelector } from './redux'


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    const isSidebarCollapsed = useAppSelector((state)=>state.global.isSidebarCollapsed)

    const isDarkMode  = useAppSelector((state)=>state.global.isDarkMode)

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen `}>
            <SideBar />
            <main className={`flex flex-col  w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? ' md:pl-24 ' : 'md:pl-72'}`}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper