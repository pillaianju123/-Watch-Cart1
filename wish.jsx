import { useContext } from "react";
import { myContext } from "./Context";

export default function Wish() {
  const { wish, setWish } = useContext(myContext);
  console.log("wishpage",wish);

  const handleRemove=(watch)=>{
    setWish(wish.filter(item=>item!==watch))
  }

  const confirmRemove=(watch)=>{
    if(window.confirm("Are you Sure?")){
      handleRemove(watch)
    }
  }
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "left",
        width: "95%",
        textAlign: "left",
        border: "1px ",
        borderRadius: "10px",
        backgroundColor: "whitesmoke",
        boxShadow: "2px 5px 5px 5px grey",
        gap: "50px",
        marginLeft: "50px",
        marginTop: "50px",
        marginRight: "200px",
        marginBottom: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "150px" }}>WISHLIST</h1>
       {wish.map((watches) => 

       <div>
        <h1>{watches.title}</h1>
        <img className="i1"src={watches.image} alt={watches.title} />
        {/* <p>{watches.des}</p> */}
        <p><b><i>₹{watches.text}</i></b></p>
        {/* <p>{watches.des}</p> */}
        <button onClick={()=>confirmRemove(watches)}>Remove</button>
       </div>
        // <div>
        //     <h1>{watches.title}</h1>
        //     </div>
        // <div className="wishm">
        //   <img src={watch.image} className="" alt={products.title} />
        //   <div className="align">
        //     <h3>{products.title}</h3>
        //     <h4 style={{ fontStyle: "italic" }}>
        //       Description :{products.description}
        //     </h4>
        //     <h4 style={{ fontFamily: "inherit" }}>
        //       Price: ₹ {products.price}/-
        //     </h4>
        //   </div>
         
        // </div>
      )}
      
    </div>
  );
}
