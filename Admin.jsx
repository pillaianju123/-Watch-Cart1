import { useContext, useState } from "react";
import "./Admin.css";
import {Link, useNavigate}from "react-router-dom"
import { myContext } from "./Context";
export default function Admin(){
    const{user,setUser}=useContext(myContext)
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[Confirmpassword,setConfirmpassword]=useState("")
    const nav=useNavigate()
    
    console.log("login page user",user);
    function Loginbtn(){
      if(name === "Soften" && password=== "Soften")
        {
           alert("Login success")
           nav("/Admindash")
        }
        else{
          alert("Failed")
        }
      
        
    }
    return(
        <div>
       
           <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          
            
          }}
        >
          ADMIN PAGE
        </h1>
           <div className="adminpage">
           <label for="" className="n"> Enter Name:</label>
           <input  value={name} onChange={(e)=>setName(e.target.value)}type="text"className="a"placeholder=""/>
           <br></br>
           <label for="" className="c">Enter password:</label>
           <input value={password}onChange={(e)=>setPassword(e.target.value)}className="pass"type="password" placeholder=""/>
           <br></br>
           <label for=""className="d">Enter Confirm password:</label>
           <input value={Confirmpassword}onChange={(e)=>setConfirmpassword(e.target.value)}className="cpass"type="password" placeholder=""/>

           <br></br>


           <button onClick={Loginbtn} className="lbtn">LOGIN</button>
           </div> 
        </div>
        
         
        
    )
}
