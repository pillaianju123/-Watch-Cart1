import React, { useContext } from "react";
import { myContext } from "./Context";
import { useParams } from "react-router-dom";
import "./watch.css";

export default function ProductView() {
  const { watch } = useContext(myContext);
  const { title } = useParams();
  let title1 = title.split("_").join(" ");
  const product = watch.find((item) => item.title === title1);

  console.log(product, title1);
  return (
    <div
      style={{
        display: "flex",
       
        alignItems: "center",
        justifyContent: "left",
        width: "93%",
        // height:"93vh",
        marginLeft:"11px",
      
        
        textAlign: "left",
        border: "1px solid black",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px grey",
        gap:"100px",
        
        
      }}
    >
      <div>
        <img
          
          className="watch"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"left",}}>
        <h2 className="title">{product.title}</h2>
        <h4 className="text" >Price: ₹{product.text}/-</h4>
        <h4 className="des">
          {product.des.split(",").map(item=>
          <ul>
            <li style={{listStyle:"outside"}}>
              <h4>{item}</h4>
            </li>
            </ul>
          )
          
          }</h4>
      </div>
    </div>
  );
}
