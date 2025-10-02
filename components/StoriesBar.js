import React from "react";
import "./StoriesBar.css";

function StoriesBar({ stories }) {
  return (
    <div className="stories-bar">
      {stories.map((story) => (
        <div className="story-item" key={story.id}>
          <img src={story.avatar} alt={story.username} />
          <div className="story-username">{story.username}</div>
        </div>
      ))}
    </div>
  );
}
export default StoriesBar;
