import React from 'react';
import  Dropdown from './Dropdown';

const UpperBar = ({menu, username, imgurl}) => {

    return(
      
    <div className="row" style={{position:"fixed"}}> 
        <div className="container">
            <div className="row">
                <h1>Profile</h1>
            </div>
        </div>
        
        <div className="container" style={{position:"fixed",left:"80%"}}>
        <div className="row">
            <img src={imgurl} style={{width:"40px",height:"40px",borderRadius:"25px", objectFit:"cover"}} alt="pp"></img>
                <h1 className="profilename vertical-center" style={{marginLeft:"50px"}}>{username}</h1>
                
        </div>

    </div>
    

       
       

    </div>
    
    );
}

export default UpperBar;