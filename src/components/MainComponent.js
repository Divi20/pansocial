import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";



export default function MainComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [recentActivity, setActivity] =useState([]);
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://panorbit.in/api/users.json");
      setUsers(res.data.users);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://panorbit.in/api/posts.json",{
      });
      setPosts(res.data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  console.log("posts:",posts)
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get("https://panorbit.in/api/comments.json",{
      });
      setComments(res.data.comments);
      setLoading(false);
    };
    fetchComments();
  }, []);

console.log("comments: ",comments)

useEffect(() => {
    const fetchAlbums = async () => {
      const res = await axios.get("https://panorbit.in/api/albums.json",{
      });
      setAlbums(res.data.album);
      setLoading(false);
    };
    fetchAlbums();
  }, []);

console.log("albums: ",albums)

useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get("https://panorbit.in/api/photos.json",{
      });
      setPhotos(res.data.albums);
      setLoading(false);
    };
    fetchPhotos();
  }, []);

console.log("photos: ",photos)

useEffect(() => {
    const fetchActivity = async () => {
      const res = await axios.get("https://panorbit.in/api/activity.json",{
      });
      setActivity(res.data.recentActivity);
      setLoading(false);
    };
    fetchActivity();
  }, []);

console.log("activity: ",recentActivity)

useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get("https://panorbit.in/api/todo.json",{
      });
      setTodos(res.data.todo);
      setLoading(false);
    };
    fetchTodo();
  }, []);

console.log("todos ",todos)


  return (
   
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LandingPage
                users={users}
                loading={loading}
                setCurrentUser={setCurrentUser}

              />
            )}
          />
          <Route
            exact
            path="/home"
            component={({ match }) => <HomePage  currentUser={currentUser} posts={posts} comments={comments} recentActivity={recentActivity} todos={todos}/>}
          />

          
          <Redirect to="/" />
        </Switch>
      </div>
  
  );
}
