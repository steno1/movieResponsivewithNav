import './maindash.scss'
import Cards from '../components/cards/Cards';
import Table from '../components/table/Table';
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