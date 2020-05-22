import React from 'react';
import { CardImg,Card,CardText } from 'reactstrap';


const Post = ({userId , posts,comments, username, pic }) =>{
    return(
      posts.map(post => {
      if(userId === post.userId){
     
      return (<Card className="container" style={{padding:"10%",borderRadius:"30px",marginBottom:"5%"}}>
      <CardText>
      <div className="row">
      <img src={pic} style={{width:"50px",height:"50px",borderRadius:"25px"}}></img>
      <h1 style={{marginLeft:"55px"}}>{username}</h1>
      </div>  
    </CardText>
    <div className="row">
    <CardImg src={post.image} style={{width:"500px",height:"300px"}}></CardImg>
    </div>

    <div className="row">
    <CardText>
    <h3 className="profilename vertical-center" style={{marginLeft:"55px"}}>{post.body}</h3>
    </CardText>
    
    </div>
    
    
    
    <div>
      <Comments postId={post.id} userId = {post.userId} comments={comments}></Comments>
      </div>
  
  </Card>);
  }
  else{
    return <div></div>
    
  }
  })
  );
        
    
  }

  const Comments = ({userId , postId, comments }) =>{
    return(
      comments.map(comment => {
    if(comment.userId === userId && comment.postId === postId){
       
     return <div className="container">
        <Card style={{width:"100%"}}>
      
      <br></br>
      <CardText>
      <h1 className="profilename vertical-center" style={{marginLeft:"55px"}}>{comment.body}</h1>
      </CardText>
      
      
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
        if(userId === ra.userId){
           
         return <div className="container">
           
           <CardText className="row">
           <h3>{username}</h3>
           <h5>{ra.activity}</h5>
           <h6 style={{color:"#ddd"}}>{ra.time}</h6>
           
           </CardText>
          
          
          
        
        </div>
        }
        else{
          return <div></div>
          
        }
        })
        );
              
          
        }

const PostDetailsScreen = ({ currentUser, posts, comments, recentActivity }) => {
    return (
      
     <div className="row">
     <div className="col-sm-3 col-md-6 col-lg-7 border-right"> 
     {currentUser.map(cuser => (
       <div style={{textAlign:"justify"}}>
       <Post userId = {cuser.id} username={cuser.name} pic={cuser.profilepicture} posts = {posts} comments={comments}></Post>
       </div>
     ))}
   
     
     </div>
     <div className="col-sm-3 col-md-6 col-lg-4"> 

     
    {currentUser.map(cuser => (
      <Card style={{padding:"10%", borderRadius:"30px"}}>
      <h1>Recent Activity</h1>
      <RecentActivity userId={cuser.id} username={cuser.name} pic ={cuser.profilePicture} recentActivity={recentActivity}></RecentActivity>
      </Card>
    ))}
     </div>

    
     
     </div>
     
      
  
       
    
    );
  }
  
  export default PostDetailsScreen;