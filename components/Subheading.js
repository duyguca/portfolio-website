import React from "react";

function Subheading({ children }) {
  return (
    <h2 className="border-l border-purple-500 text-2xl px-2 tracking-wider  text-gray-200 dark:text-gray-900   ">
      {children}
    </h2>
  );
}

export default Subheading;
