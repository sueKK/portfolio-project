import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-[#f4e7ce] text-[#1f1e1c] font-serif">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <section className="md:col-span-2">
          <div className="bg-[#fff] p-6 rounded-lg shadow-md border border-[#1f1e1c]">
            <p className="text-xl">
              \"Coding with purpose, innovating with passion, and building a future where creativity meets technology.\"
            </p>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <img
            src="/path/to/your/image.jpg"
            alt="Suzzy Kawira"
            className="rounded-lg shadow-md border border-[#1f1e1c]"
          />
        </section>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
