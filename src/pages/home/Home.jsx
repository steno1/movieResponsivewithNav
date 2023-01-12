import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Maindash from "../../maindash/Maindash";
import Rightside from "../../components/rightSide/Rightside";
const Home=()=>{
    return(
        <div className="home">
        <Navbar/>
        <div className='homeGlass'>

    <Sidebar/>
    <Maindash/>
    <Rightside/>
    </div> 
           
        </div>
    )
}
export default Home;