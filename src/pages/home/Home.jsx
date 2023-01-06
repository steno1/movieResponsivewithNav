import "./home.scss"
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
const Home=()=>{
    return(
        <div className="home">
        <Navbar/>
        <div className='homeGlass'>

    <Sidebar/>
    <div style={{backgroundColor:"yellow"}}>

    </div>
    <div style={{backgroundColor:"blue"}}>

    </div>
    </div> 
           
        </div>
    )
}
export default Home;