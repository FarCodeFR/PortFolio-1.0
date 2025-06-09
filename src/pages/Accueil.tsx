import "../styles/global.css";
import "../styles/global.css";
import Profile from "../assets/components/Profile";
import CardProjects from "../assets/components/CardProjects";
import Formulaire from "../assets/components/Formulaire";
import { AccueilProps } from "../types/animation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

function Accueil({ theme, setTheme }: AccueilProps) {
  const barControls = useAnimation();

  useEffect(() => {
    const split = new SplitType(".title p", { types: "chars" });
    const chars = document.querySelectorAll(".char");

    gsap.set(chars, { opacity: 0, y: 20 });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  const [barRef, barInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (barInView) {
      barControls.start("visible");
    } else {
      barControls.start("hidden");
    }
  }, [barInView, barControls]);

  const barVariants = {
    hidden: { opacity: 0, scaleX: 0, originX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
    <main id={theme}>
      <div className="container-title">
        <div className="title">
          <p>Welcome</p>
          <p>to my portfolio</p>
          <p>Timothé</p>
        </div>
      </div>
      <section className="container-toggle">
        <label htmlFor="theme-toggle" className="toggle-switch">
          <input
            id="theme-toggle"
            onChange={(e) => {
              setTheme(e.target.checked ? "Light" : "Dark");
            }}
            type="checkbox"
            checked={theme === "Light"}
          />
          <span className="slider">&nbsp;</span>
        </label>
      </section>
      <section className="scroll-list">
        <section>
          <a aria-label="Aller à la section Profil" href="#profil">
            <div id="scroll1">-</div>
          </a>
          <a aria-label="Aller à la section Projets" href="#projects">
            <div id="scroll2">-</div>
          </a>
          <a aria-label="Aller à la section Formulaire" href="#formulaire">
            <div id="scroll3">-</div>
          </a>
        </section>
      </section>
      <motion.header
        ref={barRef}
        variants={barVariants}
        initial="hidden"
        animate={barControls}
        className="scroll-box"
      ></motion.header>
      <section id="profil" className="container-section-profil">
        <section>.</section>
        <h2>Profil</h2>
        <section className="second-ligne-profil">.</section>
      </section>
      <Profile />
      <section id="projects" className="container-section-projects">
        <h2>Projets</h2>
        <section>.</section>
        <section className="second-ligne-projects">.</section>
      </section>
      <CardProjects />
      <section id="formulaire" className="container-section-formulaire">
        <section>.</section>
        <h2>Formulaire</h2>
        <section className="second-ligne-formulaire">.</section>
      </section>
      <Formulaire />
    </main>
  );
}

export default Accueil;
