import './rightside.scss'
//import Update from '../update/Update';
//import Customer from '../customerReview/Customer';
import Features from '../features/Features';
import Chart from "../../components/chart/Chart.jsx"
const Rightside=()=>{
    return(
        <div className="rightside">
<div className='items'>

<Features className="features"/>
<Chart className="chart" aspect={3 / 1} 
    title="Last 6 Months (Revenue)"
/>


</div>

        </div>
    )
}
export default Rightside; 


