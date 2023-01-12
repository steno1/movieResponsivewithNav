import "./sidebar.scss"
import { SideData } from "../../data/Data";
import { useState } from "react";

const Sidebar=()=>{
    const [selected, setSelected]=useState(0)
    return(
        <div className="sidebar">
        {/* logo */}
       <div className="top">
                <span>Prince<span>ley</span>Admin</span>
       </div> 
        {/* center */}
        {SideData.map((item, index)=>{
            return (
                <div className="center">
                {/*when div is clicked, use "centerItem active"
                else use "centerItem" */}
                
        <div className= {selected===index?"centerItem active":"centerItem"}
        onClick={()=>setSelected(index)} key={index}>
    
    
        <div className="icon">
        <item.icon/>
        </div>
        
        
        <span>{item.heading}</span>
        </div>
        
        
        </div>
            )
        })}
        {/* color options*/}
       <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
        </div>
    )
}
export default Sidebar;