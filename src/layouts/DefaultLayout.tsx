import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { BlogProvider } from "../context/blogContext";




export function DefaultLayout() {

  return (
    <BlogProvider>
      <div className="text-md flex flex-col items-center bg-base-bg w-full min-h-screen">
        <Header />
        <div className="w-full max-w-[864px]">
          <Outlet />
        </div>
      </div>
    </BlogProvider>
  )
}