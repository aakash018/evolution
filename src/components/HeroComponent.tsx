import React, { useContext } from "react";
import "../styles/heroComponent.scss";
import { motion } from "framer-motion";
import fogImg from "../assets/image-from-rawpixel-id-12479983-original(1).png";
import cloudesImages from "../assets/cloud-png-transparent-1.png";

import { ThemeStateContext } from "../App";
const HeroComponent: React.FC = () => {
  const [theme] = useContext(ThemeStateContext);

  const titleArray = Array.from("EVOLUTION");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { staggerChildren: 0.03 },
    },
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 2.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
    },
  };
  return (
    <div className="hero_component" style={{ pointerEvents: "none" }}>
      {theme === "dark" && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 2, duration: 3 }}
        >
          <motion.img
            className="fogImage"
            src={fogImg}
            width={"120%"}
            height={"100%"}
            style={{ opacity: "0.2", marginTop: "-150px" }}
            animate={{ x: [0, -200] }}
            transition={{
              repeat: Infinity,
              duration: 90,
              repeatType: "mirror",
            }}
          />
        </motion.div>
      )}

      {theme === "light" && (
        <>
          <div className="birds">
            <motion.div
              animate={{
                x: [-90, 2000],
                transition: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 5,
                },
              }}
              className="bird"
            ></motion.div>
            <motion.div
              className="bird"
              initial={{ y: -10, scale: 0.5 }}
              animate={{
                x: [-90, 1500],
                transition: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 10,
                },
              }}
            ></motion.div>
          </div>
        </>
      )}

      {theme === "light" && (
        <div className="cloud">
          <motion.img
            src={cloudesImages}
            width={800}
            height={400}
            style={{ opacity: 0.8, marginTop: "200px" }}
            animate={{
              x: ["170%", "-100%"],
              transition: {
                duration: 150,
                repeatType: "loop",
                repeat: Infinity,
              },
            }}
          />
        </div>
      )}

      {theme === "dark" && (
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      )}
      {theme === "dark" && (
        <div>
          <div className="meteor meteor-1"></div>
          <div className="meteor meteor-2"></div>
          <div className="meteor meteor-3"></div>
          <div className="meteor meteor-4"></div>
          <div className="meteor meteor-5"></div>
        </div>
      )}
      <div className="content">
        <motion.div
          style={{ overflow: "hidden", display: "flex" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {titleArray.map((letter, index) => (
            <motion.span variants={child} key={index} className="title">
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="subs"
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ delay: 1, duration: 1.5, type: "spring" }}
        >
          Charting the Journey of Humanity Through Time
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponent;
