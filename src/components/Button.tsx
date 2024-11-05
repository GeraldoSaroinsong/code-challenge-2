"use client";

import React from "react";

interface IButton {
  title: string;
}

const Button: React.FC<IButton> = ({ title }) => {
  return (
    <button
      type="button"
      className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-md transition duration-200 hover:bg-gray-600"
    >
      {title}
    </button>
  );
};
export default Button;
