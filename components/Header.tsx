"use client";

import React, { Dispatch, SetStateAction } from "react";

const Header = ({
  setSelectedSection,
  setIsActive,
  isActive,
}: {
  setSelectedSection: Dispatch<SetStateAction<string>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
}) => {
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (section: string) => {
    setSelectedSection(section);
    toggleNav();
  };

  return (
    <header className="header">
      <div className="container">
        <div
          className={
            isActive ? "row header-wrapper active" : "row header-wrapper"
          }
        >
          <button
            type="button"
            className="nav-toggler"
            onClick={() => toggleNav()}
            aria-label="Toggle Navigation"
            aria-expanded={isActive}
          >
            <span></span>
          </button>

          <nav className={isActive ? "nav active" : "nav nav-visibility"}>
            <div className="nav-inner">
              <ul>
                <li onClick={() => handleLinkClick("home")}>
                  <a href="#" className="nav-items">
                    Home
                  </a>
                </li>
                <li onClick={() => handleLinkClick("about")}>
                  <a href="#about" className="nav-items">
                    About
                  </a>
                </li>
                <li onClick={() => handleLinkClick("contact")}>
                  <a href="#contact" className="nav-items">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
