import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss"



const makeStyle=(status)=>{
if(status==="Approved"){
return({
    background:"#3C79F5",
    opacity:0.8,
    borderRadius:"20px",
    padding:"4px",
    color:"black"
})
} if(status==="Pending"){
    return({
        background:"#FFDB89",
        borderRadius:"20px",
    padding:"4px",
    color:"#144272",
    opacity:0.8,
    })
} else{
    return({
        background:"#227C70",
        borderRadius:"20px",
    padding:"4px",
    color:"black",
    opacity:0.8,
    })
}
}
 


export default function BasicTable() {
  const rows=[
    {
      id:11764,
      product:"Ps5",
      img:"data:image/jpeg;base64,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",
    customer:"Steno",
    date:" ist June",
    method:"Cash on delivery",
    status:"Approved",
    amount:565,
    },
    {
      id:21764,
      product:"I phone 13",
      img:"data:image/jpeg;base64,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",
    customer:"Onu",
    date:" ist July",
    method:"Online Payment",
    status:"Pending",
    amount:955,
    },
    {
      id:31964,
      product:"Wrist Watch",
      img:"data:image/jpeg;base64,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",
    customer:"Toochukwu",
    date:" 9th August",
    method:"Online",
    status:"Approved",
    amount:55
    },
    {
      id:41764,
      product:"Dell Laptop",
      img:"data:image/jpeg;base64,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",
    customer:"Nnamdi",
    date:" ist september",
    method:"Online",
    status:"Pending",
    amount:490,
    },
    
  ]
  return (
    <div className='Table'>
    <h3 className="heading">Recent Transactions</h3>
    <TableContainer className="table" component={Paper}
     style={{boxShadow:"0px 13px 20px #80808029"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Tracking ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >Amount</TableCell>
            <TableCell >Payment Method</TableCell>
            <TableCell >Status</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody style={{color:"white"}}>
          {rows.map((row) => (
            <TableRow
              key={row.ld}
             // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell >
              <TableCell className="tableCell">
<div className="cellwrapper">
<img className="image" src={row.img} alt=""/>
{row.product}
</div>
              </TableCell>
              <TableCell >{row.customer}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell >
              {/* styling status dynamically*/ }
                <span className='status' style={makeStyle(row.status)}>
                {row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}