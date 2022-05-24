import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Helmet } from 'react-helmet'

import './profile.css'
import { getCookie, parseJwt,token } from '../components/Helpers'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const Profile = (props) => {
  ///for setting values to profile page
  const [photo, setPhoto] = useState(null);
  var jsonData=parseJwt( getCookie("token"));
  const [rating, setRating] = useState(jsonData.Rating);
  // console.log(jsonData);
  const getPhotourl=`https://localhost:44313/api/Users/GetProfilePhoto/${jsonData.Id}`;
  useEffect(() => {
     axios.get(getPhotourl).then((response) => {
      setPhoto(response.data)
    });
  }, []);
  const sessions = jsonData.Sessions;
  
  const listItems = Array.from(sessions).map((d) => <li key={d.sessionName} className='profile-list-item list-item'> {d.sessionName} {d.startTime}   {d.endTime}</li>);

  const urlForPut=`https://localhost:44313/api/Auth/${jsonData.Id}`;
  const [confirm, setConfirm] = useState(false);
  const [data,setData]=useState({
      userName: jsonData.UserName,
      password: "",
      email:jsonData.Email,
      photo:photo
  })
  const [errorMes, seterrorMes] = useState("");
  
  function handle(e) {
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      newdata['photo']=photo
      console.log(newdata)
      setData(newdata)
  }
  function changePhoto(e){
    var file = e.target.files[0];
    var reader = new FileReader();
  
    reader.onloadend = function() {
      let res=reader.result.replace("data:image/png;base64,", "");
      console.log('RESULT', reader.result)
      setPhoto(res)
    }
  //  reader.readAsArrayBuffer(file)
    reader.readAsDataURL(file);
  }
  async function  submit(e) {
      e.preventDefault();
      
      await axios.put(urlForPut,{
          userName:data.userName,
          password:data.password,
          email:data.email,
          photo:photo
      })
      .then(res=>{
         // var currentdate = new Date()
          // adds token to cookie
          console.log(res)
          var date = new Date();
          var expiresDate = new Date(date.setDate(date.getDate() + 1));
          var expiresDateString = expiresDate.toUTCString();
          document.cookie =  `token=${res.data}; expires=${expiresDateString};`; 

          setConfirm(true);
      })
      .catch((error) => {
        console.log(console.log(error.response));
          if(error.response!=null){
          setConfirm(false);
          seterrorMes( error.response.data);
          }
          return;
      });
  }
  if(confirm){
    window.location.reload(false);
  }




  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Mafia</title>
        <meta property="og:title" content="Profile - Mafia" />
      </Helmet>
      <header data-role="Header" className="profile-header">
        <nav className="profile-nav">
          <Link to="/" className="profile-navlink">
            <img
              alt="image"
              src="/playground_assets/1-removebg-preview-200h.png"
              className="profile-image"
            />
          </Link>
          <span className="profile-attitude">Attitude</span>
          <span className="profile-rules">Rules</span>
          <span className="profile-about-us">About us</span>
        </nav>
      </header>
      <div className="profile-main">
        <div className="profile-container01">
          <div className="profile-container02">
            <img
              alt="image"
              src={`data:image/jpeg;base64,${photo}`}
              className="profile-image1"
            />
          </div>
          <div className="profile-container03"></div>
          <div className="profile-container04">
            <form onSubmit={(e)=>submit(e)} className="profile-form">
              <div className="profile-container05">
                <div className="profile-container06">
                  <label  className="profile-text" htmlFor="image">Upload Image</label>
                  <input onChange={(e)=>changePhoto(e)}
                    type="file" id="image" name="image"
                    className="profile-textinput input"
                  />
                </div>
                <div className="profile-container07"></div>
                <div className="profile-container06">
                  <label className="profile-text">Email</label>
                  <input
                    type="email" id='email' onChange={(e)=>handle(e)} value={data.email}
                    placeholder="email"
                    className="profile-textinput input"
                  />
                </div>

                <div className="profile-container07"></div>
                
              </div>

              <div className='profile-container05'>
              <div className="profile-container06">
                  <label className="profile-text">Username</label>
                  <input
                    type="text" id='userName' onChange={(e)=>handle(e)} value={data.userName}
                    placeholder="username"
                    className="profile-textinput input"
                  />
                </div>
                <div className="profile-container07"></div>
                <div className="profile-container08">
                  <label className="profile-text01">
                    <span>Password</span>
                  </label>
                  <input id='password'
                    type="password" onChange={(e)=>handle(e)} value={data.password}
                    placeholder="password"
                    className="profile-textinput1 input"
                  />
                </div>
                <div className="profile-container09"></div>
                <div className="profile-container10">
                  <input
                    type="submit"
                    value="Save Changes"
                    placeholder="placeholder"
                    className="profile-textinput2 input"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="profile-container11">
        <div className="profile-container12">
          <div className="profile-container13">
            <h1 className="profile-text03">
              <span>Rating</span>
            </h1>
          </div>
          <div className="profile-container14">
            <h1 className="profile-text05">
              <span>{rating}</span>
            </h1>
          </div>
        </div>
        <div className="profile-container15">
          <ul className="profile-ul list">
            {listItems}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
