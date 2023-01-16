import "./datatable.scss"
import { DataGrid,  } from '@mui/x-data-grid';
import { UserRows, Usercolumns } from "../../data/Data";


  
  
  

const DataTable =()=>{
    return(
        <div className="datatable" >
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={UserRows}
        columns={Usercolumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

        </div>
    )
}
export default DataTable