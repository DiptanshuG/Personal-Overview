import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('YOUR_GA_MEASUREMENT_ID');



function App() {

  // let userTheme = window.localStorage.getItem("personal-website-theme");
  //   if (userTheme === null) {
  //     window.localStorage.setItem("personal-website-theme", 'dark');
  //     userTheme = 'dark';
  //   }
  //   document.querySelector('html').setAttribute("data-theme", userTheme);
  //   dispatch(setTheme(userTheme));

  return (
    <div>
      <Nav></Nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer></Footer>

      </div>
    </div>

  );
}

export default App;