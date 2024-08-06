import { useContext, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./Context";


export default function Register() {
  const { user, setUser } = useContext(myContext)
  const nav=useNavigate()
  console.log("user", user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirm,SetConfirmPassword]=useState("");
  console.log("email", email);

  function RegisterBtn() {
    console.log("button click");
    const regUser = { email, password ,confirm}
      if(email && password && confirm)
    {
    if(password===confirm){
      setUser([...user,regUser]);
      alert('SUCCESS')
      nav('/login')
    }
   else{
    alert('password error')
   }
  }
   else{
    alert('Error')
   }
  }


  //   function RegisterBtn(){
  //     const LoggedUser=user.find((data)=>data.email===email && data.password===password&&data.confirmPassword===confirm)
  //     if(LoggedUser){
  //         alert("login success")
  //         nav("/Register")
         
  //     }else{
  //         alert("failed")
  //     }
  //   }
  // }


return (
  <div>
    <div>
      {/* <h1>REGISTER HERE</h1> */}
      <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            
            
          }}
        >
         REGISTER HERE
        </h1>
      
  
      <div className="lg">
        <h3>Create Your Account</h3>
        <br></br>
  
        <label for=""> Name:</label>
        <input type="text" className="name" placeholder="Enter your Full Name" />

        <br></br>

        <label for="">  Email :</label>
        <input
          type="email"
          className="e"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label for="">Enter password: </label>
        <input
          value={password}
          type="password"
          className="pass1"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
    
      <br></br>
      <label for="">Confirm Password:</label>
      <input type="password" value={confirm}
      className="confirm"
      placeholder="Enter your password again" 
      onChange={(e)=> SetConfirmPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button className="btn"></button>
        <button  onClick={RegisterBtn} >REGISTER</button>
        <br></br>
        <br></br>
        <h5>Already have an account?</h5>
        
        <Link to={'/ '}><h3>Login</h3></Link>
      </div>
    </div>
  </div>

);
}
