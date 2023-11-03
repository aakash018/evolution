import React, { useContext } from "react";
import "../styles/sun.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeStateContext } from "../App";

interface Props {
  sunRef: React.RefObject<HTMLDivElement>;
}

const Sun: React.FC<Props> = ({ sunRef }) => {
  const [theme, setTheme] = useContext(ThemeStateContext);

  const toggleTheme = () => {
    setTheme("dark");
  };

  return (
    <>
      <AnimatePresence>
        {theme === "light" && (
          <motion.div
            className="sun"
            animate={{
              x: [-100, 0],
              y: [100, 0],
              transition: { duration: 3 },
            }}
            exit={{
              x: [0, -200],
              y: [0, 150],
              opacity: [1, 1, 0],
              transition: { duration: 2 },
            }}
            onClick={toggleTheme}
          >
            <div className="sun__main" ref={sunRef}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sun;
