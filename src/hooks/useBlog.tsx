import { useContext } from "react";
import { blogContext } from "../context/blogContext";




export function useBlog(){
  const context = useContext(blogContext)
  return context
}