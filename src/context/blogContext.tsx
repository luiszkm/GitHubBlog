import { ReactNode, createContext, useEffect, useState } from "react";
import { issueApi, userAPi } from "../api/Github";

type PostProps ={
  id: number,
  title:string
  body:string
  created_at: string
  updated_at?:string
  number:number
}
type userProps = {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string | null;
  followers: number;
  html_url: string;
}
interface BlogContextProps {
  userData: userProps
  postsData: PostProps[]
}


interface BlogContextProvider {
  children: ReactNode
}

export const blogContext = createContext({} as BlogContextProps)


export function BlogProvider({ children }: BlogContextProvider) {

  const [userData, setUserData] = useState<userProps>({
    avatar_url: "",
    bio: "",
    company: "",
    followers: 0,
    login: "",
    name: "",
    html_url: ""
  })

  const [postsData, setPostsData] = useState <PostProps[]> ([])


  async function fetchUserApi() {
    try {
      const response = await userAPi.get('/luiszkm')
      setUserData(response.data)
    } catch (error) {
      alert("Internal Server error")
      console.log(error)
    }
  }

  async function fetchIssueGithubApi() {
    try {
      const { data } = await issueApi.get('')
      setPostsData(data)
    
    } catch (error) {
      alert("Não foi possível buscar posts para esse blog, tente novamente mais tarde")
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUserApi(),
      fetchIssueGithubApi()
  }, [])

  return (
    <blogContext.Provider value={{
      userData,
      postsData
    }}>
      {children}
    </blogContext.Provider>
  )
}