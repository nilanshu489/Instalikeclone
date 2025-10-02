import React from "react";
import "./PostGrid.css";

function PostGrid({ posts }) {
  return (
    <div className="post-grid">
      {posts.map(post => (
        <div className="post-grid-item" key={post.id}>
          <img src={post.image} alt="Post" />
          <div className="post-overlay">
            <span><i className="bi bi-heart"></i> 99</span>
            <span><i className="bi bi-chat"></i></span>
            <div className="post-caption">{post.caption}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostGrid;
