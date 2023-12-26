import { useRef, useState } from "react";
import "../../styles/pages/press.scss";
import { motion, useScroll, useTransform } from "framer-motion";

import PaperDragTiles from "../shared/PaperDragTiles";
import inventorImg from "../../assets/press/Gr.diana_Johannes_Gutenberg-removebg-preview.png";
import steamPressImg from "../../assets/press/141201kba-removebg-preview.png";
import modernPressIg from "../../assets/press/Screen-Shot-2020-12-02-at-3.49.25-PM-e1606942307506-removebg-preview.png";

const animation_order = {
  initial: 0,
  introTextStay: 0.3,
  introTextExit: 0.5,
};

const Press: React.FC = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  const [showTile1, setShowTile1] = useState(false);
  const [showTile2, setShowTile2] = useState(false);
  const [showTile3, setShowTile3] = useState(false);
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
        PRESS
      </motion.div>
      <div className="press__content">
        <div className="press__content_paperHolder">
          <PaperDragTiles
            text="Introduction of computer-to-plate technology
             and digital printing allowed for direct printing
              from electronic files, reducing setup time and costs.
            Advancements in digital printing, including inkjet and 
            laser printing, enabled on-demand printing and personalization of materials."
            image={modernPressIg}
            style={{
              transform: `${showTile1 ? "rotate(0deg)" : "rotate(2deg)"}`,
              opacity: `${showTile1 ? "1" : "0.6"}`,
            }}
            setNextTileShown={setShowTile3}
          />
          <PaperDragTiles
            text="In the late 18th and 19th centuries, steam-powered
             printing presses were developed, greatly increasing
              the speed and volume of printing.The introduction of rotary 
              presses and lithography techniques further streamlined the
               printing process, enabling higher-quality images and illustrations."
            setNextTileShown={setShowTile1}
            image={steamPressImg}
            style={{
              transform: `${showTile2 ? "rotate(0deg)" : "rotate(-2deg)"}`,
              opacity: `${showTile2 ? "1" : "0.6"}`,
            }}
          />
          <PaperDragTiles
            text="Johannes Gutenberg, a German inventor, introduced the
             movable-type printing press around 1440. This invention
              revolutionized the distribution of information by enabling
               the mass production of books and printed materials."
            setNextTileShown={setShowTile2}
            image={inventorImg}
          />
          <div
            style={{
              // transform: `${showTile2 ? "rotate(0deg)" : "rotate(-2deg)"}`,
              opacity: `${showTile3 ? "1" : "0"}`,
              transition: "all 0.3s ease-in",
              textAlign: "center",
              fontSize: "1.3rem",
            }}
          >
            In essence, the printing press stands as an unparalleled catalyst
            that reshaped societies, empowered the masses with knowledge, and
            forever altered the course of human history.
            <br />
            Keep exploring humanity's inventive odyssey by scrolling down."
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
