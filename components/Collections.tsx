import { useContext, useEffect, useState } from "react"
import { shared } from "./State"
import Image from "next/image"

export default function Collections(){
    const collections = ["Tech", "Science"]
    const s = useContext(shared)

    return <div className="px-5 md:px-20 md:mt-36 mb-20">
        <h1 className="text-3xl font-black mb-5">Collections</h1>
        <section className="collections grid grid-cols-1 min-h-[400px] md:grid-cols-2 w-full gap-10">
            {collections.map((collection) => {
                return <div className="md:px-10 md:aspect-video bg-custom-gray rounded-3xl relative">
                    <div className="static md:my-10 rounded-3xl w-full h-full md:w-[100%] md:h-[100%] bg-custom-light-gray md:relative">
                        <Image className="md:absolute rounded-3xl w-full h-full top-0 left-0" alt="" width={1920} height={500} src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHww"/>
                    </div>
                    <div className="absolute md:static flex gap-5 place-items-center mt-10 md:mt-5 w-full pb-5">
                        <div className="rounded-full md:w-[95px] h-[95px] bg-custom-light-gray relative">
                        <Image className="hidden absolute z-0 rounded-full w-full h-full top-0 left-0" alt="" width={1920} height={500} src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0fGVufDB8fDB8fHww"/>
                        </div>
                        <div className="">
                            <h1 className="text-2xl font-black">Discover {collection}</h1>
                        </div>
                        <button className="bg-black rounded-full px-8 py-2 text-xl m-auto mr-5 md:mr-0" onClick={()=> {window.scrollTo({top: 0, behavior: "smooth"}); s.setSearch(collection.toLowerCase())}}>Read</button>
                    </div>
                </div>
            })}
        </section>
        {/* <div className="flex justify-center mt-20">
            <button className="bg-black rounded-full px-8 py-2 text-xl">Load More</button>
        </div> */}
    </div>
}