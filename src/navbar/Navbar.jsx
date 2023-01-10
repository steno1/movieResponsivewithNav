import "./navbar.scss"

import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar=()=>{
    const [showLink, setShowLink]=useState(false)
    return(
        <div className="navbar">
<div className="left">
<div className="links" id={showLink? "flexible":""}>
<div className="items">
<div className="item">
<LanguageOutlinedIcon  className="icon"/>
English
</div>
<div className="item">
<DarkModeOutlinedIcon className="icon"/>
</div>
<div className="item">
<FullscreenExitOutlinedIcon className="icon"/>
</div>
<div className="item">
<NotificationsNoneOutlinedIcon className="icon"/>
<div className="counter">1</div>
</div>
<div className="item">
<ChatBubbleOutlineOutlinedIcon className="icon"/>
<div className="counter">2</div>
</div>
<div className="item">
<ListOutlinedIcon className="icon"/>
</div>
<div className="item">
<img className="steno" src="data:image/jpeg;base64,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" alt="Bruce-lee"/>
</div>

</div>


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