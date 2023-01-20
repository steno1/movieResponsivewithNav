import "./datatable.scss"
import { DataGrid,  } from '@mui/x-data-grid';
import { UserRows, Usercolumns } from "../../data/Data";
import {Link} from "react-router-dom"
import { useState } from "react";
// actionColumn added here, because i want to reuse the data in 
//in data source excluding actionColumn
  

  

const DataTable =()=>{
  const [data, setData]=useState(UserRows);//targetting rows
  
   const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !==id))
   }
    const actionColumn=[
      {
          field:"action", headerName:'Action', width:200, 
          renderCell:(params)=>{
              return(
                  <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                  <div className="viewButton">View</div>
                  </Link>
    
    <div className="DeleteButton"
    onClick={()=>handleDelete(params.row.id)}>
    Delete</div>
                  </div>
              )
          }
      }
    ]

    return(
        <div className="datatables">
        <div className="datatable">
        <div className="dataTableTitle">
        <h3>Add New User</h3>
        <Link to="/users/new" style={{textDecoration:"none"}}
        className="link">
Add New
        </Link>
        </div>
       
      <DataGrid
        rows={data}//let userRows=data
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