'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

function ProductsPage() {
  const [previousProductsStatus, SetPreviousProductsStatus] = useState(false);
  const [nextProductsStatus, setNextProductsStatus] = useState(true);
  return (
    <section className="products bg-slate-800 rounded-lg p-3">
      <header className="users__header flex justify-between items-center w-full p-3">
        <Search placeholder="search for products ..." />
        <Link href="/dashboard/products/add" className="inline-block">
          <button className="p-2 text-sm text-white border-none bg-violet-600 rounded-md cursor-pointer">Add New</button>
        </Link>
      </header>
     
        <table className="w-full overflow-scroll">
          <thead>
            <tr className="text-sm align-middle ">
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm p-2">
                <td className="flex gap-1 items-center">
                  <Image className="object-cover rounded-full" src="/noProductFund.png" alt="avatar" width={40} height={40}/>
                  <span>iphone</span>
                </td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia</td>
                <td>950$</td>
                <td>Oct 29 2023</td>
                <td>34</td>
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
                  <Image className="object-cover rounded-full" src="/noProductFund.png" alt="avatar" width={40} height={40}/>
                  <span>iphone</span>
                </td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperia</td>
                <td>950$</td>
                <td>Oct 29 2023</td>
                <td>34</td>
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
        <Pagination previousStatus={previousProductsStatus}  nextStatus={nextProductsStatus} />

    </section>
  )
}

export default ProductsPage