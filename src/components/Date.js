import { getAllByPlaceholderText } from "@testing-library/react";
import { useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Calendar } from 'primereact/calendar';

const Date=()=>{
const[start,setStart]=useState("")
const[end,setEnd]=useState("")
const[parashat,setParashat]=useState(false)
const navigate=useNavigate()

const changeParashat=()=>{
    setParashat(true)
    console.log(parashat);
    getDate()
}

const getDate=()=>{    
    navigate('/getDate',{state:{start:start,end:end,parashat:parashat}})
          
}

console.log(start);
console.log(end);
    return(
        <>
        <input onBlur={(e)=>{setStart(e.target.value)}} placeholder= "enter start date"/>
        <input onBlur={(e)=>{setEnd(e.target.value)}} placeholder= "enter end date"/>

{/* בונוס 2 */}
        <h3>enter start date </h3>
       <Calendar value={"enter start date"} onChange={(e) => setStart(e.value) }dateFormat="yy-mm-dd" />
       <h3>enter end date </h3>
       <Calendar value={"enter end date"} onChange={(e) => setEnd((e.value))} dateFormat="yy-mm-dd"/><br></br>
{/*  */}
        <button onClick={()=>{getDate()}}>הצג הכל</button><br></br>
        <button onClick={()=>{changeParashat()}}>הצג פרשות שבוע</button>
        </>
    )
}
export default Date