import "./styles/global.css";
import "./styles/welcome.css";
import Animation from "./assets/components/Animation";
import { useEffect, useState } from "react";
import { ThemeType } from "./types/animation";
import Welcome from "./pages/Welcome";

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
      <Welcome theme={theme} setTheme={setTheme} />
    </main>
  );
}

export default Home;
