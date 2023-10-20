'use client'
import { useEffect, useContext, useState } from "react"
import { shared } from "./State"
import Image from "next/image"

export default function Article(){
    const s = useContext(shared)
    const [article, setArticle] = useState<any>()

    useEffect(() => {
        const reader = document.getElementById("article_reader")
        const med = reader.classList.contains("medium")

        if (reader) {
            if(document.body.offsetWidth <= 850){
                reader.style.height = document.body.offsetHeight + "px"
            }else{
                reader.style.height = document.body.offsetHeight-100 + "px"
            }
        }
        window.onresize = () => {
            if (reader){
                if(document.body.offsetWidth <= 850){
                    reader.style.height = document.body.offsetHeight + "px"
                }else{
                    reader.style.height = document.body.offsetHeight-100 + "px"
                }
            }
        }
        window.scrollTo({top: 0, behavior: "smooth"})

        fetch(`/api/getpost/${s.articleId}`).then(e => e.json()).then(e => setArticle(e[0]))
        return () => {
            setArticle(null)
        }
    },[s.articleOpened])
    const image = (post: any) => <Image className='absolute top-0 left-0 w-full rounded-md aspect-video' alt='' width={1920} height={720} src={post["image-url"]}/>

    return s.articleOpened && article ? <div id="article_reader" className={`z-10 px-5 md:px-20 pt-10 absolute top-0 md:top-[100px] left-0 bg-custom-black w-full overflow-hidden`}>
        <div className="flex w-full justify-end mb-5">
            <button onClick={() => s.toggleArticle()}><svg width={50} height={50} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.2" d="M8.5 23.5l15-15M23.5 23.5l-15-15"></path> </g></svg></button>
        </div>
        <div className="w-full min-h-[100px] md:min-h-[300px] bg-custom-gray mb-5 rounded-md overflow-hidden relative">{image(article)}</div>
        <h1 className="text-4xl font-black mb-5">{article.title}</h1>
        <p className="text-xl">{article.description}</p>
    </div> : <div id="article_reader" className={`px-5 md:px-20 pt-10 absolute top-0 md:top-[100px] left-0 bg-custom-black opacity-0 pointer-events-none w-full overflow-hidden`}></div>
}