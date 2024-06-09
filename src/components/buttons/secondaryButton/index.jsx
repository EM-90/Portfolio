import React from "react";

function SecondaryButton({ icon, text, link }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md py-2 px-4 flex items-center md:text-md lg:text-lg gap-2 text-white font-medium bg-blue-600 cursor-pointer"
    >
      {icon}
      {text}
    </button>
  );
}

export default SecondaryButton;
