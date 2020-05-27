import React from 'react';
import {Card, CardBody, CardTitle, CardHeader, Label} from 'reactstrap';
import UpperBar from './UpperBar'

const Completed = ({currentUser , todoId, todoTitle }) =>{
  return(
    currentUser.map(cuser => {
      if(todoId === cuser.id){
        return (<li key={todoId}><input type="checkbox" checked/><span class="checkmark"></span>  {todoTitle} </li>);
      }
  
      else{
        return <div></div>
      }
  })
  ); 
}

const ToDo = ({currentUser , todoId, todoTitle }) =>{
  return(
    currentUser.map(cuser => {
      if(todoId === cuser.id){
        return (<li key={todoId}> <input type="checkbox"/>   {todoTitle}  </li>);
      }
  
      else{
        return <div></div>
      }
  })
  ); 
}

const TodoScreen = ({ todos, currentUser }) => {
  return (
    <div className="row">
    {currentUser.map((cuser)=>{
      return <UpperBar username={cuser.name} imgurl={cuser.profilepicture} email={cuser.email} headername="Todo"/>
    })}

  <br></br>
  <br></br>
  
  <hr style={{paddingLeft:"5%",paddingRight:"5%"}}></hr>

    <div className="col-lg-6">
        
        <Card className="todocard text-dark">
          
          <CardHeader className="todocardheader">
          
            <CardTitle>
              <h2>ToDo</h2>
            </CardTitle>
          
          </CardHeader>
      
          <CardBody>
      
            <ul className="todoList">

              {todos && todos.map(cutodo => {
                if(cutodo.completed !== true)
                return <ToDo currentUser={currentUser} todoId={cutodo.userId} todoTitle={cutodo.title}></ToDo>
                })}

              <li> <input type="checkbox"/> <Label style={{textEmphasisColor:"lightGrey", fontSize:"large"}}> Type your task title</Label> </li>
            </ul>
        
          </CardBody>
      
        </Card>

      </div>

      <div className="col-lg-5">
        
        <Card className="completedcard text-dark">
      
          <CardHeader className="todocardheader">
      
            <CardTitle>
              <h3>Completed</h3><img className="tickmark" src="assets/completedd.png" alt="greentick"/>
            </CardTitle>
      
          </CardHeader>
      
          <CardBody>
      
            <ul className="completedlist">
              {todos && todos.map(cutodo => {
                if(cutodo.completed !== false)
                return <Completed currentUser={currentUser} todoId={cutodo.userId} todoTitle={cutodo.title}></Completed>
                  })}
            </ul>

          </CardBody>

        </Card>
      
      </div>

    </div>
  );
}

export default TodoScreen;


