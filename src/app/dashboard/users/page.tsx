import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";


function UsersPage() {
  return (
    <section className="users bg-slate-800 rounded-lg p-3">
      <header className="users__header flex justify-between items-center w-full p-3">
        <Search placeholder="search for users ..." />
        <Link href="/dashboard/users/add" className="inline-block">
          <button className="p-2 text-sm text-white border-none bg-violet-600 rounded-md cursor-pointer">Add New</button>
        </Link>
      </header>
     
        <table className="w-full overflow-scroll">
          <thead>
            <tr className="text-sm align-middle ">
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm p-2">
                <td className="flex gap-1 items-center">
                  <Image className="object-cover rounded-full" src="/noAvatar1.png" alt="avatar" width={40} height={40}/>
                  <span>Danial</span>
                </td>
                <td>web.kazemi@gmail.com</td>
                <td>01.01.2024</td>
                <td>administrator</td>
                <td>active</td>
                <td>
                  <div className="flex gap-2">
                    <Link href="/">
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
              <tr className="text-sm p-2">
                <td className="flex gap-1 items-center">
                  <Image className="object-cover rounded-full" src="/noAvatar1.png" alt="avatar" width={40} height={40}/>
                  <span>Danial</span>
                </td>
                <td>web.kazemi@gmail.com</td>
                <td>01.01.2024</td>
                <td>administrator</td>
                <td>active</td>
                <td>
                  <div className="flex gap-2">
                    <Link href="/">
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
          </tbody>
        </table>
        <Pagination />

    </section>
  )
}

export default UsersPage