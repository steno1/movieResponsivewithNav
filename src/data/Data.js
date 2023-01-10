import {
    
UilEstate,


} from"@iconscout/react-unicons"

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
        title:"Sales",
        color:{
            
            backGround: "#285430",
            boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        barValue:70,
        value:"28,780",
        png:UilEstate,
        series:[
            {
                   data:[32, 43, 29, 106, 100],
            }
        ]
    },
    {
        title:"Revenue",
        color:{
         backGround: "#B73E3E",
           
           boxShadow:" 10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        barValue:80,
        value:"24,780",
        png:UilEstate,
        series:[
            {
                name:"Sales",
                data:[32, 43, 29, 106, 100],
            }
        ]
    },
    {
        title:"Expenses",
        color:{
            backGround:"#594545",
           
            boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)",
           
        },
        barValue:50,
        value:"20,780",
        png:UilEstate,
        series:[
            {
                name:"Sales",
                data:[32, 43, 29, 106, 100],
            }
        ]
    },
    
]