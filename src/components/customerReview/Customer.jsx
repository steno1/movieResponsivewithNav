import "./customer.scss"
import Chart from "react-apexcharts"
const Customer=()=>{
    const data={

        series:[
            {
                name:"Review",
            data:[10, 50, 30, 90, 40, 120, 100],
            },
                        ],

        options:{
            chart:{
                type:"area",
                height:"auto"
            },
         
            
            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"],

            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm",
                },
            },
            grid:{
                show:false,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2022-12-19T00:22:00.000Z",
                    "2022-12-19T01:34:00.000Z",
                    "2022-12-19T02:10:00.000Z",
                    "2022-12-19T03:12:00.000Z",
                    "2022-12-19T04:00:00.000Z",
                    "2022-12-19T05:00:00.000Z",
                    "2022-12-19T06:00:00.000Z",
                ],
            },
            yaxis:{
                show:false
            },
            toolbar:{
                show:false
            },
               
            
        }
    }
        
return <div className="customer">
    <h3>Customer Reviews</h3>
    
<Chart options={data.options} 
series={data.series}  type="area"/>
    </div>

}
export default Customer;