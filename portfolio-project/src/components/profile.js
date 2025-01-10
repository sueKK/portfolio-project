// Profile.js
import React from "react";
import profileImage from "../assets/images/sueKK.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#f4e7ce]">
      <img
        src={profileImage}
        alt="Suzzy Kawira"
        className="w-48 h-48 rounded-full shadow-md mb-4"
      />
      <p className="text-lg text-center">
        I’m Suzzy Kawira, a passionate software engineer and digital marketer
        with a flair for creativity and innovation.
      </p>
    </div>
  );
};

export default Profile;
