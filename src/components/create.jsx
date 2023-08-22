import { useState } from "react";
import axios from "axios";
import { Url } from "./url";
import { useNavigate, Link } from "react-router-dom";
const Create=()=>{
const navigate=useNavigate()
const apicall=async()=>{
    const res=await axios.post(`${Url}users`,Formdata);
    console.log(res)

}

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



function submit(e){
        e.preventDefault()

        if(Formdata.Name == "" || Formdata.Age == "" || Formdata.Mobile == "" || Formdata.email == ""){
          alert("type details")
        } else{
          setFormdata({
            Name:"",
            Age:"",
            Mobile:"",
            email:""
        })
        apicall()
    navigate("/")
        } 
        
    }

    return(
    <>
    <form onSubmit={submit}>
 <fieldset>
   <div className="container">
   <div>
   <Link to="/"> <button className="btn btn-secondary">Back</button></Link>
   <div className="form-group">
     <label htmlFor="exampleInputname1" className="form-label mt-4">Name</label>
     <input type="text" className="form-control" name="Name" id="exampleInputname1" value={Formdata.Name} onChange={Handleclick} placeholder="Name"/>
   </div>
   <div className="form-group">
     <label htmlFor="exampleInputage1" className="form-label mt-4">Age</label>
     <input type="number" className="form-control" name="Age" id="exampleInputage1" value={Formdata.Age} onChange={Handleclick} placeholder="Age"/>
   </div>
   <div className="form-group">
     <label htmlFor="exampleInputage1" className="form-label mt-4">Mobile</label>
     <input type="number" className="form-control" name="Mobile" id="exampleInputage1" value={Formdata.Mobile} onChange={Handleclick} placeholder="Mobile No."/>
   </div>
   <div className="form-group">
     <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
     <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" value={Formdata.email} onChange={Handleclick} placeholder="Enter email"/>
     
     <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
   </div>
   <div className="d-flex justify-content-center mt-2">
   <div id="liveAlertPlaceholder"></div>
   <button className="btn btn-primary" id="liveAlertBtn" type="submit">Submit</button>
   </div>
   </div>
   </div>
  </fieldset>
</form>
   </>)
}

export default Create