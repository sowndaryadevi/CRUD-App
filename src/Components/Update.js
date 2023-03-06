import React from "react"
import { Form, Button, Checkbox, FormField } from "semantic-ui-react"
import { useState, useEffect } from "react"
import axios from "axios"
import URL from "../Constants/URL"
import { useNavigate } from "react-router-dom"

export default function Update() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false)
    const [id, setId] = useState('')
    useEffect(() => {
        console.log(localStorage.getItem('checked'))
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setChecked(localStorage.getItem('checked'))
        setId(localStorage.getItem('id'))
    }, [])

    const handleOnChange = () => {
        setChecked(!checked);
    };
    const UpdateData = async () => {
        await axios.put(`${URL}/${id}`, {
            firstName,
            lastName,
            checked
        })
        navigate('/read')
    }

    return (
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

<label>Agree the Terms & Condition</label>
     </FormField><br />
            <Button className="change"onClick={UpdateData}>Update</Button>
        </Form>





    )
}