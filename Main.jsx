import { useContext, useState } from "react";
import "./Main.css";
import {Link}from "react-router-dom"
import { myContext } from "./Context";
export default function Main(){
    return(
   
        <div className="mainpage">
          
            
            <div className="loginbtn">
                <button className="loginbtn">
                    <Link to={"/login"}className="loginlink">User Login</Link>
                </button>
                <button className="loginbtn">
                    <Link to={"/Admin"}className="Adminlink">Admin Login</Link>
                </button>
                
            </div>
        </div>  
    )


      }
   

          
           


