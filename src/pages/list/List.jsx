import "./list.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/dataTable/DataTable";
const List=()=>{
    return(
        <div className="List">
        <Navbar/>
        <div className='listGlass'>

    <Sidebar/>
    <div className="listContainer" >
<DataTable className="datatable"/>
    </div>
    
    </div> 
           
        </div>
    )
}
export default List;