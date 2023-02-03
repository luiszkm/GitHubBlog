import { useEffect } from "react";
import { userAPi } from "../api/Github"
import { NavLink } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaUserFriends, FaBuilding } from 'react-icons/fa';



type userProps = {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string | null;
  followers: number;
  html_url: string;
}
interface HeroProps {
  data: userProps;
}

export function Hero({ data }: HeroProps) {

  return (
    <div className="w-full p-8 flex flex-col gap-8 -mt-20 items-center relative bg-base-profile rounded-[10px] sm:flex-row">
      <img className="w-36 h-36 rounded-lg"
        src={data.avatar_url} alt="" />

      <div className="flex flex-col gap-2 items-center sm:items-start">
        <h3 className="text-base-title font-bold text-2xl ">{data.name}</h3>
        <p className="text-base-text ">{data.bio}</p>

        <div className="flex gap-6 mt-4">
          <span className="text-base-subtitle flex items-center gap-2">
            <AiFillGithub />
            {data.login}
          </span>
          <span className="text-base-subtitle flex items-center gap-2">
            <FaBuilding />
            {data.company === null && "Estudante"}
          </span>
          <span className="text-base-subtitle flex items-center gap-2">
            <FaUserFriends />
            {data.followers}
          </span>
        </div>
      </div>

      <NavLink className="text-blue font-bold text-xs absolute top-8 right-8 flex items-center gap-2"
        to={data.html_url} target='_blank'>
        Github
        <BsBoxArrowUpRight />
      </NavLink>
    </div>
  )
}