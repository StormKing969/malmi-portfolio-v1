import Image from "next/image";
import React from "react";

interface HeroProps {
  class_name: String;
  ToggleFadeOut: boolean;
}

const Hero = ({ class_name, ToggleFadeOut }: HeroProps) => {
  return (
    <section
      className={
        class_name === "home" && !ToggleFadeOut
          ? "home-section active"
          : "home-section fade-out"
      }
      id="home"
    >
      <div className="container">
        <div className="row">
          <div className="home-text">
            <p>Hello, I&apos;m</p>
            <h1>Malmi</h1>
            <h2>An upcoming college graduate</h2>
            <a href="#" className="btn">
              About Me
            </a>
            <a href="#" className="btn">
              Portfolio
            </a>
          </div>

          <div className="home-img">
            <div className="img-box">
              <Image
                src="/profile.jpg"
                className="profile-pic"
                alt="Malmi's Pic"
                width={360}
                height={360}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
