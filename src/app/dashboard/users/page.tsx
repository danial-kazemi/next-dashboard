import {fetchUsers} from "@/app/lib/data"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { ReactNode } from "react";
const UsersPage = async ({searchParams}) => {

  console.log(searchParams.q)
  const query = searchParams?.q || "";
  
  
  const users = await fetchUsers(query); 

  return (
    <section className="users w-full bg-slate-800 rounded-lg p-3">
      <header className="users__header flex justify-between items-center w-full p-3">
        <Search placeholder="search for users ..." />
        <Link href="/dashboard/users/add" className="inline-block">
          <button className="p-2 text-sm text-white border-none bg-violet-600 rounded-md cursor-pointer">Add New</button>
        </Link>
      </header>
      <div className="table-wrapper overflow-x-auto">
      <table className="w-full ">
          <thead>
            <tr className="text-sm align-left">
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (            
              <tr key={user.id} className="text-sm p-2">
                  <td className="flex gap-2 px-1 items-center w-max">
                    <Image className="object-cover rounded-full" src={user.img || '/noAvatar1.png'} alt="avatar" width={40} height={40}/>
                    <span>{user.username}</span>
                  </td>
                  <td className="px-1">{user.email}</td>
                  <td className="px-1">{user.createdAt?.toString().slice(4,16)}</td>
                  <td className="px-1">{user.isAdmin ? 'Admin': 'client'}</td>
                  <td className="px-1">{user.isActive ? 'Active': "passive"}</td>
                  <td className="px-1">
                    <div className="flex gap-2">
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className="bg-green-700 text-white rounded-lg text-sm py-1 px-2  border-none cursor-pointer">
                          View
                        </button>
                      </Link>
                      <Link href="/">
                        <button className="bg-red-700 text-white rounded-lg text-sm py-1 px-2 border-none cursor-pointer">
                          Delete
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
            ))}       

          </tbody>
        </table>
      </div>        
        <Pagination />
    </section>
  )
}

export default UsersPage