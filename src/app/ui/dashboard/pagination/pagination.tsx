'use client'
import { useState } from "react"

function Pagination() {
const [previousItemStatus, setPreviousItemStatus] = useState(true);
const [nextItemStatus, setNextItemStatus] = useState(true);
  return (
    <div className="pagination flex justify-between items-center p-2">
        <button className={ previousItemStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={previousItemStatus ? true : false}>
            Previous
        </button>
        <button className={ nextItemStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={nextItemStatus ? true : false}>
            Next
        </button>
    </div>
  )
}

export default Pagination