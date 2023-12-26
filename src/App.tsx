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
import GlassInfoHolder from "./components/shared/GlassInfoHolder";

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

  const [showIntroModal, setShowIntroModal] = useState(true);

  return (
    <>
      {showIntroModal && (
        <div className="intro-info-modal">
          <div className="intro-info-modal__container">
            <GlassInfoHolder>
              <div className="intro-info-modal__container_title">WELCOME</div>
              <div className="intro-info-modal__container_content">
                <p>
                  Explore the captivating journey of human innovation, from
                  ancient discoveries like fire to modern marvels such as
                  artificial intelligence, on our immersive website showcasing
                  the evolution of groundbreaking inventions that shaped our
                  world.
                </p>
                <br />
                <p>
                  Scroll or just press space for easy navigation between
                  sections.
                  <br /> Hover around each title like "FIRE" or "FRAMING" and
                  scroll down to expand it.
                </p>
                <br />
                <p>
                  Note that there is a small bug with animation at Farming
                  section of page for Chrome and other Chromium based system.Use
                  FireFox for best experience.
                </p>
                <section
                  className="intro-info-modal__container_content_btn"
                  onClick={() => {
                    document.body.requestFullscreen();
                    setShowIntroModal(false);
                  }}
                >
                  Continue
                </section>
              </div>
            </GlassInfoHolder>
          </div>
        </div>
      )}
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
    </>
  );
}

export default App;
