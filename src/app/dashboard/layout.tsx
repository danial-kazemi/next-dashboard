import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import Footer from '../ui/dashboard/footer/footer'

function layout({children} : Readonly <{children: React.ReactNode}>) {
  return (
    <div className='flex flex-wrap gap-0 sm:gap-3 sm:flex-nowrap'>
        <div className='flex w-full sm:w-auto'>
            <Sidebar />
        </div>
        <div className='hidden sm:flex sm:flex-col gap-0 sm:gap-3 flex-nowrap w-full sm:w-full'>
            <Navbar />
            {children}
            <Footer />          
        </div>
    </div>
  )
}

export default layout

