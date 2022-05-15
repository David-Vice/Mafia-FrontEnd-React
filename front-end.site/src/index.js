import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Registration from './components/Registration';
import Login from './components/Login';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Home/>
  // <Router>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/registration" element={<Registration />} />
  //         <Route path="*" element={<NoPage />} />
  //       </Route>
  //     </Routes>
  //   </Router>

  // <App />
);

