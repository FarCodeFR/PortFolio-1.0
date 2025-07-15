import "../../styles/card.css";
import data from "../../mocks/apiCardsProjects.json";
import { useEffect, useState } from "react";
import CardItem from "./CardItem";

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
