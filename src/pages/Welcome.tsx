import "../styles/global.css";
import "../styles/welcome.css";
import { WelcomeProps } from "../types/animation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Profile = lazy(() => import("../assets/components/Profile"));
const CardProjects = lazy(() => import("../assets/components/CardProjects"));
const Formulaire = lazy(() => import("../assets/components/Formulaire"));

function Welcome({ theme, setTheme }: WelcomeProps) {
  const barControls = useAnimation();

  // Automatically scroll to the top of the page on initial load
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  // GSAP animation for the title
  useEffect(() => {
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

  // useEffect(() => {
  //   if (window.location.hash) {
  //     history.replaceState(
  //       null,
  //       "",
  //       window.location.pathname + window.location.search
  //     );
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

  //  Smooth scroll to a section by ID
  const handleClickAnimation = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [barRef, barInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Control animation visibility of the info bar for mobile et desktop
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

  // Animation states for the info bar
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
  // Animation to scroll continuously
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
        onClick={() => handleClickAnimation("profil")}
      >
        V
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
      <section id="profil" className={`container-section-profil`}>
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
