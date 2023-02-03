import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai"
import { BsBoxArrowUpRight, BsFillChatFill, BsFillCalendarEventFill } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'





export function PostDetails() {

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full p-8 flex flex-col gap-8 -mt-20 items-center shadow-sm relative bg-base-profile rounded-[10px] ">
        <div className="flex w-full items-center justify-between text-blue text-xs">
          <NavLink className="flex items-center gap-2"
            to="/ ">
            <IoIosArrowBack />
            Voltar
          </NavLink>
          <NavLink className="flex items-center gap-2"
            to="/">
            Ver no GitHub
            <BsBoxArrowUpRight />
          </NavLink>
        </div>
        <h2 className="font-bold text-2xl text-base-title w-full">
          title
        </h2>
        <div className=" w-full flex items-center gap-3">
          <span className=" flex items-center gap-2 text-base-span">
            <AiFillGithub />
            nome
          </span>
          <span className=" flex items-center gap-2 text-base-span">
            <BsFillCalendarEventFill />
          </span>
          <span className=" flex items-center gap-2 text-base-span">
            <BsFillChatFill />
          </span>
        </div>

      </div>

      <div className="py-10 px-8 flex flex-col gap-6 text-base-text">
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <p>
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </div>
    </main>
  )
}