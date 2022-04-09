import React from "react";
import  handle from "../scripts/user/handle"
import "../styles/user/login.css";

function Registration(){  

return(
  <div className="login">
  <form id="f" onSubmit={handle}>
          <h1>Registration form</h1>

   <input type="text" name="name" placeholder=" Name" required/>

   <input type="text" name="surname" placeholder=" Surname"required/>

   <input type="email" name="mail"placeholder=" email" required/>

   <input type="text" name="username" placeholder=" Username" required/>

   <input type="text" name="password" placeholder=" Password" required/>
         
   <button type="submit" form="f" value="login">Register</button>
 </form>
</div>
)
}
export default Registration;