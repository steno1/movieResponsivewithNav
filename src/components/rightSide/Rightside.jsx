import './rightside.scss'
//import Update from '../update/Update';
import Customer from '../customerReview/Customer';
import Features from '../features/Features';
import Chart from "../../components/chart/Chart.jsx"
const Rightside=()=>{
    return(
        <div className="rightside">
<div className='items'>

<Features/>
<Chart/>


</div>

        </div>
    )
}
export default Rightside; 


