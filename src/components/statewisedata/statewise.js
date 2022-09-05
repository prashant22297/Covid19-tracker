import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'  
import './statewise.css';
const Statewise = () => {
    const [data, setData] = useState([]);
    const [lastUpd, setLastUpd] = useState([]);
    const getCovidData = async ()=>{
        // const res = await fetch('https://api.covid19india.org/data.json');
        const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.data.regional);
        setLastUpd(actualData.lastRefreshed);
    }
    useEffect(() => {
        getCovidData();
    }, [])
    
  return (
    <>
        <div className="container-fluid mt-3">
            <div className="main-heading text-center">
            <h2>🔴LIVE</h2>
            <h1 className="mb-5"> <span>INDIA</span> COVID 19 DASHBOARD</h1>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='thead-dark'>
                        <tr >
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curElem,ind)=> {
                                return(
                                    <tr key={ind}>
                                        <td>{curElem.loc}</td>
                                        <td>{curElem.totalConfirmed}</td>
                                        <td>{curElem.discharged}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>Not Updated</td>
                                        <td>{moment(lastUpd).format("DD/MM/YYYY kk:mm:ss")}</td>
                                    </tr> 
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </>
    
  )
}

export default Statewise