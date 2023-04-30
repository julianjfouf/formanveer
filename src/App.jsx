import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);

  function add1() {
    if (count === 1) {
      setForward(true);
    }

    if (count === 9) {
      setForward(false);
    }

    if (forward) {
      setCount((count) => count + 1);
    } else {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
