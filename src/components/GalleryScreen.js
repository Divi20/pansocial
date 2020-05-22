import React from 'react';
import { Card ,CardBody, CardImg,CardText,CardFooter} from 'reactstrap';


function GalleryScreen({currentUser, albums, photos}) {
 


  return (
    <div className="App">
    <h3>Album</h3>
    <div className="row">
    <div className="col-log-3">
    <div className="container" style={{height:"300px",width:"300px",borderRadius:"30px"}}>
    <Card style={{height:"100%",width:"100%"}}>
    <CardBody>
    <CardImg src="assets/logo192.png"></CardImg>
    </CardBody>
    <CardFooter>
    <CardText></CardText>
    </CardFooter>
    </Card>
    </div>
    
    
    
   
    </div>
    
    </div>
     
    </div>
  );
}

export default GalleryScreen;