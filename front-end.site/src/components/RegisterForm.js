import React, { useState , useRef,useEffect } from 'react'
import Axios from 'axios' 
import { Link, Redirect } from 'react-router-dom';
export default function RegisterForm() {
    const url="https://localhost:44313/api/Auth/register";
    const [confirm, setConfirm] = useState(false);
    const [errorMes, seterrorMes] = useState("");
    const [data,setData]=useState({
        userName: "",
        password: "",
        email:"",
    })
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
   
    function submit(e) {
       e.preventDefault();
        Axios.post(url,{
            userName:data.userName,
            password:data.password,
            email:data.email
        })
        .then(res=>{
            var date = new Date();
            var expiresDate = new Date(date.setDate(date.getDate() + 1));
            var expiresDateString = expiresDate.toUTCString();
            document.cookie =  `token=${res.data}; expires=${expiresDateString};`; 
            setConfirm(true);
        })
        .catch((error) => {
            if (error.response!=null) {
            setConfirm(false);
            seterrorMes( error.response.data);
            }
            return;
        });

        
    }
    if(confirm){
        return  <Redirect  to="/profile" />
    }

  return (
    <div>
          <form onSubmit={(e)=>submit(e)} className="sign-up-form">
              <ul className="sign-up-ul list">
                
                <li className="list-item">
                  <label className="sign-up-label">
                    <span>Username</span>
                  </label>
                </li>
                <li className="list-item">
                  <input
                    type="text"
                    placeholder="Username" 
                    className="sign-up-textinput input" id='userName' onChange={(e)=>handle(e)} value={data.userName}
                  />
                </li>
                <li className="list-item">
                  <label className="sign-up-label">
                    <span>Email</span>
                  </label>
                </li>
                <li className="list-item">
                  <input
                    type="email"
                    placeholder="Email" 
                    className="sign-up-textinput input" id='email' onChange={(e)=>handle(e)} value={data.email}
                  />
                </li>
                <li className="list-item">
                  <label className="sign-up-text1">Password</label>
                </li>
                <li className="list-item">
                  <input
                    type="password"
                    placeholder="Password" id='password' onChange={(e)=>handle(e)} value={data.password}
                    className="sign-up-textinput1 input"
                  />
                </li>
                
              <li className="list-item">
                    <label id='errorMessage' className="sign-up-label">{errorMes}
                    </label>
                </li>
                <li className="sign-up-li2 list-item"></li>
                <li className="sign-up-li3 list-item"></li>
              </ul>
              <input
                type="submit"  style={{marginTop:  '100px'}} 
                value="Sign Up"
                className="sign-up-textinput2 input"
              />

            </form>
    </div>
  )
}
