import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  holderRef: React.RefObject<HTMLDivElement>;
  text: string;
  initial: number;
  introTextFadeAway: number;
}
const PageTitle: React.FC<Props> = ({
  containerRef,
  text,
  holderRef,
  initial,
  introTextFadeAway,
}) => {
  const { scrollYProgress } = useScroll({
    container: holderRef,
  });
  const fire_opacity = useTransform(
    scrollYProgress,
    [initial, introTextFadeAway],
    [1, 0]
  );

  return (
    <>
      <motion.div
        className="agriculture__title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
        viewport={{ root: containerRef, once: true }}
        style={{
          opacity: fire_opacity,
          width: "100%",
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <span className="page-title">{text}</span>
      </motion.div>
    </>
  );
};

export default PageTitle;
