import { useContext, useState } from "react";
// import "./Main.css";
import {Link, Route, Router}from "react-router-dom"
import { myContext } from "./Context";
import {  useNavigate } from "react-router-dom";
import"./Dash.css";


export default function Admindash(){
    const nav=useNavigate();
    function listusers(){
        nav("/ManageUser")
    } 
    function Watches(){
        nav("/product")
    }
    function website(){
        nav("/carts")
    }

return(
    <div className="manage">
        <div className="adminmain">
        <h1 style={{textAlign:"center"}}>Admin DashBoard</h1>  
        </div>
        <div className="main1">
        <h3 style={{marginRight:"60px",marginLeft:"450px"}}>Users</h3>
         <button className="abtn1" onClick={listusers}>List of Users....</button>
        </div>
       <div className="main2">
        <h3 style={{marginRight:"60px",marginLeft:"450px"}}>Products</h3>
        <button className="abtn2" onClick={Watches}>List of Product....</button>
        </div>
        <div className="main3">
        <h3 style={{marginRight:"60px",marginLeft:"450px"}}> Website</h3>
     <button className="abtn3" onClick={website}>Click Here....</button>
         </div>
     </div> 
);
}








    