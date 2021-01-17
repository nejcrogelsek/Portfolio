import React, { useState } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import SkillsSection from "../components/SkillsSection";
import ToolsSection from "../components/ToolsSection";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroSection />
      <AboutSection />
      {/* Projects section */}
      <SkillsSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
