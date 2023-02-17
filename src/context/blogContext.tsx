import { ReactNode, createContext, useEffect, useState } from "react";
import { issueApi, searchApi, userAPi } from "../api/Github";
import moment from "moment";

type PostProps = {
  id: number,
  title: string
  body: string
  created_at: string
  updated_at?: string
  number: number
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
  lastDate: string
  setSearchContent: (value: string) => void
  postsDataFiltered: PostProps[]
}


interface BlogContextProvider {
  children: ReactNode
}

export const blogContext = createContext({} as BlogContextProps)

const dataFormatter = new Intl.DateTimeFormat('en-US')

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

  const [postsData, setPostsData] = useState<PostProps[]>([])
  const [postsDataFiltered, setPostsDataFiltered] = useState<PostProps[]>([])
  const [lastDate, setLastDate] = useState<string>('')

  const [searchContent, setSearchContent] = useState('')

  async function fetchUserApi() {
    try {
      const { data } = await userAPi.get('')
      setUserData(data)
    } catch (error) {
      alert("Internal Server error")
      console.log(error)
    }
  }

  async function fetchIssueGithubApi() {
    try {
      const { data } = await issueApi.get('')
      setPostsData(data)

      const lastPost: [] = data.map((item: any) => {
        const dateRecibeString = dataFormatter.format(new Date(item.created_at))
        // Mostra a diferença em dias
        const now = moment(new Date());
        const past = moment(dateRecibeString); // Outra data no passado
        const duration = moment.duration(now.diff(past));
        const days = Math.round(duration.asDays());
        return Number(days)
      })

      setLastDate(String(Math.min(...lastPost)))
    } catch (error) {
      alert("Não foi possível buscar posts para esse blog, tente novamente mais tarde")
      console.error(error)
    }
  }

  async function fetchSearchIssueGithub() {
    try{
      if(searchContent !== ''){
        const { data } = await searchApi.get(`/issues?q=${searchContent}%20repo:luiszkm/GitHubBlog`)
        setPostsData(data.items)    
       
      }
   
    }catch(error){
      console.log(error);
      
    }
  }
  useEffect(() => {
    fetchUserApi(),
      fetchIssueGithubApi()
      fetchSearchIssueGithub()
  }, [searchContent])

  return (
    <blogContext.Provider value={{
      userData,
      postsData,
      lastDate,
      postsDataFiltered,
      setSearchContent
    }}>
      {children}
    </blogContext.Provider>
  )
}