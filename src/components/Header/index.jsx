import React, { useState, useEffect } from "react";
import s from "./index.module.scss";
import { smoothScroll } from "../../utils/smoothScroll";
import ThemeSwitcher from "../Theme_Switch";
import { useTranslation } from "react-i18next";

const sections = ["about", "skills", "projects", "timeline", "contact"];

const Header = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let current = sections[0];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    }
    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    smoothScroll(id);
    setMenuOpen(false);
  };

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <header className={s.header}>
      {/* Бургер */}
      <div
        className={`${s.burger} ${menuOpen ? s.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Навигация */}
      <nav className={`${s.nav} ${menuOpen ? s.open : ""}`}>
        <ul>
          {sections.map((sec) => (
            <li key={sec}>
              <button
                onClick={() => handleNavClick(sec)}
                className={activeSection === sec ? s.active : ""}
              >
                {t(`sections.${sec}`)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Свитчи языка и темы */}
      <div className={s.switches}>
        <button onClick={() => changeLanguage("en")}>EN</button>|
        <button onClick={() => changeLanguage("de")}>DE</button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
