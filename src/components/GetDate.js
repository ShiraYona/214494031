import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Fieldset } from 'primereact/fieldset';
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"

const GetDate=()=>{

    useEffect(() => {        
        get()       
    }, [])

 const[data,setData]=useState([])
 const location =  useLocation() 
 const start=location.state.start
 const end=location.state.end
 const parashat=location.state.parashat
 console.log(start);
 console.log(end);
 console.log(parashat);
const get=()=>{

       fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
          .then(response => {return response.json()})
          .then(data => {setData(data);console.log(data);})
}




return(
<>


{/* {data &&data.map((item))=>{   ////////////נסיון לבונוס 1 
<Fieldset legend={item.title}>
    <p>{item.description}</p>
    <p>{item.start}</p>
</Fieldset>}} */}


            {data &&                 
                data?.map((item) =>{
                    if(parashat){
                        if(item.className=="parashat") return(
                        <div style={{height: '250px',margin: '5px',width: '400px',float: 'left',display: 'inline',borderStyle: 'solid'}}>
                            <h2>{item.title}</h2>
                            <div>:תיאור {item.description}</div>
                            <div>:תאריך {item.start}</div>
                    </div>)}
                    else{

                        return(
                            <div style={{height: '350px',margin: '5px',width: '400px',float: 'left',display: 'inline',borderStyle: 'solid'}}>
                                <h2>{item.title}</h2>
                                <h3>:תיאור </h3>
                                <div>{item.description}</div>
                                <h3>:תאריך  </h3>
                                <div>{item.start}</div>
                        </div>)
                        
                    }
                })}
        

 {/* <>
{data&&data.map((item)=>{
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{item. title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>description:{item.description}</ListGroup.Item>
          <ListGroup.Item>date:{item.start}</ListGroup.Item>
        </ListGroup>
      </Card>})
   } </>  */}

</>
)

}
export default GetDate