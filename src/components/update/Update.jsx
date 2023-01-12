import './update.scss'
import { UpdateData } from '../../data/Data'
const Update=()=>{
    return(
        <div className='update'>
{UpdateData.map((update, id)=>{
    return(
        <div className='updates'>
<img src={update.img} alt=""/>
<div className='noti'>
<div className='noti2' style={{marginBottom:"0.5rem"}} >
  <span>{update.name +" "}</span> 
  <span>{update.noti}</span> 
</div>
<span>{update.time}</span>
</div>

    


        </div>
    )
})}
        </div>
    )
}
export default Update