import React from 'react';
import { Card ,CardBody, CardImg,CardText} from 'reactstrap';
import GalleryScreen from './GalleryScreen';
import { BrowserRouter as Router, Route, Link ,NavLink} from 'react-router-dom';
import ProfileDetailScreen from './ProfileDetailScreen';
import PostDetailScreen from './PostDetailScreen';
import UpperBar from './UpperBar';
import TodoScreen from "./TodoScreen";
import PostDetailsScreen from './PostDetailScreen';


const HomePage = ({ currentUser, posts, comments , todos ,recentActivity, photos, albums}) => {
  console.log(posts)
  return (
    <Router>
    <div className="App">
        <div className="row">
        
        <div className="col-sm-3 col-md-6 col-lg-3"> 

          <div className="sidecontainer">
            
            <Card className="sidecard">
              
              <CardBody>
                <div className="vertical-center" style={{width:"90%",padding:"2%",color:"white"}}>       
                  
                  <NavLink className="nav-link"  to='/home' activeStyle={{
                    color:'white'
                    }}><h1>Profile</h1></NavLink>

                  <hr></hr>
                  
                  <NavLink className="nav-link" to='/posts' activeStyle={{
                    color:'white'
                    }}><h1>Post</h1></NavLink>
                  
                  <hr></hr>
                  
                  <NavLink className="nav-link"  to='/gallery' activeStyle={{
                    color:'white'
                    }}> <h1>Gallery</h1></NavLink>
                  
                  <hr></hr>
                  
                  <NavLink className="nav-link" to='/todo' activeStyle={{
                    color:'white'
                    }}> <h1>Todo</h1></NavLink>

                </div>
 
              </CardBody>
            </Card>
          </div>
        </div>
      
      <div className="col-sm-3 col-md-6 col-lg-9 maincontainer">  
    <Route exact path="/home" component={() => {return <ProfileDetailScreen currentUser={currentUser}/>}} />
    <Route path="/posts" component={() => {return <PostDetailsScreen currentUser={currentUser} posts={posts} comments={comments} recentActivity={recentActivity}/>}}/>
    <Route path="/gallery" component={() => {return <GalleryScreen currentUser = {currentUser} albums={albums} photos={photos}></GalleryScreen>}} />
    <Route path="/todo" component={() => {return <TodoScreen currentUser={currentUser} todos={todos}/>}}/>
  
    </div>
  
    
   </div>
   <div className="container">
    <h1 className="chat">Chat<span><i class="far fa-comment-alt"></i></span></h1>
   </div>
   
   
      
    </div>
</Router>
  );
}

export default HomePage;