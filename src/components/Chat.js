import React from "react";
import Header from "./Header";
import './Chat.css';
import Logo from './Images/logo.png';
import Person from "./Person";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

function Chat(){
    return(
        <>
        <Header />
        <div className="container chatWindow">
            <div className="row">
                <div className="col-lg-4 left">
                    <div className="container header">
                        <img src={Logo} alt="This is not visible"></img>
                    </div>
                    <Person />
                    <Person />
                </div>
                <div className="col-lg-8 right">
                    <ChatHeader />
                    <ChatBody />
                    <ChatFooter />
                </div>
            </div>
        </div>
        </>
    );
}
export default Chat;