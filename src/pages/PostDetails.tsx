import { NavLink, useParams } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai"
import { BsBoxArrowUpRight, BsFillChatFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { useEffect, useState } from "react";
import { issueApi } from "../api/Github";
import { DateDiferenceInDays } from "../utils/DateDiferenceInDays";
import ReactMarkdown from 'react-markdown'

type userProps = {
  name: string;
  login: string;
  company: string | null;
  followers: number;
  html_url: string;
}
interface PostDetailsProps {
  html_url: string,
  title: string
  body: string
  created_at: string | "aaaa"
  updated_at?: string
  number: number
  comments: number
  user: userProps

}

export function PostDetails() {
  const [postContent, SetPostContent] = useState<PostDetailsProps>()

  const { id } = useParams()


  async function fetchPostDetails() {
    const { data } = await issueApi.get(`/${id}`)
    SetPostContent(data)
    console.log(data)

  }

  let calendarDay = String(DateDiferenceInDays(postContent?.created_at))

  useEffect(() => {
    fetchPostDetails()
  }, [])
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full p-8 flex flex-col gap-8 -mt-20 items-center shadow-sm relative bg-base-profile rounded-[10px] ">
        <div className="flex w-full items-center justify-between text-blue text-xs">
          <NavLink className="flex items-center gap-2 hover:border-b transition"
            to="/ ">
            <IoIosArrowBack />
            Voltar
          </NavLink>
          <NavLink className="flex items-center gap-2 hover:border-b transition"
            to={postContent?.html_url! || "/"} target='_blank'>
            Ver no GitHub
            <BsBoxArrowUpRight />
          </NavLink>
        </div>
        <h2 className="font-bold text-2xl text-base-title w-full">
          {postContent?.title}
        </h2>
        <div className=" w-full flex items-center gap-3">
          <span className=" flex items-center gap-2 text-base-span">
            <AiFillGithub />
            {postContent?.user.login}
          </span>
          <span className=" flex items-center gap-2 text-base-span">
            <BsFillCalendarEventFill />
            Hà {calendarDay} dias
          </span>
          <span className=" flex items-center gap-2 text-base-span">
            <BsFillChatFill />
            {postContent?.comments} Comentários
          </span>
        </div>

      </div>

      <div className="py-10 px-8 flex flex-col gap-3 text-base-text">
        <ReactMarkdown>
          {postContent?.body!}
        </ReactMarkdown>
      </div>
    </main>
  )
}