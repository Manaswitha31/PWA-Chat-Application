import React from "react";
import User from './Images/user.png';
import './ChatHeader.css';

function ChatHeader(){
    return(
        <div className="container chatHeader">
            <div className="row">
                <div className="col col-lg-2">
                    <img src={User} alt="This is not visible"></img>
                </div>
                <div className="col col-lg-10">
                    <h5>Bot</h5>
                </div>
            </div>
        </div>
    );
}
export default ChatHeader;