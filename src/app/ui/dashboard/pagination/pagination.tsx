'use client'
import { useState } from "react";



function Pagination() {
  const [previousUsersStatus, setPreviousUsersStatus] = useState(false);
  const [nextUsersStatus, setNextUsersStatus] = useState(true);
  return (
    <div className="pagination flex justify-between items-center p-2">
        <button className={ previousUsersStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={previousUsersStatus ? true : false}>
            Previous
        </button>
        <button className={ nextUsersStatus ?  `py-1 px-2 rounded-md text-slate-800 bg-slate-100 cursor-pointer` : `py-1 px-2 rounded-md text-slate-900 bg-slate-600 cursor-not-allowed`} disabled={nextUsersStatus ? true : false}>
            Next
        </button>
    </div>
  )
}

export default Pagination