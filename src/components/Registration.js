import React from "react";
import  handle from "../scripts/user/handle";
import "../styles/user/box.css";
import "../styles/user/button.css";
import "../styles/user/form.css";

function Registration(){  

return(
  <div className="box">
    <div className="box1">
        <div className="box11">
          <p>Navigation</p>
         
          


        </div>
        <div className="box12">
          
          
          <div className="login">
            <div className="loginHeader">
              <h1>Create an account</h1>
              <div className="loginSubHeader">
                <p>Already have an account?</p> 
                <button type="submit" value="login">Log In</button>

              </div>
            </div>

            <form className="form1" id="f"  onSubmit={handle}>
        
              <input type="text" name="username" placeholder=" Username" required/>
        
             <input type="email" name="mail"placeholder=" email" required/>
        
        
        
             <input type="password" name="password" placeholder=" Password" required/>
             <button type="submit" form="f" value="login">Sign Up</button>
           </form>
        </div>
          
        
        </div>
    </div>
    
    <div className="box2">
    
    
    
      <p>photo</p>
    
    </div>

  </div>
)
}
export default Registration;