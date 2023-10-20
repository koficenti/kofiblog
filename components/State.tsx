'use client'

import { createContext, useState } from "react";

interface SharedData{
    articleId: number,
    setArticleId: any,
    articleOpened: boolean,
    toggleArticle: any,
    posts: any,
    setPosts: any,
    search: string,
    setSearch: any,
}

export const shared = createContext<SharedData>({} as SharedData)

export function State({children}: any){
    const [posts, setPosts] = useState<any>([])

    const [search, setSearch] = useState<any>([])

    const [articleId, setArticleId] = useState(0)

    const [articleOpened, setArticleOpened] = useState(false)

    return <shared.Provider value={{search, setSearch, posts, setPosts, articleId, setArticleId, articleOpened, toggleArticle: () => setArticleOpened(!articleOpened)}}>{children}</shared.Provider>
}