import { ReactNode, createContext, useEffect, useState } from "react";
import { userAPi } from "../api/Github";


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
  userData:userProps 
}


interface BlogContextProvider {
  children: ReactNode
}

export const blogContext = createContext({} as BlogContextProps)


export function BlogProvider({ children }: BlogContextProvider) {

  const [userData, setUserData] = useState<userProps>({
    avatar_url:"",
    bio:"",
    company:"",
    followers:0,
    login:"",
    name:"",
    html_url:""
  })


  async function fetchUserApi() {
    const response = await userAPi.get('/luiszkm')
    setUserData(response.data)

  }

  useEffect(() => {
    fetchUserApi()
  }, [])

  return (
    <blogContext.Provider value={{
      userData
    }}>
      {children}
    </blogContext.Provider>
  )
}