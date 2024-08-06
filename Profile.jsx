import { useContext, useState } from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./Context";
import Footer from "./Footer";
export default function Profile() {
  const { user, setUser } = useContext(myContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  console.log("login page user", user);
  function Submitbtn() {
    const User = user.find(
      (data) => data.email === email && data.address === address);
    if (User) {
      alert(" submitted");
    } else {
      alert("submit failed");
    }
  }
  const nav = useNavigate();
  function wish() {
    nav("/wish");
  }
  function cart() {
    nav("/cart");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column",minHeight:"100vh" }}>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontStyle: "italic",
          }}
        >
          USER PROFILE
        </h1>
        <div className="profile">
          <label for="">
            Enter Your Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="name"
              placeholder=""
            />
          </label>
          <br></br>
          <label for="">Enter Email id:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="email"
            placeholder=""
          />
          <br></br>
          <label for="">Enter Your Address:</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="in"
            type="address"
            placeholder=""
          />

          <br></br>
          <br></br>

          <button onClick={Submitbtn} className="Sbtn">
            Submit
          </button>
          <br></br>
          {/* <button onClick={wish}className="wishbttn">Wishlist</button>
           
           <br></br>
           <button onClick={cart}className="cartbttn">Cart</button>
           <br></br> */}
        </div>
        <div className="any">
          <button  onClick={wish} className="wishbttn">
            Wishlist
          </button>
        </div>
        <div className="ln">
          <button onClick={cart} className="cartbttn">
            Cart
          </button>
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
