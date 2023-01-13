import "./sidebar.scss"
import { SideData } from "../../data/Data";
import { useState } from "react";
import {UilBars} from "@iconscout/react-unicons";
import{motion} from "framer-motion"

const Sidebar=()=>{
    const [selected, setSelected]=useState(0)
    //make side bar to open and close on mobile
    const [expanded, setExpanded]=useState(false);
    const sidebarVariants={
        true:{
            left:"0",
        },
        false:{
            left:"-70%"
        }
    } 
    return(
        <div className="all">
        {/* UilBar not inside sidebar*/}
        <div className="bars" 
       style={expanded?{left:"60%"}:{left:"1%"}}
        onClick={()=>setExpanded(!expanded)}>
          <UilBars/>  
        </div>
        {/* features from framer motion library*/}
        <motion.div className="sidebar"
    variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:""}
        >
        {/*when window.innerWidth<=768? it will return true, 
         then variant will be true, thats side bar left is 0
         */}
        
        

        
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
        </motion.div>
        </div>
    )
}
export default Sidebar;