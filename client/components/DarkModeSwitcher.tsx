"use client";

import { useState } from "react";

const DarkModeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`w-14 h-[1.875rem] rounded-[2rem] ${isDark ? "bg-graydark" : "bg-[#E2E8F0]"} mr-7 relative cursor-pointer duration-300 ease-in-out`} onClick={() => setIsDark(!isDark)}>
      <div
        className={`w-6 h-6 rounded-full absolute top-[0.1875rem] ${isDark ? "left-[1.8125rem]" : "left-[0.1875rem]"} bg-white bg-center bg-no-repeat ${
          isDark ? "bg-moon" : "bg-sun"
        } shadow-switcher duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default DarkModeSwitcher;
