import React, { useContext } from "react";
import { ThemeContext } from "../Context";
import { HiOutlineSun, HiMoon } from "react-icons/hi";
import s from "./index.module.scss";

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${s.switcher} ${darkMode ? s.dark : ""}`} onClick={toggleTheme}>
      <HiOutlineSun className={s.iconLeft} />
      <div className={s.slider}></div>
      <HiMoon className={s.iconRight} />
    </div>
  );
};

export default ThemeSwitcher;
