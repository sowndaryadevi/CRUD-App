import React,{useState} from "react"
import URL from "../Constants/URL"
import axios from "axios"
import{ Form,Button,Checkbox, FormField} from "semantic-ui-react"
import { useNavigate } from "react-router-dom"

export default function Create(props){
   
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[checked,setChecked]=useState(false)
    const navigate=useNavigate()
const postData=async ()=>{

  await  axios.post(URL,{
        firstName,
        lastName,
        checked
    })
    navigate('/read') 
}



    return(
        <Form>
           <FormField>
             <label>First Name</label>
             <input type="text" 
             value={firstName}
             placeholder="enter your first name"
             onChange={(event)=>setFirstName(event.target.value)}
             ></input>    
           </FormField><br />
           <FormField>
             <label>Last Name</label>
             <input type="text" 
             value={lastName}
             placeholder="enter your first name"
             onChange={(event)=>setLastName(event.target.value)}
             ></input>
           </FormField><br />         
        <FormField className="align">
        <input
        type="checkbox"
        className="check"
        checked={checked}  
  onChange={ () => {
    setChecked(!checked);
  }}
></input> 

<label className="lable">Agree the Terms & Condition</label>
     </FormField><br />
           
       <Button onClick={postData} className="create">Create</Button>
        </Form>
    )
}