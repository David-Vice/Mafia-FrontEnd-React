import React from 'react'
import { getCookie } from './Helpers'
import { Link } from 'react-router-dom'
export default function PlayButton() {
    if (getCookie('token') == null) {
        return (
            <Link to="/login">
                Play
            </Link>
        )
    } else {
        return (
            //redirect to chat
            <Link to="/profile">
                Play
            </Link>
        )
    }

}