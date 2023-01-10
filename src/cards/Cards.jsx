import "./Cards.scss"
import { CardsData } from "../data/Data"
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
/>
</div>
    )
    
})}


        </div>
    )
}
export default Cards