import { useState } from "react";
import {AnimateSharedLayout} from "framer-motion";//provide extra frames
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.scss'
const Card=(props)=>{
    const [expanded, setExpanded]=useState(false);

return(
    
    <AnimateSharedLayout>
{expanded?(
    "expanded card"
)
:(
    <CompardCard params={props}/>
)}
    </AnimateSharedLayout>

    
)
}

//compardCard
const CompardCard=({params})=>{
    const Png=params.png;
    const Icon=params.icon;
    
return(
    <div className="compardCard" 
    style={{background:params.color.backGround,
    boxShadow:params.color.boxShadow}}>
    <div className="title">
        <span>{params.title}</span>
        <span>{params.value}</span>
        <span>{params.message}</span>
    </div>
{/* <div className="radialBar">
<CircularProgressbar
    value={params.barValue}
    text={`${params.barValue }%`} 
/>
</div> */}
<div className="details">
<div>
<Icon/>
   <span className="positive">{params.percentage}</span> 
</div>

<Png className="png" style={{background:params.colors}}/>

</div>
<div className="detail">


</div>
    </div>
)
}
/*
const ExpandedCard=()=>{

}
export default Card */
export default Card;