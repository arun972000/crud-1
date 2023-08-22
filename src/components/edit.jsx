import { useParams,useNavigate,Link } from "react-router-dom"
import { useState,useEffect } from "react"
import axios  from "axios"
import { Url } from "./url"




const Edit=()=>{

  const navigate=useNavigate()
  const {id}=useParams()

const [Formdata,setFormdata]=useState({
  Name:"",
  Age:"",
  Mobile:"",
  email:""
})

function Handleclick(e){
  const {name,value}=e.target
  setFormdata({...Formdata,[name]:value})
}


async function submit(e){
  e.preventDefault()
  const response=await axios.put(`${Url}users/${id}`,Formdata)
  console.log(response)
  navigate("/")
}

useEffect(()=>{
  const apicall=async ()=>{
    const res=await axios.get(`${Url}users/${id}`);
    setFormdata(res.data)
  }
  apicall()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

return(
<>
<div className="container">


<form onSubmit={submit}>
<Link to="/"> <button className="btn btn-secondary">Back</button></Link>
<fieldset>
<div className="container">
<div>
<div className="form-group">
<label htmlFor="exampleInputname1" className="form-label mt-4">Name</label>
<input type="text" className="form-control" name="Name" id="exampleInputname1" value={Formdata.Name} onChange={Handleclick} placeholder="Name"/>
</div>
<div className="form-group">
<label htmlFor="exampleInputage1" className="form-label mt-4">Age</label>
<input type="text" className="form-control" name="Age" id="exampleInputage1" value={Formdata.Age} onChange={Handleclick} placeholder="Age"/>
</div>
<div className="form-group">
<label htmlFor="exampleInputage1" className="form-label mt-4">Mobile</label>
<input type="text" className="form-control" name="Mobile" id="exampleInputage1" value={Formdata.Mobile} onChange={Handleclick} placeholder="Mobile No."/>
</div>
<div className="form-group">
<label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={Formdata.email} onChange={Handleclick} placeholder="Enter email"/>

<small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
</div>
<div className="d-flex justify-content-center mt-2">
<button className="btn btn-primary" type="submit">Submit</button>
</div>
</div>
</div>
</fieldset>
</form>
</div>
</>)
}

export default Edit