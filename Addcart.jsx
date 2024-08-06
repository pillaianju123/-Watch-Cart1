
import { useContext, useState } from "react";
import { myContext } from "./Context";
import "./Addcart.css";

export default function Cart() {
  const { addcart, setAddCart } = useContext(myContext);
  const [num, setNum] = useState(addcart.map(() => 1));

  const decrementbtn = (index) => {
    setNum((prevNum) =>
      prevNum.map((num, i) => (i === index && num > 1 ? num - 1 : num))
    );
  };

  const incrementbtn = (index) => {
    setNum((prevNum) =>
      prevNum.map((num, i) => (i === index ? num + 1 : num))
    );
  };

  const removeProduct = (index) => {
    const newAddCart = addcart.filter((_, i) => i !== index);
    setAddCart(newAddCart);
    setNum(newAddCart.map(() => 1));
  };

  const totalCartPrice = addcart.reduce((total, product, index) => {
    return total + product.text * num[index];
  }, 0);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        textAlign: "center",
        border: "1px solid",
        borderRadius: "10px",
        backgroundColor: "whitesmoke",
        boxShadow: "2px 5px 5px 5px grey",
        gap: "10px",
        margin: "50px auto 40px auto"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Cart</h1>
      {addcart.map((watch, index) => (
        <div key={index}>
          <h2>{watch.title}</h2>
          <img className="i1" src={watch.image} alt={watch.title} />
          <p>
            <b><i>₹{watch.price}</i></b>
          </p>
          <h3 style={{ textAlign: "center" }}>
            Total price: ₹{watch.text * num[index]}
          </h3>
          <button className="btn1" onClick={() => incrementbtn(index)}>+</button>
          <span>{num[index]}</span>
          <button className="btn3" onClick={() => decrementbtn(index)}>-</button>
          <button onClick={() => removeProduct(index)}>Remove</button>
          <button className="b1" onClick={() => alert("Purchased successfully!")}>Buy Now</button>
        </div>
      ))}
      <h2>Total Cart Price: ₹{totalCartPrice}</h2>
    </div>
  );
}
