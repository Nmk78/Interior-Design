import React from "react";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

const Nav_Section = () => {
  return (
    <div className="flex items-center justify-between  my-3 mt-0  w-full h-20 border-b-2 border-gray-200">
      <div id="logo" className="items-center justify-center">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>
      <div id="Btns" className="flex  items-center justify-between w-1/2 h-10">
        <a
          href="/designs"
          className="mx-5 my-2 p-2 hover:border-b-4 border-purple-800"
        >
          <div>
            <h2 className="font-Inter text-black">Designs</h2>
          </div>
        </a>
        <a
          href="/services"
          className="mx-5 my-2 p-2 hover:border-b-4 border-purple-800"
        >
          <div>
            <h2 className="font-Inter text-black">Services</h2>
          </div>
        </a>
        <a
          href="/about"
          className="mx-5 my-2 p-2 hover:border-b-4 border-purple-800"
        >
          <div>
            <h2 className="font-Inter text-black">About us</h2>
          </div>
        </a>
        
      </div>
      <div id="avatar" className="w-16 h-16">
        <img src={user} alt="Logo" />
      </div>
    </div>
  );
};

export default Nav_Section;
