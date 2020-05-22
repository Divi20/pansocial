import React from 'react';
import {Card, CardBody, CardTitle, CardHeader} from 'reactstrap';
import {Link } from 'react-router-dom';



const LandingPage = ({ users, loading, setCurrentUser}) => {

  
  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="accountscontainer">
      <Card className="accountscardtextdark">
      <CardHeader className="accountscardheader">
      <CardTitle>
     <h2 className="cardheading">Select an account</h2>
      </CardTitle>
      </CardHeader>
      
      <CardBody>
      <ul className="list-groupmb-3">
      {users.map(user => (
        <Link to="/home">
          <li
            key={user.id}
            className="list-group-item"
            onClick={() => setCurrentUser([user])}
          >
            <img className="mainlistimage" src={user.profilepicture} alt="pp"/>
            {user.name}
          </li>
        </Link>
      ))}
    </ul>
      
      </CardBody>
      </Card>
      </div>
     <img className="wave" src="assets/wave.png" width="100%" alt="wave" height="650px" style={{marginTop:"20%"}}></img>
      </header>

    
    </div>
  );
};



export default LandingPage;
