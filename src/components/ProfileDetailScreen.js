import React from 'react';
import { CardImg,Card, CardTitle,CardText } from 'reactstrap';

const ProfileDetailScreen = ({ currentUser}) => {
  return (
    <div className="row">
      <div className="col-sm-3 col-md-6 col-lg-4 border-right"> 
        
        {currentUser.map(cuser => (
          <Card style={{textAlign:"center", borderStyle:"hidden"}}>
            
            <img className="profilepicture" src={cuser.profilepicture} style={{borderRadius:"120px",width:"220px",height:"220px", alignSelf:"center"}} alt="pp"></img>
            <h1>{cuser.name}</h1>
     
            <ul style={{listStyleType:"none", textAlign:"left"}}>
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
            
            <ul style={{listStyleType:"none", textAlign:"justify"}}>
              
              <li>
                <h1>
                  <label>Name:</label>
                  <text>{cuser.company.name}</text>
                </h1>
              </li>

              <li>
                <h1>
                <label>cathphrase:</label>
                <text>{cuser.company.catchPhrase}</text>
                </h1>
              </li>
              
              <li>
                <h1>
                  <label>bs:</label>
                  <text>{cuser.company.bs}</text>
                </h1>
              </li>
            
            </ul>
          
          </Card>
        
        ))}

    </div>

      <div className="col-sm-3 col-md-6 col-lg-7"> 
    
        {currentUser.map(cuser => (
          <Card style={{textAlign:"right", borderStyle:"hidden"}}>
            <ul style={{listStyleType:"none", textAlign:"justify"}}>
                
              <h1>Address</h1>    
                
                <ul style={{listStyleType:"none", textAlign:"left", marginLeft:"20px"}}>

                <li>
                  <h1>
                    <label>Street:</label>
                    <text>{cuser.address.street}</text>
                  </h1>
                </li>   
                  
                  <h1>
                    <label>Suite:</label>
                    <text>{cuser.address.suite}</text>
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
                
            </ul>

            <img src="assets/map.png" style={{width:"95%",height:"90%", borderRadius:"50px", alignSelf:"center"}} alt="map"></img>
      
            <h3 style={{marginTop:"15px", marginRight:"40px"}}>
              <label>Lat:</label> <text>{cuser.address.geo.lat}</text> <label style={{marginLeft:"20px"}}>Long:</label> <text>{cuser.address.geo.lng}</text>
            </h3>
      </Card>
    ))}

    
    </div>
    </div>
    
   
   
    

     
  
  );
}

export default ProfileDetailScreen;