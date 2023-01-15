import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss"


function createData(name, trackingId, date, status, Details) {
  return { name, trackingId, date, status, Details };
}

const rows = [
  createData('Frozen yoghurt', 159, "2nd march 2022", "Approved", 'details'),
  createData('Ice cream sandwich', 237, "2nd march 2022", "Pending", 'details'),
  createData('Air freshner', 262, "2nd march 2022", "Approved", 'details'),
  createData('Cupcake', 305,"2nd march 2022", "Delivered", 'details'),
  
];
const makeStyle=(status)=>{
if(status==="Approved"){
return({
    background:"#3C79F5",
    borderRadius:"20px",
    padding:"4px",
    color:"white"
})
} if(status==="Pending"){
    return({
        background:"#FFDB89",
        borderRadius:"20px",
    padding:"4px",
    color:"#144272"
    })
} else{
    return({
        background:"#227C70",
        borderRadius:"20px",
    padding:"4px",
    color:"white"
    })
}
}

export default function BasicTable() {
  return (
    <div className='Table'>
    <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{boxShadow:"0px 13px 20px #80808029"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Dates</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Details</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody style={{color:"white"}}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell >
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left" >{row.date}</TableCell>
              <TableCell align="left">
              {/* making the status have different colors dynamically*/}
                <span className='status' style={makeStyle(row.status)}>
{row.status}
                </span>
              </TableCell>
              <TableCell align="left">{row.Details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}