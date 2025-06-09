import "./styles/global.css";
import "./styles/accueil.css";
import Accueil from "./pages/Accueil";
import Animation from "./assets/components/Animation";
import { useEffect, useState } from "react";
import { ThemeType } from "./types/animation";

function Home() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "Light" || saved === "Dark" ? saved : "Light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <Animation theme={theme} />
      <Accueil theme={theme} setTheme={setTheme} />
    </main>
  );
}

export default Home;
