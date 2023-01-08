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
<LanguageOutlinedIcon/>
English
</div>
<div className="item">
<DarkModeOutlinedIcon/>
</div>
<div className="item">
<FullscreenExitOutlinedIcon/>
</div>
<div className="item">
<NotificationsNoneOutlinedIcon/>
</div>
<div className="item">
<ChatBubbleOutlineOutlinedIcon/>
</div>
<div className="item">
<ListOutlinedIcon />
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