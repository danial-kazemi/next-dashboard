import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'

function layout({children} : Readonly <{children: React.ReactNode}>) {
  return (
    <div className='flex flex-wrap sm:flex-nowrap'>
        <div className='flex-auto w-full md:w-1/5 md:mr-3'>
            <Sidebar />
        </div>
        <div className='flex-auto w-full md:w-4/5'>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default layout

