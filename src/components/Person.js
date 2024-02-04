import React from "react";
import User from './Images/user.png';
import './Person.css';

function Person(){
    return(
        <div className="container person">
            <div className="row">
                <div className="col col-lg-3">
                    <img src={User} alt="Img is not displayed"></img>
                </div>
                <div className="col col-lg-9">
                    <h5>Bot</h5>
                </div>
            </div>
        </div>
    );
}
export default Person;