import "./styles/global.css";
import "./styles/welcome.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { ThemeType } from "./types/animation";
import Welcome from "./pages/Welcome";

function Home() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "Light" || saved === "Dark" ? saved : "Light";
  });

  const Animation = lazy(() => import("./assets/components/Animation"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <Suspense fallback={<p>Chargement...</p>}>
        <Animation theme={theme} />
      </Suspense>
      <Welcome theme={theme} setTheme={setTheme} />
    </main>
  );
}

export default Home;
