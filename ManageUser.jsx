// import{useContext}from "react";
// import { myContext } from "./Context";
// import { watches } from "./watch";
// import "./Manage.css"
// export default function ManageUser(){
//     const{user,banned,setBanned}=useContext(myContext);
//     console.log(user);

// function Ban(data){
//     console.log(data);

// }
// if(banned.includes(watches))
//     {
//         setBanned(banned.filter(bannedUser=>bannedUser !== watches));
//         console.log("banned",banned);
//         alert("User is unbanned");
//     }
//     else{
//         setBanned([...banned,watches]);
//         alert("User is banned");
//     }

// return(
//     <div>
//          <h1
//           style={{
//             textAlign: "center",
//             marginBottom: "50px",
//             fontStyle:"italic"
            
            
//           }}
//         >
//          Manage User Account
//         </h1>
//         <div style={{display:"flex",gap:"10px",marginLeft:"400px",textAlign:"center"}}>

//         </div>
//         <table className="tab">
//             <thead>
//                 <tr>
//                     <th>
//                         Username
//                     </th>
//                     <th>
//                       Password
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {user.map((data,index)=>(
//                     <tr key={index}>
//                         <td>{data.email}</td>
//                         <td>{data.password}</td>
//                     <td>
//                     <button className="b"onClick={()=>Ban(data)}>
//                         {banned.includes(data)?"Unban":"Ban"}

//                     </button>
//                     </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// }

import { useContext } from "react";
import { myContext } from "./Context";
import "./Manage.css";

export default function ManageUser() {
  const { user, banned, setBanned } = useContext(myContext);
  console.log(user);

  function Ban(data) {
    if (banned.includes(data.email)) {
      setBanned(banned.filter(bannedUser => bannedUser !== data.email));
      console.log("User unbanned", banned);
      alert("User is unbanned");
    } else {
      setBanned([...banned, data.email]);
      console.log("User banned", banned);
      alert("User is banned");
    }
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontStyle: "italic"
        }}
      >
        Manage User Account
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginLeft: "400px",
          textAlign: "center"
        }}
      >
        {/* Additional content if needed */}
      </div>
      <table className="tab">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => (
            <tr key={index}>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button className="b" onClick={() => Ban(data)}>
                  {banned.includes(data.email) ? "Unban" : "Ban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


