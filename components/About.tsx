"use client";

import Image from "next/image";
import React, { useState, Dispatch, SetStateAction } from "react";
import TimelineCard from "./TimelineCard";
import { personalDescription, skillList } from "@/data";

interface AboutProps {
  class_name: String;
  ToggleFadeOut: boolean;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}

const About = ({
  class_name,
  ToggleFadeOut,
  setSelectedSection,
}: AboutProps) => {
  const [selectedTab, setSelectedTab] = useState("education");
  const [isActive, setIsActive] = useState(true);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsActive(!isActive);
  };

  const handleLinkClick = (section: string) => {
    setSelectedSection(section);
  };

  const skills = skillList.map((skill, index) => (
    <div key={index} className="skill-item">
      {skill}
    </div>
  ));

  return (
    <section
      className={
        class_name === "about" && !ToggleFadeOut
          ? "about-section active"
          : "about-section fade-out"
      }
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="row about-wrapper">
          <div className="about-text">
            <p>{personalDescription}</p>
            <h3>Skills</h3>

            <div className="skills">{skills}</div>

            <div className="about-tabs">
              <button
                className={isActive ? "active tab-item" : "tab-item"}
                type="button"
                data-target="#education"
                onClick={() => handleTabClick("education")}
              >
                Education
              </button>
              <button
                className={isActive ? "tab-item" : "active tab-item"}
                type="button"
                data-target="#experience"
                onClick={() => handleTabClick("experience")}
              >
                Experience
              </button>
            </div>

            <TimelineCard id={selectedTab} />

            <a href="./CV.pdf" className="btn" download="Malmi's CV">
              Download CV
            </a>
            <a
              href="#contact"
              className="btn"
              onClick={() => handleLinkClick("contact")}
            >
              Reach Out
            </a>
          </div>

          <div className="about-img">
            <div className="img-box">
              <Image src="/about.JPG" alt="About Me" width={380} height={700} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
