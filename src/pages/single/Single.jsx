import "./single.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table.jsx"
const Single=()=>{
    return(
        <div className="single">
        <Navbar/>
            <div className="singleGlass">
            <Sidebar/>
<div className="general">
<div className="info">
    <div className="top">
    <div className="left">
    <div className="editButton">Edit</div>
<h1 className="title">Information</h1>
<div className="item">
        <img className="itemImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6-TpYW0HV46SV8TVjxJhDyUhqwcGPHh4uw&usqp=CAU" alt=""/>
    <div className='details'>
        <h2 className="itemTitle"> Princeley </h2>
        <div className="detailItem">
        <span className="itemKey">Email:</span>
        <span className="itemValue">prince@gmail.com</span>

        </div>

        <div className="detailItem">
        <span className="itemKey">Phone:</span>
        <span className="itemValue">+234 987 45 63</span>

        </div>

        <div className="detailItem">
        <span className="itemKey">Address:</span>
        <span className="itemValue">No 7 fem park Nsukka.</span>


        </div>

        <div className="detailItem">
        <span className="itemKey">Country:</span>
        <span className="itemValue">Nigeria</span>

        </div>
    </div>
    </div>
    </div>
    
    <div className="right">
<Chart aspect={4 / 1}
    title=" User Spending (Last 6 Months)"
    className="chart"
/>
    </div>
    </div>
    <div className="bottom">
    <Table className="table"/>
    </div>

</div>

<div>
    
</div>
</div>


            </div>
        </div>
    )
}
export default Single;