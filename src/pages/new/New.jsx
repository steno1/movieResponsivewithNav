import "./new.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
const New=({input, title})=>{
    //Hook for dynamic uploading of file
    const [file, setFile]=useState("");
    return(
        <div className="new">
            <Navbar/>
        <div className='newGlass'>

    <Sidebar/>

    <div className="newContainer">
    <div className="top">
<h1>{title}</h1>
    </div>

<div className="bottom">
<div className="left">
    <img src={file?URL.createObjectURL(file):"data:image/jpeg;base64,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"} alt=""/>
</div>
<div className="right">
    <form>
    <div className="formInput">
    <label htmlFor="file">{/*the id name should be same in input. 
    it means the label and input are connected */}
<h3>Image</h3>
    <DriveFolderUploadOutlinedIcon className="icon"/>
    </label>
    <input type="file" id='file' 
        style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}
    />
    </div>
{input.map((item, id)=>{
    return (
    <div className="formInput" key={id}>
    <label>{item.label}</label>
    <input type={item.type} placeholder={item.placeholder}/>
    </div>)
})}
    
    <div>
        <button>Send</button>
    </div>

    
    </form>
</div>
</div>
    </div>
    
    </div> 
        </div>
    )
}
export default New;