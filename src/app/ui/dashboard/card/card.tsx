import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

function Card() {
  return (
    <div className='card flex flex-row gap-2 p-3 bg-slate-800 rounded-md w-full cursor-pointer hover:bg-slate-400/30'>
      <MdSupervisedUserCircle size={24} />
      <div className='card__text flex flex-col gap-1'>
        <span className='title text-md'>
          Total Users
        </span>
        <p className='number text-sm'>10.273</p>
        <p className='detail text-sm'><span className='text-emerald-500'>12%</span> more than previos week</p>
      </div>
    </div>
  )
}

export default Card