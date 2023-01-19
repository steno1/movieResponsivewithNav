//import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
//import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
//import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
//import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
//import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';  
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import  SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"


import "./sidebar.scss"
//import { SideData } from "../../data/Data";
import { useContext, useState } from "react";
import {UilBars} from "@iconscout/react-unicons";
import{motion} from "framer-motion"
import { DarkModeContext } from '../../context/DarkModeContext';


const Sidebar=()=>{
    const {dispatch}=useContext(DarkModeContext)
   // const [selected, setSelected]=useState(0)
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
       <Link to="/" style={{textDecoration:'none'}}>
       <span>Prince<span>ley</span>Admin</span>
       </Link>
               
       </div> 
        {/* center */}
        <div className="center">
<ul>
    <p className='title'> Main</p>
    <li>
        <DashboardOutlinedIcon className="icon"/>
        <span>Dashboard</span>
        
    </li>

    <p className='title'> List</p>
    <Link to="/users" style={{textDecoration:'none'}}>
    <li>
        <PersonOutlineOutlinedIcon className="icon"/>
        <span>User</span>
        
    </li>
    </Link>
    <Link to="/products" style={{textDecoration:'none'}}>
    <li>
        <ShoppingBagOutlinedIcon className="icon"/>
        <span>Products</span>
        
    </li>
    </Link>
    <li>
        <ShoppingBasketOutlinedIcon className="icon"/>
        <span>Order</span>
        
    </li>
    <li>
        <AirportShuttleOutlinedIcon className="icon"/>
        <span>Delivery</span>
        
    </li>
    <p className="title">USEFUL</p>
    <li>
        <AccountBalanceWalletOutlinedIcon className="icon"/>
        <span>Stats</span>
        
    </li>
    <li>
        <NotificationsNoneOutlinedIcon className="icon"/>
        <span>Notication</span>
        
    </li>
    <p className="title">SERVICE</p>
    <li>
        <LocalHospitalOutlinedIcon className="icon"/>
        <span>System Health</span>
        
    </li>
    <li>
        <LoginOutlinedIcon className="icon"/>
        <span>Logs</span>
        
    </li>
    <li>
        <SettingsSharpIcon className="icon"/>
        <span>Setting</span>
        
    </li>
    <p className="title">USER</p>
    <li>
        <PeopleOutlinedIcon className="icon"/>
        <span>Profile</span>
        
    </li>
    <li>
        <LogoutOutlinedIcon  className="icon"/>
        <span>Logout</span>
        
    </li>
    
    
</ul>
        </div>
       
        {/* color options*/}
       <div className="bottom">
            <div className="colorOption"
            onClick={()=>dispatch({type:'LIGHT'})}>

            </div>
            <div className="colorOption" 
            onClick={()=>dispatch({type:'DARK'})}>

            </div>
        </div>
        </motion.div>
        </div>
    )
}
export default Sidebar;