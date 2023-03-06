import axios from "axios"
import React,{useEffect,useState} from "react"
import URL from "../Constants/URL"
import {useNavigate} from 'react-router-dom'
import {Table,Button, TableHeader, TableHeaderCell, TableBody, TableCell} from "semantic-ui-react"
export default function Read(){

const navigate = useNavigate()
const [apiDaTa,setApiData] = useState([])
const callapi=async()=>{
    const obj=await axios.get(URL)
     setApiData(obj.data)   
}   
useEffect(()=>{
    callapi()
},[])

const DeleteData = async (id)=>{
      await  axios.delete(`${URL}/${id}`)
    callapi()
}

const UpdateData = async ({id,firstName,lastName,checked})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)
    navigate('/update')
}


    return(
        <>       <Table singleLine className="table">
            <TableHeader className="tablehead">
                <TableHeaderCell  className="tableheadcell">FirstName</TableHeaderCell>
                <TableHeaderCell className="tableheadcell">LastName</TableHeaderCell>
                <TableHeaderCell className="tableheadcell">Checked</TableHeaderCell>
                <TableHeaderCell className="tableheadcell">Delete</TableHeaderCell>
                <TableHeaderCell className="tableheadcell">Update</TableHeaderCell>
            </TableHeader>
           
               {apiDaTa.map((pre)=>(
                <TableBody className="tablebody">
                <TableCell className="tablecell">{pre.firstName}</TableCell>
                <TableCell className="tablecell">{pre.lastName}</TableCell>
                <TableCell className="tablecell">{pre.checked ? 'checked' : 'not checked'}</TableCell>
                <TableCell className="tablecell">
                <Button className="delete" onClick={() => DeleteData(pre.id)}>Delete
                </Button></TableCell>
                <TableCell className="tablecell">
                <Button className="updatebtn" onClick={() => UpdateData(pre)}>Update
                </Button></TableCell>
                </TableBody>
               
               ))} 
            
        </Table>
        <Button className="Add"onClick={()=>{
            navigate('/create')
        }}>ADD</Button>
        </>
        
    )
}