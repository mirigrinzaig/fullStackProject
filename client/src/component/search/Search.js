import { MdSearch } from "react-icons/md"
import "./search.css"
import { useSearchParams } from "react-router-dom"
const Search=({placeholder})=>{
const [searchParams,setSearchParamd]=useSearchParams()
const q=searchParams.get("q")
return (

    <div className="search-container">
        <MdSearch/>
        <input onChange={(e)=>setSearchParamd({q:e.target.value})} type="text" defaultValue={q||""} placeholder={placeholder} className="search-input"/>
    </div>
)
}
export default Search