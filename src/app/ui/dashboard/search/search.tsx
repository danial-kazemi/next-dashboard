'use client'
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { MdSearch } from "react-icons/md"
import { useDebouncedCallback } from "use-debounce";


function Search({placeholder}: {placeholder: string} ) {
  const {replace} = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const searchHandel = useDebouncedCallback((e : React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", '1');
    if (e.target.value.length ) {
      e.target.value.length> 2 && params.set("q",e.target.value);
    }else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`); // "?"" auto generate ?q=
  },1000);
  return (
    <div className="search-wrapper flex flex-row items-center relative">
        <MdSearch size={18} className="absolute left-1"/>
        <input type="text" placeholder={placeholder} className="search flex bg-slate-400/20 border-none outline-none pl-7 text-base  p-1 rounded-lg" onChange={searchHandel} />
    </div>
  )
}

export default Search