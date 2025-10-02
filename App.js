import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StoriesBar from "./components/StoriesBar";
import DMs from "./components/DMs";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import PostForm from "./components/PostForm";
import PostGrid from "./components/PostGrid";
import "./App.css";

function App() {
  const [user] = useState({
    name: "Nilanshu_Raj",
    bio: "Want to see myself in the Technical Team of Ecell. 🚀",
    avatar: "https://i.postimg.cc/zvbhPsvc/Profilepic.jpg"
  });
  const [posts, setPosts] = useState([
    { image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80", caption: "Sunset vibes 🔥", id: 1 },
    { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80", caption: "Ocean breeze 🌊", id: 2 },
    { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80", caption: "City nights!", id: 3 },
    { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=400&q=80", caption: "Portrait mood", id: 4 },
    { image: "https://images.unsplash.com/photo-1517808225220-91b3c23556a2?fit=crop&w=400&q=80", caption: "Mountains love 🏔️", id: 5 }
  ]);

  const [stories] = useState([
    { id: 1, avatar: 'https://randomuser.me/api/portraits/women/90.jpg', username: "alice" },
    { id: 2, avatar: 'https://randomuser.me/api/portraits/men/65.jpg', username: "bob" },
    { id: 3, avatar: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=facearea&w=128&h=128', username: "city" },
    { id: 4, avatar: 'https://randomuser.me/api/portraits/women/10.jpg', username: "emma" }
  ]);

  const [showDM, setShowDM] = useState(false);

  // Add new post 
  const addPost = (newPost) => setPosts([newPost, ...posts]);

  return (
    <div className="App">
      <Navbar onDM={() => setShowDM(true)} />
      <StoriesBar stories={stories} />
      <ProfileHeader user={user}/>
      <ProfileStats postsCount={posts.length}/>
      <PostForm addPost={addPost}/>
      <PostGrid posts={posts}/>
      {showDM && <DMs onClose={() => setShowDM(false)} />}
    </div>
  );
}

export default App;
