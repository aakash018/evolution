import React, { useContext } from "react";
import "../styles/moon.scss";
import { ThemeStateContext } from "../App";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  moonRef: React.RefObject<HTMLDivElement>;
}

const Moon: React.FC<Props> = ({ moonRef }) => {
  const [theme, setTheme] = useContext(ThemeStateContext);

  const toggleTheme = () => {
    setTheme("light");
  };

  return (
    <>
      <AnimatePresence>
        {theme === "dark" && (
          <motion.div
            className="moon"
            onClick={toggleTheme}
            animate={{
              x: [100, 0],
              y: [100, 0],
              transition: { duration: 3 },
            }}
            exit={{
              x: [0, 200],
              y: [0, 150],
              opacity: [1, 1, 0],
              transition: { duration: 2 },
            }}
          >
            <div className="moon__main" ref={moonRef}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Moon;
