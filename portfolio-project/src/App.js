// App.js
import React from "react";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#000000] text-[#1f1e1c] font-sans">
      <Header />
      <Quote />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
