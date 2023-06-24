import { useState } from "react";
import "./App.css";
import Nav_Section from "./components/Nav_Section";
import Hero_Section from "./components/Hero_Section";
import Carosel from "./components/Carosel";



function App() {

  return (
    <>
      <Nav_Section />
      <Hero_Section />  
      <Carosel />
    </>
  );
}

export default App;
