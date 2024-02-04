import React from 'react';
import ChatVideo from './Images/chat_animation.webm'
import Header from './Header';

function Home(){
    return(
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <video src={ChatVideo} width={400} height={450} autoPlay controls muted loop />
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-5'>
                        <form action='/chat'>
                            <h1>Welcome!</h1><br></br>
                            <div className='form-group'>
                                <label for="name">Name:</label><br></br><br></br>
                                <input name="name" className='form-control' id='name' placeholder='Enter your name' required/>
                            </div><br></br>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-default form-control'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;