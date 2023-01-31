import { useContext } from "react";
import { Hero } from "../components/Hero";
import { useBlog } from "../hooks/useBlog";
import { blogContext } from "../context/blogContext";



export function Home () {
const {userData} = useContext(blogContext)
console.log(userData);

  return(
    <div>
      <Hero />
    </div>
  )
}