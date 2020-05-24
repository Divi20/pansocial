import React from 'react';
import { CardImg,Card,CardText } from 'reactstrap';


const Post = ({userId , posts,comments, username, pic, useremail }) =>{
  return(
    posts.map(post => {
    if(userId === post.userId){ 
      return (
        <Card className="container" style={{padding:"7%",borderRadius:"30px",marginBottom:"5%"}}>
          <CardText>
            <div className="row">
              <img src={pic} style={{width:"40px",height:"40px",borderRadius:"25px",objectFit:"cover"}} alt="pp"></img>
              <h1 style={{marginLeft:"10px"}}>{username}</h1>            
            </div>
            
            <div className="time">
              <h6 style={{marginLeft:"35px", marginTop:"-10px"}}>{post.time}</h6>    
            </div>  
          
          </CardText>
    
            <div className="row" >
              <CardImg src={post.image} style={{width:"625px",height:"200px", borderRadius:"10px"}}></CardImg>
            </div>

            <div className="row">
              <CardText>
                <h3 className="profilename" style={{marginLeft:"5px", marginTop:"15px", width:"90%"}}>{post.body}</h3>
              </CardText>    
            </div>

            <div className="row">
            <h4> comments </h4> <h4 style={{marginLeft:"20px"}}> Share </h4>
            </div>
          
          <div className="row">
            <Comments postId={post.id} userId = {post.userId} comments={comments} username={username} useremail={useremail}></Comments>
          </div>
  </Card>);
  }
  else{
    return <div></div> 
    }
  })
  );
  }

  const Comments = ({userId , postId, comments, username, useremail }) =>{
    return(
      comments.map(comment => {
        if(comment.userId === userId && comment.postId === postId){
       
          return <div className="container">
                  <Card style={{width:"100%", marginTop:"20px", borderStyle:"hidden"}}>

            <div className="row" style={{marginLeft:"10px"}}>      
              <img src={comment.profilePicture} style={{width:"40px", height:"40px", borderRadius:"25px",objectFit:"cover"}} alt="pp"></img>
              <h3 style={{marginLeft:"10px",marginTop:"10px", fontStyle:"bold"}}>{username}</h3>
              <h6 style={{marginLeft:"15px", marginTop:"13px"}}>{comment.time}</h6>    
            </div>

            <div className="row" style={{marginLeft:"60px"}}>
              <h6 style={{ marginTop:"-6px"}}>{useremail}</h6>    
            </div>
            
              <CardText>
                <h3 className="profilename " style={{marginLeft:"60px"}}>{comment.body}</h3>
              </CardText>
            
              <div className="row" style={{marginLeft:"60px"}}>
                <h4 style={{ marginTop:"5px"}}>Reply</h4>    
              </div>

            </Card>
      </div>
    }
    else{
      return <div></div>
      
    }
    })
    );
          
      
    }
    const RecentActivity = ({userId, recentActivity, username, pic }) =>{
        return(
                recentActivity.map(ra => {
                  
                  if(userId === ra.userId && (ra.activity === "liked post" || ra.activity === "commented post" || ra.activity === "shared a  post")){
                    return <div className="container">
                            <CardText className="row">
                              <h3>{username}</h3>
                              <h4 style={{marginLeft:"7px", marginTop:"1px"}}>{ra.activity}.</h4>
                              <h6 style={{marginLeft:"7px", color:"#ddd"}}>{ra.time}</h6>
                            </CardText>    
                          </div>
                    }
                  else if(userId !== ra.userId && ra.activity === "uploaded post"){
                      return <div className="container">
                        <CardText className="row">
                              <img src={pic} alt="ap" style={{marginRight:"10px",width:"20px",height:"20px",borderRadius:"10px",objectFit:"cover"}}></img>
                              <h3>{username}</h3>
                              <h4 style={{marginLeft:"7px", marginTop:"1px"}}>{ra.activity}.</h4>
                              <h6 style={{marginLeft:"7px", color:"#ddd"}}>{ra.time}</h6>
                            </CardText>    
                      </div>          
                    }
                  })
                );
              }

const PostDetailsScreen = ({ currentUser, posts, comments, recentActivity }) => {
    return (
      
     <div className="row">
      <div className="col-sm-3 col-md-6 col-lg-7"> 
        {currentUser.map(cuser => (
          <div style={{textAlign:"justify", marginTop:"20px"}}>
            <Post userId = {cuser.id} username={cuser.name} pic={cuser.profilepicture} posts = {posts} comments={comments} useremail={cuser.email}></Post>
          </div>
        ))}
      </div>
     
      <div className="col-sm-3 col-md-6 col-lg-4"> 
        {currentUser.map(cuser => (
          <Card style={{padding:"7%", borderRadius:"30px" , marginTop:"20px"}}>
            <h1>Recent Activity</h1>
              <RecentActivity userId={cuser.id} username={cuser.name} pic ={cuser.profilepicture} recentActivity={recentActivity}></RecentActivity>
          </Card>
        ))}   
      </div>
     
     </div>
    );
  }
  
  export default PostDetailsScreen;