import { useContext, useEffect } from "react"
import { shared } from "./State"

export default function SearchBar(){
    const s = useContext(shared)

    return <div className="min-w-[200px] max-w-[650px] w-[650px] relative">
        <input className="w-full focus:outline-none bg-custom-black border-custom-light-gray border-4 rounded-full px-10 py-3 caret-white text-white" placeholder="search blog post" type="text" onChange={(e)=> s.setSearch(e.target.value.toLowerCase())} />
        <div className="absolute right-10 top-0 py-4">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9536 13.9458L20 20M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    </div>
}