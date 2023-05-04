import React from "react";
import Header from "./components/Header.js";
import Aside from "./components/Aside.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <Aside/>
        <Content/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
