'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";



function Pagination({count}) {
  const {replace} = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const ITEM_PER_PAGE = 2;
  const page: string = searchParams.get("page") || "1";
  const params = new URLSearchParams(searchParams);
  const hasPerv = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < 6 < count
  const handelChangePage = (type : string)=> {

    type ==='prev'
     ? params.set("page", (parseInt(page) - 1).toString() )
     : params.set( "page", ( parseInt(page)+1 ).toString() );

    replace(`${pathname}?${params}`);
  }
  return (
    <div className="pagination flex justify-between items-center p-2">
        <button className={ hasPerv ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={!hasPerv} onClick={()=>handelChangePage("prev")}>
            Previous
        </button>
        <button className={ hasNext ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={!hasNext} onClick={()=>handelChangePage("next")}>
            Next
        </button>
    </div>
  )
}

export default Pagination