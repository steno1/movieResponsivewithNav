import './maindash.scss'
import Cards from '../components/cards/Cards';
import Table from '../components/table/Table';
import BasicTable from '../components/table/Table';
const Maindash=()=>{
    return(
        <div className="maindash">
<h1>Dashboard</h1>
<Cards/>
<BasicTable/>

        </div>
    )
}
export default Maindash;