import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'


function layout({children} : Readonly <{children: React.ReactNode}>) {
  return (
    <div className='flex gap-3'>
        <div className='hidden sm:flex sm:w-3/12 lg:w-2/12'>
            <Sidebar />
        </div>
        <div className='flex flex-col flex-wrap gap-3 sm:w-9/12 lg:w-10/12'>
            <Navbar />
              {children}  
        </div>
    </div>
  )
}

export default layout

