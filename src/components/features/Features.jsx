import { MoreVertOutlined } from '@material-ui/icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
//import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-circular-progressbar/dist/styles.css';
import './features.scss'
const Features=()=>{
    const percentage = 70;
    return(
        <div className="features">
<div className="top">
<h1 className="title">Total Revenue</h1>
<MoreVertOutlined fontSize="small" />
</div>
<div className="bottom">
<div className='featuredChart'>
<CircularProgressbar value={percentage} text={`${percentage}%`}
    
/>

</div>
<div className='details'>
<p className='title'> Total sales made today</p>
<p className='amount'> $540</p>
<p className='desc'>Previous transactional processing. Last payment may
be included</p>
<div className="summary">
<div className="item">
    <div className="itemTitle">Target</div>
    <div className="itemResult positive">
    <KeyboardArrowUpIcon fontSize='small'/>
        <div className="resultAmount"> $17.8k</div>
    </div>
</div>


<div className="item">
    <div className="itemTitle">Last week</div>
    <div className="itemResult  positive">
    <KeyboardArrowUpIcon fontSize='small'/>
        <div className="resultAmount"> $19.4k</div>
    </div>
</div>


<div className="item">
    <div className="itemTitle">Last month</div>
    <div className="itemResult negative">
    <KeyboardArrowDownOutlined fontSize='small'/>
        <div className="resultAmount"> $15.2k</div>
    </div>
</div>
</div>


</div>
</div>
        </div>
    )
}
export default Features;