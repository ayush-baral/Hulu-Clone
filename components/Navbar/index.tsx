import React from "react";
import request from "../../utils/request";

const Navbar = () => {
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text:2xl whitespace-nowrap space-x-10 sm:x-20 overflow-x-scroll hide-scrollbar">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              className="last:pr-24 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
