import React from "react";
import "./ProfileStats.css";
function ProfileStats({ postsCount }) {
  return (
    <div className="profile-stats">
      <span><b>{postsCount}</b> posts</span>
      <span><b>223</b> followers</span>
      <span><b>124</b> following</span>
    </div>
  );
}
export default ProfileStats;
