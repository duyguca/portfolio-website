import React from "react";

function TabButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-sm sm:text-xl font-semibold hover:text-white dark:text-gray-700 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton;
