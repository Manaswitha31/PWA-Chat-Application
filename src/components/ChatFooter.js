import React from "react";
import './ChatFooter.css';
import Recording from "./Recording";
function ChatFooter(){
    return(
        <>
            <div className="container chatFooter">
                <form className="form-container">
                    <div className="row">
                        <div className="col col-lg-1">
                        <input type="file" className="fileUpload" accept="image/*" capture="camera" /><i class="fa-solid fa-upload fa-2xl"></i>
                        </div>
                        <div className="col col-lg-1">
                            <button type="submit" className="btn send"><i class="fa-solid fa-microphone fa-2xl"></i></button>
                        </div>
                        <div className="col col-lg-9">
                            <input type="text" className="form-control" placeholder="Enter text"></input>
                        </div>
                        <div className="col col-lg-1">
                            <button type="submit" className="btn send"><i class="fa-solid fa-paper-plane fa-xl"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}
export default ChatFooter;