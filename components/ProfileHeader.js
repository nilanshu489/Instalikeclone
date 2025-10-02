import React from "react";
import "./ProfileHeader.css";
function ProfileHeader({ user }) {
  return (
    <div className="profile-header">
      <img src={user.avatar} alt="avatar" className="profile-avatar"/>
      <div>
        <h2>{user.name}</h2>
        <div className="profile-bio">{user.bio}</div>
      </div>
    </div>
  );
}
export default ProfileHeader;

