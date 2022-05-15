import React from "react";
import  handle from "../scripts/user/handle"

function Login(){

return (
  <div className="login">
  <form id="f" onSubmit={handle}>
      <h1>Login</h1>

    <input type="text" name="username" placeholder=" Username" required/>

    <input type="text" name="password" placeholder=" Password" required/>

    <button type="submit" form="f" value="login">Log In</button>

  </form>
</div>
  );

}
export default Login;
