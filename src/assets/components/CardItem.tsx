import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CardItem({ el }: { direction: number; el: any }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
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

export default CardItem;
