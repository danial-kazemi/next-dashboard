import React from 'react'
import Link from 'next/link';
interface Item {  
    item : {
      title: string;
      path: string;
      icon: React.ReactNode;  
    }
}
function MenuLink({item } :Item) {
  return (
    <Link href={item.path} className='item ml-2 p-2 flex items-center gap-2 my-2 hover:bg-slate-400/10 active:bg-slate-400 rounded-lg'>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink;