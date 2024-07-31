import classNames from "classnames";

import { FC, useEffect, useState } from "react";

import Button from "@generic/button";
import { ThemeT } from "@interfaces/generic";
import { MoonIcon, SunIcon } from "@assets/icons";

const Theme:FC = () => {
  // Function to get theme from localStorage or default to 'light'
  const getInitialTheme = () => {
    return (localStorage.getItem("theme") as ThemeT) || "light";
  };

  const [theme, setTheme] = useState<ThemeT>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      onClick={toggleTheme}
      className={classNames("border-none", {
        ["hover:bg-[#e1e3e6]"]: theme === "light",
        ["hover:bg-[#2D3748]"]: theme === "dark",
      })}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default Theme;
