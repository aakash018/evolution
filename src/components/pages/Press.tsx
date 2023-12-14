import { useRef } from "react";
import "../../styles/pages/press.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const animation_order = {
  initial: 0,
  introTextStay: 0.05,
  introTextExit: 0.1,
};

const Press: React.FC = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: holderRef,
  });

  const introTextExit = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.introTextStay,
      animation_order.introTextExit,
    ],
    [1, 1, 0]
  );

  return (
    <div className="press default-page" ref={holderRef}>
      <motion.div
        className="page-title title"
        style={{ opacity: introTextExit }}
      >
        Press
      </motion.div>
      <div className="press__content">
        <div className="press__content_paperHolder"></div>
      </div>
    </div>
  );
};

export default Press;
