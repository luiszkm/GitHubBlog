import { useContext } from "react";
import { Hero } from "../components/Hero";
import { useBlog } from "../hooks/useBlog";
import { blogContext } from "../context/blogContext";
import { SearchBar } from "../components/SearchBar";
import { Card } from "../components/Card";



export function Home() {
  const { userData } = useContext(blogContext)
  console.log(userData);

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <Hero data={userData} />


      <div className="w-full flex flex-col items-center gap-3 mt-6">
        <div className="w-full flex items-center justify-between">
          <span className="text-base-subtitle font-bold text-lg">Publicações</span>
          <time className="text-base-span text-sm">Há 2 dias</time>
        </div>
        <SearchBar />
      </div>

      <section className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card />
        <Card />
      </section>
    </div>
  )
}