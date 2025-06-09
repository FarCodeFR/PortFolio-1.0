import "../../styles/card.css";
import data from "../../mocks/apiCardsProjects.json";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function CardItem({ el, direction }: { direction: number; el: any }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  const variants = {
    hidden: {
      opacity: 0,
      x: direction * 100,
      rotate: 10,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      id={el.title}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="container-card-projects"
    >
      <section>
        <h2>{el.name}</h2>
      </section>

      <section className="container-card-titre">
        <h3>
          <a
            target="_blank"
            className="link-card"
            href={el.info}
            rel="noopener noreferrer"
          >
            {el.title}
          </a>
        </h3>
        <h3>
          <a target="_blank" href={el.link} rel="noopener noreferrer">
            Voir plus
          </a>
        </h3>
      </section>

      <picture>
        <img src={el.image} alt={el.alt} />
      </picture>
    </motion.section>
  );
}

function CardProjects() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && scrollDirection !== "down") {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY && scrollDirection !== "up") {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <section className="container-placement-cards">
      {data.map((el) => {
        return (
          <CardItem
            key={el.id}
            el={el}
            direction={scrollDirection === "down" ? 1 : -1}
          />
        );
      })}
    </section>
  );
}

export default CardProjects;
