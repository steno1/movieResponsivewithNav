import './maindash.scss'
import Cards from '../components/cards/Cards';
import Table from '../components/table/Table';
//import Chart from '../components/chart/Chart';
//import Customer from '../components/customerReview/Customer';
//import Chart from '../components/chart/Chart';
const Maindash=()=>{
    return(
        <div className="maindash">
        <h3>Dashboard</h3>
        <Cards/>
        <Table/>
        
        
        
        </div>
    )
}
export default Maindash;