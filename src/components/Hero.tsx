import { useEffect } from "react";
import { userAPi } from "../api/Github"


export function Hero (){

  return(
    <div>
      <img className="w-36 h-36 rounded-lg"
       src="https://github.com/luiszkm.png" alt="" />

       <div>
        <h3>Luis Zkm</h3>
        <p></p>
        <div></div>
       </div>

       <button></button>
    </div>
  )
}