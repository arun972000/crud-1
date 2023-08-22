import { useParams ,Link } from "react-router-dom";
import "./card.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "./url";

// eslint-disable-next-line react/prop-types
const UserCard = () => {
    const { id } =useParams();
const [data,setdata]=useState([])
    useEffect(()=>{
        const apicall=async()=>{
            const res=await axios.get(`${Url}/users/${id}`)
            setdata(res.data)
        }
        apicall()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="d-flex justify-content-center">

        
            <div className="card" style={{height:"100px"}}>
              
                    <img
                        src="https://t4.ftcdn.net/jpg/01/71/94/39/360_F_171943908_K9zdR8EcRJFxGFC1sIzvKRvaoSWRBTmL.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                <div className="card-body text-center">
                    <h5 className="card-title">{data.Name}</h5>
                    <p className="card-text">{data.Age}</p>
                    <p className="card-text">{data.id}</p>
                    <p className="card-text">{data.Mobile}</p>
                    <p className="card-text">{data.email}</p>
                    <Link to="/"><button className="btn btn-secondary">Back</button></Link>
                </div>
            </div>
            </div>
    );
};


export default UserCard;