import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
    </>
  );
};

export default Home;
