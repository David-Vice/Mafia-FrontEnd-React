import React, { useState,useEffect } from 'react'
import Axios from 'axios' 
import {Redirect} from 'react-router-dom';
import { parseJwt } from './Helpers';
export default function LoginForm() {
    const url="https://localhost:44313/api/Auth/login";
    const [confirm, setConfirm] = useState(false);
    const [data,setData]=useState({
        userName: "",
        password: "",
    })
    const [errorMes, seterrorMes] = useState("");
    
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
    
    async function  submit(e) {
        e.preventDefault();
        
        await Axios.post(url,{
            userName:data.userName,
            password:data.password
        })
        .then(res=>{
           // var currentdate = new Date()
            document.cookie = "token="+res.data+"; expires=Thu, 25 May 2022 12:00:00 UTC; ";
            setConfirm(true);
        })
        .catch((error) => {
            if(error.response!=null){
            setConfirm(false);
            seterrorMes( error.response.data);
            }
           // alert(error.response.data)
            return;
        });

        
    }
    if(confirm){
        return  <Redirect  to="/profile" />
    }

    return (
    <div>
         <form onSubmit={(e)=>submit(e)} className="login-form">
          <ul className="login-ul list">
            <li className="list-item">
              <label className="login-text">Username</label>
            </li>
            <li className="list-item">
              <input name='username' id='userName'
                type="text" onChange={(e)=>handle(e)} value={data.userName}
                placeholder="Username"
                className="login-textinput input"
              />
            </li>
            <li className="list-item">
              <label className="login-label">
                <span>Password</span>
              </label>
            </li>
            <li className="list-item">
              <input name='password' id='password' onChange={(e)=>handle(e)} value={data.password}
                type="password"
                placeholder="Password"
                className="login-textinput1 input"
              />
            </li>
            <li className="list-item">
              <label className="login-label">
                {errorMes}
              </label>
            </li>
            <li className="login-li2 list-item">
              <span className="login-text2">Forgot Password?</span>
            </li>
            <li className="login-li3 list-item"></li>
          </ul>
          <input
            type="submit"
            value="Login"
            className="login-textinput2 input"
          />
        </form>
    </div>
  )
}
