import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Maindash from "../../maindash/Maindash";
const Home=()=>{
    return(
        <div className="home">
        <Navbar/>
        <div className='homeGlass'>

    <Sidebar/>
    <Maindash/>
    <div >
third division
    </div>
    </div> 
           
        </div>
    )
}
export default Home;