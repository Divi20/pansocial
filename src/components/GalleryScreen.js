import React from 'react';
import { Card ,CardBody, CardImg,CardText,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom'



const AlbumList = (({uphotos, albums}) =>{

  return(
    <div>
      {albums.map(album =>{
      return <div> 
      <PhotoIcon albumId = {album.id} uphotos={uphotos}></PhotoIcon></div>
        
      })}
    </div>
  )
 
    
  });

  const PhotoIcon = (({uphotos, albumId}) =>{


    return(
      <div>
        {uphotos.map(photo =>{
        if(photo.albumId === albumId){
          return (
            
            <div className="col-lg-3 col-md-5" style={{marginBottom:"1%"}}>
            <div className="container" style={{height:"300px",width:"300px",borderRadius:"30px"}}>
            <Card style={{height:"100%",width:"100%",borderRadius:"15px"}}>
            <CardBody>
            <CardImg style={{height:"200px"}} src={photo.url}></CardImg>
            </CardBody>
            <CardFooter>
            <CardText>
            <h3>{photo.title}</h3>
            </CardText>
            </CardFooter>
            </Card>
            </div>
            </div>
        
         );
        }
          
        })}
      </div>
    )
   
      
    });




function GalleryScreen({currentUser, albums, photos}) {
 
const userId = currentUser.map(user =>(user.id));
var uphotos = photos.filter((photo) => photo.userId == userId );
  return (
    <div className="App">
    <div className="container-fluid">
    <div className="row">
    <AlbumList uphotos={uphotos} albums={albums}></AlbumList>
    </div>
            
            </div>
    
    </div>
  );
}

export default GalleryScreen;


