import { useAnimation, motion } from "framer-motion";
import "../../styles/profile.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Profile() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleDownload = (event: React.MouseEvent) => {
    event.preventDefault();

    const userConfirmed = window.confirm("Voulez-vous télécharger le CV ?");

    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = "/images/CV-3.pdf";
      link.download = "CV.pdf";
      link.click();
    } else {
      alert("Téléchargement annulé.");
    }
  };

  return (
    <>
      <section className="container-profil">
        <picture>
          <img
            src="images/photo-profile.jpg"
            alt="Une personne sur une place"
            loading="lazy"
          />
        </picture>
        <section className="container-text-profil">
          <h2>Timothé Renard</h2>
          <p>
            Développeur Web Full Stack
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Recherche
            Alternance
          </p>
          <p>
            Passionné d'informatique depuis mon plus jeune âge, j’ai récemment
            suivi une formation intensive de 5 mois (équivalent Bac +2)
            Développeur web Full Stack. <br /> <br /> Cette expérience a été une
            véritable révélation : j’ai découvert à quel point j’aimais créer,
            explorer de nouvelles façons de coder et apprendre continuellement
            de nouvelles technologies.
            <br />
            <br />
            Après avoir validé ma certification j'ai souhaité continuer à
            progresser et acquérir de nouvelles compétences. <br /> <br /> j’ai
            donc choisi d’intégrer un Mastère Lead Développeur Front-End à
            partir de septembre 2025 pour une durée de deux ans en alternance.
            <br /> <br /> Je cherche une entreprise prête à m’accueillir en
            alternance, où je pourrai monter en compétences, contribuer
            concrètement aux projets et relever des défis au quotidien.
          </p>
          <motion.section
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="container-link"
          >
            <motion.a
              variants={itemVariants}
              onClick={handleDownload}
              href="/images/CV-3.pdf"
              download="CV"
              id="link1"
            >
              <img src="images/cv.jpg" alt="images de cv " />
            </motion.a>
            <motion.a
              variants={itemVariants}
              target="_blanck"
              id="link2"
              href="https://github.com/FarCodeFR"
            >
              <img src="images/GitHub.png" alt="images de github" />
            </motion.a>
            <motion.a
              variants={itemVariants}
              target="_blanck"
              id="link3"
              href="https://www.linkedin.com/in/timoth%C3%A9-renard-a686072b4/"
            >
              <img src="images/Linkedin.png" alt="images de linkedin" />
            </motion.a>
            <motion.a
              variants={itemVariants}
              target="_blanck"
              id="link4"
              href="mailto:Timothe-44@hotmail.fr"
            >
              <img src="images/mail.jpg" alt="images de mail" />
            </motion.a>
          </motion.section>
        </section>
      </section>
    </>
  );
}

export default Profile;
