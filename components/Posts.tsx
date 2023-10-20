'use client'

import { useState, useContext, useEffect } from 'react'
import { shared } from './State'
import Image from 'next/image'

export default function Posts(){
    const s = useContext(shared)
    const [currentPage, setCurrentPage] = useState(1)
    const [slice, setSlice] = useState({start: 0, end: 3})
    const [filter, setFilter] = useState("All")
    const [backup, setBackup] = useState<any>([])
    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        if (filter == "Featured"){
            fetch("/api/getposts/featured").then(e => e.json()).then(e => setPosts(e))
        } else{
            fetch("/api/getposts").then(e => e.json()).then(e => setPosts(e))
        }
        s.setPosts(posts)
    }, [filter])

    const nextPage = () => {
        if (slice.end >= posts.length){
            return
        }
        if (currentPage == 1){
            setSlice({start: 3, end: 9})
        }else{
            setSlice({start: slice.start+6, end: slice.end+6})
        }
        setCurrentPage(curr => curr + 1)
    }
    const prevPage = () => {
        if (currentPage == 1) {
            return
        }
        if (currentPage == 2){
            setSlice({start: 0, end: 3})
        }else{
            setSlice({start: slice.start-6, end: slice.end-6})
        }
        setCurrentPage(curr => curr - 1)
    }

    const filters = ["All", "Featured", "Trending"]
    const image = (post: any) => <Image className='absolute top-0 left-0 w-full h-full rounded-3xl' alt='' width={1920} height={720} src={post["image-url"]}/>

    return <div className="mt-[-40px] md:px-20 md:mt-14 mb-20 grid all-posts">
        <div className='flex justify-between place-items-center'>
            <h1 className="min-w-max text-3xl font-black row-start-2 md:row-start-1 px-5 mt-[40px] md:px-0 md:mt-0">Discover {s.search == "" ? "new things" : '"'+s.search+'"'}</h1>
            <div className='hidden md:flex mt-10 gap-10 place-items-center w-full justify-end'>
                <button className="bg-black rounded-full px-5 py-2 text-xl" onClick={() => prevPage()}>Back</button>
                <p>Page {currentPage}</p>
                <button className="bg-black rounded-full px-5 py-2 text-xl" onClick={() => nextPage()}>Next</button>
            </div>
        </div>
        <div className="flex gap-4 mt-8 row-start-1 md:row-start-2 justify-evenly md:justify-normal bg-custom-gray py-3 pb-10 md:py-0 md:bg-transparent">
            {filters.map((tag) => {
                return <button onClick={() => {setCurrentPage(1); setSlice({start: 0, end: 3}); setFilter(tag); s.search != "" ? s.setSearch("") : null}} className={`bg-black ${tag == filter ? "border-custom-light-gray border-2" : ""} font-black rounded-full px-7 md:px-5 py-2 text-[11pt] md:text-[13pt]`}>{tag}</button>
            })}
        </div>
        <section className="posts px-5 md:px-0 grid mt-8 w-full md:min-h-fit max-h-[575px] md:aspect-video grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-7">
            {posts.filter((post: any) => post.title.toLowerCase().includes(s.search) || post.description.toLowerCase().includes(s.search) || post.tags.toLowerCase().includes(s.search)).slice(slice.start, slice.end).map((post: any, index: any) => {
                return ( currentPage == 1 && index == 0 ) ? <div className="md:bg-custom-gray md:col-span-2 md:row-span-2 bg-custom-gray col-span-2 rounded-3xl flex place-items-end relative">
                    {image(post)}
                    <div className="relative  mx-10 mb-5 mt-10 md:mt-0">
                        <h1 className='font-black text-4xl mb-5'>{post.title}</h1>
                        <p>{post.description}</p>
                        <button className='bg-black rounded-full px-10 py-2 mt-10' onClick={() => {s.setArticleId(post.id); s.toggleArticle()}}>Read</button>
                    </div>
                </div> : <div className='relative'>
                    {image(post)}
                    <div className="details relative">
                        <div className='absolute w-[98%] h-[95%] bg-black rounded-3xl -z-20 opacity-50'></div>
                        <h1 className='font-black text-2xl'>{post.title}</h1>
                        <p>{post.description}</p>
                        <button className='bg-black rounded-full px-5 py-2 mt-10' onClick={() => {s.setArticleId(post.id); s.toggleArticle()}}>Read</button>
                    </div>
                </div>
            })}
        </section>
        <div className='md:hidden mt-10 flex gap-10 place-items-center w-full justify-between px-5'>
            <button className="bg-black rounded-full px-5 py-2 text-xl" onClick={() => prevPage()}>Back</button>
            <p>Page {currentPage}</p>
            <button className="bg-black rounded-full px-5 py-2 text-xl" onClick={() => nextPage()}>Next</button>
        </div>
        <button className="md:hidden mt-10 m-auto w-[200px] px-7 h-12 bg-black rounded-full text-sm">Become a Supporter!</button>
    </div>
}