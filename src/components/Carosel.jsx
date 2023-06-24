import React, { useState } from "react";

import a from "../assets/a.svg";
import b from "../assets/b.svg";
import c from "../assets/c.svg";
import d from "../assets/d.svg";
import e from "../assets/e.svg";
import f from "../assets/f.svg";
import g from "../assets/g.svg";
{
  /* <div id="slides"><img src={b} alt="" className="w-2/5 mx-1" /></div>
<div id="slides"><img src={c} alt="" className="w-2/5 mx-1" /></div>
<div id="slides"><img src={d} alt="" className="w-2/5 mx-1" /></div>
<div id="slides"><img src={e} alt="" className="w-2/5 mx-1" /></div>
<div id="slides"><img src={f} alt="" className="w-2/5 mx-1" /></div>
<div id="slides"><img src={g} alt="" className="w-2/5 mx-1" /></div> */
}

const Carosel = () => {
  const [images, setImages] = useState([a, b, c, d, e, f, g]);

  return (
    <div className="relative w-full h-96">
      <div className="absolute mt-[-10]  w-full h-96 rounded rounded-bl-full rounded-br-full  z-5 bg-gray-400"></div>
      <div className="flex w-full overflow-x-auto hide-scrollbar">
        <div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 1" className="object-cover w-full h-full" />
        </div>
        <div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 2" className="object-cover w-full h-full" />
        </div>
        <div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 3" className="object-cover w-full h-full" />
        </div><div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 3" className="object-cover w-full h-full" />
        </div><div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 3" className="object-cover w-full h-full" />
        </div><div className="flex-none w-1/5 h-64 mr-4">
          <img src={a} alt="Image 3" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="w-screen"></div>
    </div>
  );
};

export default Carosel;
