import { useContext, useState } from "react";
import "./login.css";
import {Link}from "react-router-dom"
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const{user,setUser}=useContext(myContext)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const nav=useNavigate()
    
    console.log("login page user",user);
    function Loginbtn(){
        const LoggedUser=user.find((data)=>data.email===email && data.password===password)
        if(LoggedUser){
            alert("login success")
            nav("/carts")
        }else{
            alert("failed")
        }
        
    }
    return(
        <div>
           {/* <h1 >USER LOGIN</h1> */}
           <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          
            
          }}
        >
          USER LOGIN
        </h1>
           <div className="loginpage">
           <label for="">Enter Email :</label>
           <input value={email} onChange={(e)=>setEmail(e.target.value)}type="text"className="login"placeholder=""/>
           <br></br>
           <label for="">Enter password:</label>
           <input value={password}onChange={(e)=>setPassword(e.target.value)}className="in"type="password" placeholder=""/>
           <br></br>
           <br></br>

          
           <h4>Do you have any account yet?</h4>
           <Link to={'/Register'}><h3>Register</h3></Link>
           <button onClick={Loginbtn} className="btn">LOGIN</button>
           </div> 
        </div>
        
         
        
    )
}
