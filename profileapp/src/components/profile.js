import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <img
        src="https://via.placeholder.com/150"
        alt="profile"
        className="profile-pic"
      />
      <h2>John Doe</h2>
      <p>Email: johndoe@example.com</p>
      <p>Location: Mumbai, India</p>

      <button className="btn">Follow</button>
    </div>
  );
}