import {
    
UilEstate,


} from"@iconscout/react-unicons"

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';  
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export const SideData=[
  


    {
        
        icon:DashboardOutlinedIcon,
        heading:"Dashboard"
    },
    {
        

        icon:PersonOutlineOutlinedIcon,
        heading:"User"
    },
    {
        
        icon:CategoryOutlinedIcon,
        heading:"Products"
    },
    {
        icon:ShoppingBasketOutlinedIcon,
        heading:"Order"
    },
    {
    
        icon:AirportShuttleOutlinedIcon,
        heading:"Delivery"
    },
    {
        icon:DataSaverOffOutlinedIcon,
        heading:"Stats"
    },
    {
        icon:NotificationsNoneOutlinedIcon,
        heading:"Notification"
    },
    
    {
        
        icon:LocalHospitalOutlinedIcon,
        heading:"System Health"
    },
    {
        icon:LoginOutlinedIcon,
        heading:"Logs"
    },
    {
        icon:SettingsApplicationsOutlinedIcon,
        heading:"Setting"
    },
    
    {
    
        icon:PeopleOutlinedIcon,
        heading:"Profile"
    },
    {
        icon:LogoutOutlinedIcon ,
        heading:"Logout"
    },
    
    
]
export const CardsData=[
    {
        title:"USERS",
        color:{
            
            backGround: "#285430",
            boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        icon:KeyboardArrowUpOutlinedIcon,
        percentage:"+9%",
        message:"See all users",
        barValue:70,
        value:"790",
        colors: "#A0C3D2",  
        
        png:PersonOutlineOutlinedIcon,
        series:[
            {
                   data:[32, 43, 29, 106, 100],
            }
        ]
    },
    {
        icon:KeyboardArrowDownOutlinedIcon,
        percentage:"+4%",
        title:"ORDERS",
        message:"View all orders",
        color:{
         backGround: "#B73E3E",
           
           boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        colors: "#C780FA",  
        barValue:80,
        value:"270",
        png:ShoppingBagOutlinedIcon,
        series:[
            {
                name:"Sales",
                data:[32, 43, 29, 106, 100],
            }
        ]
    },
    {
        icon:KeyboardArrowUpOutlinedIcon,
        percentage:"+15%",
        title:"EARNING",
        message:"View all earnings",
        color:{
            backGround:"#594545",
           
            boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        colors: "#FF6E31",  
        barValue:50,
        value:"$4.2k",
          
        png:PaidOutlinedIcon,
        series:[
            {
                name:"Sales",
                data:[32, 43, 29, 106, 100],
            }
        ]
    },
    {
        icon:KeyboardArrowUpOutlinedIcon,
        percentage:"+8%",
        title:"MY BALANCE",
        message:"See balance details",
        color:{
         backGround: "#144272",
           
           boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        colors: "#4E6C50",
        barValue:80,
        value:"$8.7k",
        png:AccountBalanceWalletOutlinedIcon,
        series:[
            {
                name:"Sales",
                data:[32, 43, 29, 106, 100],
            }
        ]
    },
    
]