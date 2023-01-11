import { useState } from "react";
import {AnimateSharedLayout, motion} from "framer-motion";//provide extra frames
//import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Chart from "react-apexcharts";
import './Card.scss'
//Card function, thats first function
const Card=(props)=>{
    const [expanded, setExpanded]=useState(false);

return(
    
    <AnimateSharedLayout>
{expanded?
    <ExpandedCard params={props} setExpanded={()=>setExpanded(false)}/>

:
    //passing the props and setExpanded into CompardCard so as to pass it down
    <CompardCard params={props} setExpanded={()=>setExpanded(true)}/>
}
    </AnimateSharedLayout>

    
)
}
//note before, props and setExpanded were passed down from Card function
//compardCard function setup, second function
const CompardCard=({params, setExpanded})=>{
    const Png=params.png;
    const Icon=params.icon;
    
return(
    <motion.div className="compardCard" 
    style={{background:params.color.backGround,
    boxShadow:params.color.boxShadow}}
    onClick={setExpanded} layoutId="expendableCard">
    <div className="title">
        <span>{params.title}</span>
        <span>{params.value}</span>
        <span>{params.message}</span>
    </div>

<div className="details">
<div>
<Icon/>
   <span className="positive">{params.percentage}</span> 
</div>

<Png className="png" style={{background:params.colors}}/>

</div>
<div className="detail">


</div>
    </motion.div>
)
}
//ExpandedCard function. function 3
//pass down params and setExpanded here
function ExpandedCard({params, setExpanded})
{
   const data={
        options:{
            chart:{
                type:"area",
                height:"auto"
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35
            },
            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"],

            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm",
                },
            },
            grid:{
                show:true,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2022-12-19T00:00:00.000Z",
                    "2022-12-19T01:00:00.000Z",
                    "2022-12-19T02:00:00.000Z",
                    "2022-12-19T03:00:00.000Z",
                    "2022-12-19T04:00:00.000Z",
                    "2022-12-19T05:00:00.000Z",
                    "2022-12-19T06:00:00.000Z",
                ]
            }
        }
        
    } 
    
   
    return(
        <motion.div  className="expandedCard"
        style={{background:params.color.backGround,
         boxShadow:params.color.boxShadow}}
         layoutId="expendableCard"
              
        >
         <div  style={{alignSelf:"flex-end", cursor:"pointer", color:"white"}}>
            <CloseOutlinedIcon onClick={setExpanded}
            />
             </div> 
            <span>{params.title} </span>
            
                <div className="chartContainer" style={{}}>
                <Chart options={data.options}
                series={params.series} type="area"/> 
                </div>
                <span>last 24 hours</span>
            
        
    </motion.div>
    )
    

}
 
export default Card;