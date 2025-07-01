import "../styles/global.css";
import "../styles/welcome.css";
import { WelcomeProps } from "../types/animation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense, useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

function Welcome({ theme, setTheme }: WelcomeProps) {
  const barControls = useAnimation();
  const [isUp, setIsUp] = useState(false);
  const Profile = lazy(() => import("../assets/components/Profile"));
  const CardProjects = lazy(() => import("../assets/components/CardProjects"));
  const Formulaire = lazy(() => import("../assets/components/Formulaire"));

  useEffect(() => {
    // Title
    const split = new SplitType(".title", { types: "chars" });
    const chars = document.querySelectorAll(".char");
    gsap.set(chars, { opacity: 0, y: 20 });
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
    });
    return () => {
      split.revert();
    };
  }, []);

  const handleClickAnimation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    document
      .getElementById("s-animation")
      ?.scrollIntoView({ behavior: "smooth" });
    setIsUp(!isUp);
  };

  const [barRef, barInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const isMobile = window.innerWidth <= 430;
    if (isMobile) {
      barControls.start("visible");
    } else {
      if (barInView) {
        barControls.start("visible");
      } else {
        barControls.start("hidden");
      }
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

  useEffect(() => {
    const content = document.querySelector(".ticker-content");
    if (content) {
      gsap.to(content, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <main id={theme}>
      <h1 className="title">
        Welcome
        <br /> to my portfolio
      </h1>
      <button
        className="scroll-indicator"
        onClick={(e) => handleClickAnimation(e)}
      >
        <span>V</span>
      </button>
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
          <a aria-label="Aller à la section Profil" id="scroll1" href="#profil">
            <div>-</div>
          </a>
          <a
            aria-label="Aller à la section Projets"
            id="scroll2"
            href="#projects"
          >
            <div>-</div>
          </a>
          <a
            aria-label="Aller à la section Formulaire"
            id="scroll3"
            href="#formulaire"
          >
            <div>-</div>
          </a>
        </section>
      </section>
      <motion.header
        ref={barRef}
        variants={barVariants}
        initial="hidden"
        animate={barControls}
        className="scroll-box"
      >
        <div className="stock-ticker">
          <div className="ticker-content">
            <ul>
              <li>Je suis disponible 🟢</li>
              <li>En recherche d'alternance 👨🏻‍💻</li>
              <li>Mastère lead développeur 👨🏻‍🎓</li>
            </ul>
            <ul>
              <li>Je suis disponible 🟢</li>
              <li>En recherche d'alternance 👨🏻‍💻</li>
              <li>Mastère lead développeur 👨🏻‍🎓</li>
            </ul>
          </div>
        </div>
      </motion.header>
      <section
        id="profil"
        className={`container-section-profil ${isUp ? "up" : ""}`}
      >
        <section id="s-animation">.</section>
        <h2>Profil</h2>
        <section className="second-ligne-profil">.</section>
      </section>
      <Suspense fallback={<p>Chargement...</p>}>
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
      </Suspense>
    </main>
  );
}

export default Welcome;
