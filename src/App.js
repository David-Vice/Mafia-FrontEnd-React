import React from "react";
import Test from "./components/Test";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";import "./styles/login2.css"

import Registration from "./components/Registration";
function App() {


  return (
     <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/components/Login">Login</Link>
           </li>
           <li>
             <Link to="/components/Registration">Registration</Link>
           </li>
         </ul>
       </nav>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Routes>
         <Route path="/components/Login">
           <Login />
         </Route>
         <Route path="/components/Registration">
           <Registration />
         </Route>
         <Route path="/">
           {/* <Home /> */}
         </Route>
       </Routes>
     </div>
   </Router>

  );
}

export default App;
