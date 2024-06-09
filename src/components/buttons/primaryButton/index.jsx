import React from "react";

function PrimaryButton({ icon, text, link }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md py-2 px-4 flex items-center gap-2 md:text-md lg:text-lg cursor-pointer text-white font-medium bg-teal-600"
    >
      {icon}
      {text}
    </button>
  );
}

export default PrimaryButton;
