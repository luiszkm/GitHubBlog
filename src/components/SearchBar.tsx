import { useContext, useEffect, useState } from "react"
import { searchApi } from "../api/Github"
import { blogContext } from "../context/blogContext"




export function SearchBar() {
  const { setSearchContent } = useContext(blogContext)
  const [searchedWord, setSearchedWord] = useState('')

  return (
    <label className="w-full flex items-center gap-3" htmlFor="">
      <input className="px-4 py-3 w-full text-base-text rounded-md bg-base-input border-base-border border outline-none placeholder:text-base-label focus-within:border-blue"
        type="text"
        placeholder="Buscar Conteúdo"
        onChange={e => setSearchedWord(e.target.value)}
      />
      <button className="px-4 py-3 rounded-md bg-base-profile border border-blue text-blue hover:bg-blue hover:text-white"
        onClick={() => setSearchContent(searchedWord)}
      >Pesquisar</button>
    </label>
  )
}