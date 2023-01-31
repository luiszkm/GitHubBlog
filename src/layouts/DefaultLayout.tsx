import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { BlogProvider } from "../context/blogContext";




export function DefaultLayout() {

  return (
    <BlogProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </BlogProvider>
  )
}