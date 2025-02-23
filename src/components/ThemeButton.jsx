import  { useState } from "react";
import { assets } from "../assets/assets.js";

const ThemeButton = ({ mode, set }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTheme = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150); // Ensures animation runs smoothly
    set(mode === "theme-dark" ? "theme-light" : "theme-dark");
  };

  return (
    <div>
      <button
        className="p-4 text-xl hover:bg-gray-400/30 w-16"
        onClick={handleTheme}
      >
        {mode === "theme-light" ? (
          <img
            className={`transition-transform duration-200 ${
              isAnimating ? "scale-0 rotate-180" : ""
            }`}
            src={assets.sun_light}
            alt="Sun Icon"
          />
        ) : (
          <i
            className={`fa-solid fa-moon transition-transform duration-200 ${
              isAnimating ? "scale-0 rotate-180" : ""
            }`}
          ></i>
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
