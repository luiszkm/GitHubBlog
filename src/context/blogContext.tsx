import {  ReactNode, createContext, useEffect, useState } from "react";
import { userAPi } from "../api/Github";

interface BlogContextProps {
  userData: {}
}


interface BlogContextProvider {
  children: ReactNode
}

export const blogContext = createContext({} as BlogContextProps)


export function BlogProvider ({children}:BlogContextProvider){

const [userData, setUserData] = useState([])


  async function fetchUserApi (){
    const response = await userAPi.get('/luiszkm')
    setUserData(response.data)
 
  }
  
  useEffect(()=>{
    fetchUserApi()
  },[])

  return(
    <blogContext.Provider value={{
      userData
    }}>
      {children}
    </blogContext.Provider>
  )
}