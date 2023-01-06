import "./navbar.scss"
import "../../App.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
const Navbar=()=>{
    const [showLink, setShowLink]=useState(false)
    return(
        <div className="navbar">
<div className="left">
<div className="links" id={showLink? "flexible":""}>
<a href="/home">Home</a>
<a href="/feedback">Feedback</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
</div>
<button onClick={()=>setShowLink(!showLink)} >
<ReorderIcon/>
</button>

</div>

<div className="right">
<input type="text" placeholder="search..."/>
<SearchIcon/>

</div>
        </div>
    )
}
export default Navbar;