import "./datatable.scss"
import { DataGrid,  } from '@mui/x-data-grid';
import { UserRows, Usercolumns } from "../../data/Data";

// actionColumn added here, because i want to reuse the data in 
//in data source excluding actionColumn
  const actionColumn=[
    {
        field:"action", headerName:'Action', width:200, 
        renderCell:()=>{
            return(
                <div className="cellAction">
<div className="viewButton">View</div>
<div className="DeleteButton">Delete</div>
                </div>
            )
        }
    }
  ]
  
  

const DataTable =()=>{
    return(
        <div className="datatables">
        <div className="datatable">
      <DataGrid
        rows={UserRows}
        columns={Usercolumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>

        
    )
}
export default DataTable