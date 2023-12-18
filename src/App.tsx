import { createContext, useEffect, useRef, useState } from "react";
import "./App.scss";
import Cursor from "./components/Cursor";
import HeroComponent from "./components/HeroComponent";
import Moon from "./components/Moon";
import Sun from "./components/Sun";
import IntroPage from "./components/IntroPage";
import Fire from "./components/pages/Fire";
import Agriculture from "./components/pages/Agriculture";
import Wheel from "./components/pages/Wheel";
import Press from "./components/pages/Press";
import Electricity from "./components/pages/Electricity";

export const ThemeStateContext = createContext<any>(null);

function App() {
  const moon = useRef<HTMLDivElement>(null);
  const sun = useRef<HTMLDivElement>(null);
  const [themeState, setThemeState] = useState<"light" | "dark">("dark");

  const wheelPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (themeState === "light") {
      document.documentElement.style.setProperty("--bg-color", "#87CEEB");
      document.documentElement.style.setProperty("--cursor-color", "black");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--page-color", "white");
    }
    if (themeState === "dark") {
      document.documentElement.style.setProperty("--bg-color", "#03030a");
      document.documentElement.style.setProperty("--page-color", "#03030a");
      document.documentElement.style.setProperty("--cursor-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#fff");
    }
  }, [themeState]);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.focus();
    }
  }, [mainContainerRef]);

  return (
    <ThemeStateContext.Provider value={[themeState, setThemeState]}>
      <Cursor moonRef={moon} />
      <div>
        <div className="mainPages" ref={mainContainerRef}>
          <div>
            <div className="moon_container">
              <Moon moonRef={moon} />
            </div>
            <div className="sun_container">
              <Sun sunRef={sun} />
            </div>
            <HeroComponent />
          </div>
          <div>
            <IntroPage containerRef={mainContainerRef} />
          </div>
          <Fire containerRef={mainContainerRef} />
          <Agriculture nextContainerRef={wheelPageRef} />
          <Wheel pageRef={wheelPageRef} />
          <Press />
          <Electricity />
        </div>
      </div>
    </ThemeStateContext.Provider>
  );
}

export default App;
