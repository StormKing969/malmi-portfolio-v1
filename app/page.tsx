"use client";

import { useState } from "react";

import PageLoader from "@/components/PageLoader";
import BackgroundPics from "@/components/BackgroundPics";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";

import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../components/styles/styles.css";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string>("home");
  const [isActive, setIsActive] = useState(false);

  return (
    <main className={styles.main}>
      {/* <PageLoader /> */}
      <BackgroundPics />
      <Header
        setSelectedSection={setSelectedSection}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <Hero
        setSelectedSection={setSelectedSection}
        class_name={selectedSection}
        ToggleFadeOut={isActive}
      />
      <About
        setSelectedSection={setSelectedSection}
        class_name={selectedSection}
        ToggleFadeOut={isActive}
      />
      <ContactMe class_name={selectedSection} ToggleFadeOut={isActive} />
    </main>
  );
}
