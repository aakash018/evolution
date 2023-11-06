import React, { useContext, useRef } from "react";
import "../styles/introPage.scss";
import { motion } from "framer-motion";
import { ThemeStateContext } from "../App";
interface containerRef {
  containerRef: React.RefObject<HTMLDivElement>;
}

const IntroPage: React.FC<containerRef> = ({ containerRef }) => {
  const introduction_1 =
    "Explore the remarkable innovations that propelled humanity forward,from fire's warmth to AI's intelligence.";
  const introduction_2 = " Let's begin our journey";
  const ref = useRef<HTMLDivElement>(null);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
        duration: 1,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };
  const [theme] = useContext(ThemeStateContext);
  return (
    <div
      className={`introPage ${theme === "light" ? "light-theme" : ""}`}
      ref={ref}
    >
      <motion.div
        variants={sentence}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: containerRef, once: true }}
      >
        {introduction_1.split(" ").map((word, i) => (
          <motion.span key={i} variants={letter}>
            {" "}
            {word}
          </motion.span>
        ))}
        <br />
        {introduction_2.split(" ").map((word, i) => (
          <motion.span key={i} variants={letter}>
            {" "}
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroPage;
