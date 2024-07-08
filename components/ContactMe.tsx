import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

interface ContactMeProps {
  class_name: String;
  ToggleFadeOut: boolean;
}

const ContactMe = ({ class_name, ToggleFadeOut }: ContactMeProps) => {
  return (
    <section
      className={
        class_name === "contact" && !ToggleFadeOut
          ? "contact-section active"
          : "contact-section fade-out"
      }
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="row contact-wrapper">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-control"
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>

                <div className="input-group">
                  <textarea
                    placeholder="Message"
                    className="input-control"
                    required
                  />
                </div>

                <div className="submit-btn">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <h3>My Email Address</h3>
              <p>aluthgemalmi@gmail.com</p>
            </div>

            <div className="contact-info-item">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/malmi.bhagya.7"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="https://www.instagram.com/malmiii14/" target="_blank">
                  <FontAwesomeIcon icon={faSquareInstagram} size="lg" />
                </a>
                <a href="https://www.tiktok.com/@mash1415" target="_blank">
                  <FontAwesomeIcon icon={faTiktok} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
