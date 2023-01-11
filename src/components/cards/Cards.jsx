import "./Cards.scss"
import { CardsData } from "../../data/Data"
import Card from "../card/Card"
const Cards=()=>{
    return(
        <div className="cards">

{CardsData.map((card, id)=>{
    
    return(
        <div className="parentContainer">
<Card
    title={card.title}
    color={card.color}
    barValue={card.barValue}
    value={card.value}
    png={card.png}
    message={card.message}
    icon={card.icon}
    percentage={card.percentage}
    colors={card.colors}
    series={card.series}
/>
</div>
    )
    
})}


        </div>
    )
}
export default Cards