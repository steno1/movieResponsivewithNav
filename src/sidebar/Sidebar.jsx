import "./sidebar.scss"
const Sidebar=()=>{
    return(
        <div className="sidebar">
        {/* logo */}
       <div className="top">
                <span>PrinceleyAdmin</span>
       </div> 
        {/* list */}
       <div className="center">
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
       </div> 
        {/* color options*/}
       <div className="bottom">
            color options
       </div> 

        
        </div>
    )
}
export default Sidebar;