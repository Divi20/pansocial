import React from 'react';
import { CardImg,Card, CardTitle,CardText } from 'reactstrap';

const ProfileDetailScreen = ({ currentUser}) => {
  return (
    <div className="row">
    <div className="col-sm-3 col-md-6 col-lg-4 border-right"> 
    {currentUser.map(cuser => (
      <Card style={{textAlign:"justify"}}>
      <img src={cuser.profilepicture} style={{borderRadius:"120px",width:"250px",height:"250px"}}></img>
      <h1>{cuser.name}</h1>
     
      <ul style={{listStyleType:"none"}}>
      <li>
      <h1>
      <label>Username:</label>
      <text>{cuser.username}</text>
      </h1>
      </li>

      <li>
      <h1>
      <label>E-mail:</label>
      <text>{cuser.email}</text>
      </h1>
      </li>

      <li>
      <h1>
      <label>Phone:</label>
      <text>{cuser.phone}</text>
      </h1>
     
      
      </li>

      <li>
      <h1>
      <label>Website:</label>
      <text>{cuser.website}</text>
      </h1>
     
      
      </li>
      
      </ul>

      <hr></hr>
      <h1>Company</h1>
      <ul>
      <li>
      <h1>
      <label>Name:</label>
      <text>{cuser.company.name}</text>
      </h1>
      </li>

      <h1>
      <label>cathphrase:</label>
      <text>{cuser.company.catchphrase}</text>
      </h1>

      <h1>
      <label>bs:</label>
      <text>{cuser.company.bs}</text>
      </h1>
      
      </ul>
      </Card>
    ))}
  
    
    </div>
    <div className="col-sm-3 col-md-6 col-lg-7"> 
    
    {currentUser.map(cuser => (
      <Card style={{textAlign:"justify"}}>
      <h1>Address</h1>
      <ul style={{listStyleType:"none"}}>
      <li>
      <h1>
      <label>State:</label>
      <text>{cuser.address.state}</text>
      </h1>
      </li>

      <h1>
      <label>Suit:</label>
      <text>{cuser.address.suit}</text>
      </h1>

      <h1>
      <label>City:</label>
      <text>{cuser.address.city}</text>
      </h1>
      <h1>
      <label>Zipcode:</label>
      <text>{cuser.address.zipcode}</text>
      </h1>
      
      </ul>
      <img src="assets/map.png" style={{width:"70%",height:"50%",textAlign:"center"}}></img>
      
      <div className="row">
      <h6><label>Lat:</label> <text>cuser.address.geo.lat</text></h6>
      <h6><label>Lon:</label> <text>cuser.address.geo.lon</text></h6>
      
      </div>
      </Card>
    ))}

    
    </div>
    </div>
    
   
   
    

     
  
  );
}

export default ProfileDetailScreen;