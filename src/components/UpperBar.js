import React from 'react';
import { Card, CardImg ,CardText, Button} from 'reactstrap';
import {Link} from 'react-router-dom'


const UpperBar = ({username, imgurl, email,headername}) => {

    return(
      
    <div className="container" style={{position:"relative",top:"5%"}}> 
     <div className="row" style={{top:"5%"}}>
     <h1>{headername}</h1>
</div>
     
      
        <div className="container dropdown" style={{marginLeft:"80%",justifyContent:"center"}}>
        <div className="row" data-toggle="dropdown" style={{position:"fixed",left:"80%",top:"5%",justifyContent:"center"}}>
            <img src={imgurl} style={{width:"40px",height:"40px",borderRadius:"25px", objectFit:"cover"}} alt="pp"></img>
                <h1 className="profilename" style={{marginLeft:"35px"}}>{username}</h1>
                
        </div>
        <div class="row dropdown-menu pull-right" style={{width:"300px",height:"470px",borderRadius:"35px",padding:"0px"}}>
            <Card style={{width:"100%",height:"100%",borderRadius:"35px",margin:"0"}}>

            <CardImg src ={imgurl} style={{width:"80px",height:"80px",borderRadius:"35px", objectFit:"cover",marginLeft:"37%",marginTop:"2%"}}></CardImg>
            <CardText><h2 style={{textAlign:"center"}}>{username}</h2></CardText>
            <CardText><h3 style={{textAlign:"center"}}>{email}</h3></CardText>
            <hr></hr>
            
            <div className="row" style={{width:"80%",marginLeft:"10%"}}>
            <img src={imgurl} style={{width:"40px",height:"40px",borderRadius:"25px", objectFit:"cover",marginRight:"1%"}} alt="pp"></img>
            <h3 className="profilename">{username}</h3>
            </div>
            <hr></hr>
            <div className="row"  style={{width:"80%",marginLeft:"10%"}}>
            <img src={imgurl} style={{width:"40px",height:"40px",borderRadius:"25px", objectFit:"cover",marginRight:"1%"}} alt="pp"></img>
            <h3 className="profilename">{username}</h3>
            </div>
           
            <hr></hr>
            <CardText style={{textAlign:"center"}}><h1><span></span>Add Account</h1></CardText>
            <hr></hr>
          <Link to = '/'>  <Button className="btn btn-danger" style={{padding:"10px 15px 10px 15px", borderRadius:"10px",marginLeft:"40%"}}> Sign Out </Button></Link>
            </Card>
          </div>
          </div>
     </div>
      
         
   
    

       
       

   
    
    );
}

export default UpperBar;