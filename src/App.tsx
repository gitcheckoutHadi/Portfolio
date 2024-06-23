import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import "./index.css"; // Ensure to import the updated CSS file
import { themeMode } from "./theme/Webtheme";

function App() {
  useEffect(() => {
    document.documentElement.classList.add(
      themeMode === "light" ? "light-theme" : "dark-theme"
    );
  }, [themeMode]);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        {/* <FooterBottom /> */}
      </div>
    </div>
  );
}

export default App;
