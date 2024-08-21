

import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { fetchProducts } from "@/app/lib/data";

const ProductsPage= async({ searchParams }) => {
 
  const query = searchParams?.q || ""; 
  const page = searchParams?.page || "1";  
  const { products , count} = await fetchProducts(query, page);

  return (
    <section className="products w-full bg-slate-800 rounded-lg p-3">
      <header className="users__header flex justify-between items-center w-full p-3">
        <Search placeholder="search for products ..." />
        <Link href="/dashboard/products/add" className="inline-block">
          <button className="p-2 text-sm text-white border-none bg-violet-600 rounded-md cursor-pointer">Add New</button>
        </Link>
      </header>
      <div className="table-wrapper w-full overflow-x-auto">
        <table className="w-full border-collapse border-spacing-1">
          <thead>
            <tr className="text-sm align-middle">
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-sm p-2">
                <td className="flex gap-2 px-1 items-center w-max">
                  <Image className="object-cover rounded-full" src={product.img || "/noProductFund.png"} alt="avatar" width={40} height={40}/>
                  <span>{product.title}</span>
                </td>
                <td className="px-1">{product.description}</td>
                <td className="px-1">{product.price}</td>
                <td className="px-1">{product.createAt?.toString().splice(4,16)}</td>
                <td className="px-1">{product.stock}</td>
                <td className="px-1">
                  <div className="flex gap-2">
                    <Link href={`/dashboard/products/{product.id}`}>
                      <button className="bg-green-700 text-white rounded-lg text-sm py-1 px-2  border-none cursor-pointer">
                        View
                      </button>
                    </Link>
                    <Link href="#">
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
        
        <Pagination count = {count}  />

    </section>
  )
}

export default ProductsPage