import React from 'react'
import { getCookie } from '../components/Helpers';
import { Redirect } from 'react-router-dom';
export default function Logout() {
    if( getCookie( "token" ) ) {
        document.cookie = "token=" + "deleted"+";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
    return  <Redirect  to="/" />
  
}