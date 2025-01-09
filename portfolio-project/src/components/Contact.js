// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#f4e7ce]">
      <h2 className="text-2xl font-bold mb-4">Let’s Get in Touch!</h2>
      <p className="text-lg">Feel free to connect with me:</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:underline">
          LinkedIn
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
