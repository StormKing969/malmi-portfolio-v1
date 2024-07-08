"use client";

import { useState, useEffect } from "react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <PageLoader />;
  }

  return (
    <main className={styles.main}>
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
