"use client"
import Link from "next/link";
import NavbarLink from "./navbarLink";
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
function Navbar() {
  const pathName = usePathname();
 
  interface NavIcon { 
    link: string;
    title: string;
    icon: React.ReactNode;
  }
  const navLink: NavIcon[] = [
    {
      link: '/#',
      title:'notification',
      icon: <MdNotifications size={20}/>          
    },
    {
      link: '/#',
      title:'chat',
      icon: <MdOutlineChat size={20}/>
           
    },
    {
      link: '/#',
      title:'public',
      icon: <MdPublic size={20}/>
    }  
  ]


  return (
    <nav className="flex justify-between items-center p-5 rounded-lg bg-slate-800">
      <div className="capitalize font-bold">
        {pathName.split("/").pop()}
      </div>
      <div className="menu flex items-center">
        <div className="search relative flex gap-2 items-center">
          <button className="absolute left-1" type="submit"><MdSearch size={20}/></button>
          <input type="text" placeholder="Search..." className="rounded-lg p-1 outline-none pl-6 bg-slate-400/20"/>
        </div>     
        <ul className="flex items-center gap-2">
          {
            navLink.map((iconItem) => 
                (
                  <li key={iconItem.title} className="nav__icon">     
                    <NavbarLink iconItem={iconItem}/>
                  </li>
                )
            )                            
          }         
        </ul>       
      </div>
    </nav>
  )
}

export default Navbar