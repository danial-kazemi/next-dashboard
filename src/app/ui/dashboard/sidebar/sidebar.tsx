
import { list } from "postcss"
import { IconType } from "react-icons"
import { 
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings

 } from "react-icons/md"
import MenuLink from "./menuLink/menuLink"
import Image from "next/image"

function Sidebar() {
  const menuItems : {title: string, list: {id: number, title: string, path: string, icon: React.ReactNode}[] }[]= [

    {
      title: "Pages",
      list: [
        {
          id: 1,
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />
        },
        {
          id: 2,
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />
        },
        {
          id: 3,
          title: "Dashboard",
          path: "/dashboard/products",
          icon: <MdShoppingBag />
        },
        {
          id: 4,
          title: "Dashboard",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />
        },
      ]
    },
    {
      title: "Analytics",
      list: [
        {
          id: 5,
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />
        },
        {
          id: 6,
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />
        },
        {
          id: 7,
          title: "Teams",
          path: "/dashboard/Teams",
          icon: <MdPeople />
        }
      ]
    },
    {
      title: "User",
      list: [
        {
          id: 8,
          title: "Settings",
          path: "/dashboard/revenue",
          icon: <MdWork />
        },
        {
          id: 9,
          title: "Reports",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />
        },
        {
          id: 10,
          title: "TeaHelopms",
          path: "/dashboard/help",
          icon: <MdHelpCenter />
        }
      ]
    }

  ]

  return (
    <div className="sidebar sticky flex flex-col bg-slate-800 p-3">
      <div className="user flex gap-2 items-center">
        <Image className="rounded-lg bg-cover" src="/noAvatar1.png" alt="user icon" width="50" height="50" />
        <div className="user__detail flex flex-col font-medium text-xs">
          <span className="user__title font-medium">Danial Kazemi</span>
          <span className="user__name font-light">Administrator</span>
        </div>
      </div>
      <ul className="list">                 
            {
              menuItems.map((cat) => (
                <li key={cat.title} className="category">
                  <span className="cat">{cat.title}</span>
                  {
                    cat.list.map((item) => (
                      <MenuLink item={item} key={item.title}/> 
                    ))
                  }
                </li>
              ))
            }        
      </ul>
    </div>
  )
}

export default Sidebar