import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-screen bg-black text-white">
      <div className="container mx-auto flex w-full justify-between items-center py-10">
        <h1 style={{ marginLeft: "20px" }} className="text-4xl font-bold">
          Manveer's Website
        </h1>
        <ul className="flex gap-5">
          <li>
            <a className="text-white font-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white font-bold" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a className="text-white font-bold" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
