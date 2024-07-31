'use client'
import { useState } from "react"

function Pagination({previousStatus, nextStatus}: {previousStatus: boolean, nextStatus:boolean}) {

  return (
    <div className="pagination flex justify-between items-center p-2">
        <button className={ previousStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={previousStatus ? true : false}>
            Previous
        </button>
        <button className={ nextStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={nextStatus ? true : false}>
            Next
        </button>
    </div>
  )
}

export default Pagination