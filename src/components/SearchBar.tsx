



export function SearchBar () {

  return(
    <label className="w-full" htmlFor="">
      <input className="px-4 py-3 w-full text-base-text rounded-md bg-base-input border-base-border border outline-none placeholder:text-base-label focus-within:border-blue"
       type="text"
       placeholder="Buscar Conteúdo"  />
    </label>
  )
}