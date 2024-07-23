import { MdSearch } from "react-icons/md"

function Search({placeholder}: {placeholder: string} ) {
  return (
    <div className="search-wrapper flex flex-row items-center relative">
        <MdSearch size={18} className="absolute left-1"/>
        <input type="text" placeholder={placeholder} className="search flex bg-slate-400/20 border-none outline-none pl-7 text-base  p-1 rounded-lg" />
    </div>
  )
}

export default Search