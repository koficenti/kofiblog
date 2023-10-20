import SearchBar from "./SearchBar";

export default function Header(){
    return <div className="w-full h-fit pb-5 md:pb-0 md:h-[100px] bg-custom-gray text-white grid justify-center md:justify-between place-items-center md:px-20 gap-10 md:flex">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-2xl font-bold min-w-max">KOFICENTI'S BLOG</h1>
        <SearchBar/>
        <button className="hidden md:block min-w-max px-7 h-12 bg-black rounded-full text-sm">Become a Supporter!</button>
    </div>
}