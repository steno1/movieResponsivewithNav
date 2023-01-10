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
return(
    <div className="compardCard" 
    style={{background:params.color.backGround,
    boxShadow:params.color.boxShadow}}>
<div className="radialBar">
<CircularProgressbar
    value={params.barValue}
    text={`${params.barValue }%`} 
/>
</div>
<div className="details">
<Png/>
<span>${params.value}</span>
<span>Last 24 hours</span>

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