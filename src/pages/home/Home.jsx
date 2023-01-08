import "./home.scss"
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import Maindash from "../../maindash/Maindash";
const Home=()=>{
    return(
        <div className="home">
        <Navbar/>
        <div className='homeGlass'>

    <Sidebar/>
    <Maindash/>
    <div style={{backgroundColor:"blue"}}>

    </div>
    </div> 
           
        </div>
    )
}
export default Home;