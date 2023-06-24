import React from "react";


const Hero_Section = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-auto mt-5 ">
      <div className="text-black text-5xl font-kalam italic">
        Interior Design make relax
      </div>
      <div className="text-black text-xl font-kalam mt-10">
        Design is the
        <div className="ml-10 text-purple-700 font-bold">
  First Impression!
</div>
        Impress your clients with our designs
      </div>

      <div>
        <button className="px-4 py-2 bg-purple-300 rounded-lg my-5">Discover</button>
      </div>
    </div>
  );
};

export default Hero_Section;
