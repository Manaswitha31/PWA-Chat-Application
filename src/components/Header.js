import React from "react";
import './Home.css';
import  Logo from './Images/logo.png'

function Header(){
    return(
        <div className='header'>
            <div className='container logo'>
                <img src={Logo} alt='img is not displayed'></img>
                <h2>Chat.io</h2>
            </div>
        </div>
    )
}
export default Header;