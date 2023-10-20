'use client'
import Article from "@/components/Article";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Posts from "@/components/Posts";
import { State } from "@/components/State";

export default function Home() {
  return <State>
    <Header/>
    <Posts/>
    <Collections/>
    <Footer/>
    <Article/>
  </State>
}
