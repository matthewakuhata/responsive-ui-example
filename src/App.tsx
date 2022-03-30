import React from "react";
import {
  Footer,
  Blog,
  About,
  Possibility,
  Feature,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
