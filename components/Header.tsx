import SearchBar from "./SearchBar";

export default function Header(){
    return <div className="w-full h-[100px] bg-custom-gray text-white flex justify-between place-items-center px-20 gap-10">
        <h1 className="text-xl md:text-2xl font-bold min-w-max">KOFICENTI'S BLOG</h1>
        <SearchBar/>
        <button className="min-w-max px-7 h-12 bg-black rounded-full text-sm">Become a Supporter!</button>
    </div>
}