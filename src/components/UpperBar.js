import React from 'react';

const UpperBar = ({username, imgurl}) => {
    return(
      
    <div className="row"> 
    <div className="container">
    <div className="row">
    <h1>Profile</h1>
    </div>
    </div>
    <div className="container" style={{position:"fixed",left:"80%"}}>
    <div className="row">
    <img src={imgurl} style={{width:"50px",height:"50px",borderRadius:"25px"}}></img>
    <h1 className="profilename vertical-center" style={{marginLeft:"50px"}}>{username}</h1>
    </div>
    
    </div>
   
   

    </div>
    );
}

export default UpperBar;