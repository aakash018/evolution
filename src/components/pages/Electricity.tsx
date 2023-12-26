import React, { useRef } from "react";
import "../../styles/pages/electricity.scss";
import { MotionStyle, motion, useScroll, useTransform } from "framer-motion";

import thunder from "../../assets/electricity/thunder.png";
import GlassInfoHolder from "../shared/GlassInfoHolder";
import frankyu from "../../assets/electricity/franku.jpg";
import michele from "../../assets/electricity/michael.png";

import ThomasPic from "../../assets/electricity/default-PhotoRoom.png-PhotoRoom.png";
import TeslaPic from "../../assets/electricity/Tesla_circa_1890-PhotoRoom.png-PhotoRoom.png";

const animation_order = {
  initial: 0,
  introTextStay: 0.05,
  introTextExit: 0.09,
  bubblesIntro: 0.1,
  thunderIntro: 0.15,
  firstCardIntro: 0.17,
  firstCardFirstInfoStay: 0.2,
  firstCardFirstInfoExit: 0.25,
  firstCardSecondInfoIntro: 0.27,
  firstCardSecondInfoStay: 0.32,
  firstCardSecondInfoExit: 0.37,
  firstCardThirdInfoIntro: 0.4,
  firstCardThirdInfoStay: 0.45,
  firstCardThirdInfoExit: 0.5,
  firstCardFourthInfoIntro: 0.53,
  firstCardFourthInfoStay: 0.55,
  firstCardFourthInfoExit: 0.6,
  firstCardExit: 0.63,
  michelePhotoIntro: 0.65,
  micheleStay: 0.7,
  micheleExit: 0.75,
  nicolsIntro: 0.8,
  nicolosStay: 0.85,
  nicolosExit: 0.9,
  exitTextIntro: 1,
};

interface BubbleProps {
  style: MotionStyle;
}

const BackBubble: React.FC<BubbleProps> = ({ style }) => {
  return (
    <motion.div className="electricity__bg_bubble" style={style}></motion.div>
  );
};

const Electricity: React.FC = () => {
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

  const bubblesIntro = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.introTextStay,
      animation_order.bubblesIntro,
    ],
    [0, 0, 0.3]
  );

  const thunderIntro = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.bubblesIntro,
      animation_order.thunderIntro,
      animation_order.firstCardFourthInfoExit,
      animation_order.firstCardExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const firstCard_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.thunderIntro,
      animation_order.firstCardIntro,
      animation_order.firstCardFourthInfoExit,
      animation_order.firstCardExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const firstCard_x = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.thunderIntro,
      animation_order.firstCardIntro,
      animation_order.firstCardFourthInfoExit,
      animation_order.firstCardExit,
    ],
    [0, -10, 0, 0, -10]
  );

  const firstCardFirstInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardIntro,
      animation_order.firstCardFirstInfoStay,
      animation_order.firstCardFirstInfoExit,
    ],
    [0, 1, 1, 0]
  );

  const firstCardSecondInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardFirstInfoExit,
      animation_order.firstCardSecondInfoIntro,
      animation_order.firstCardSecondInfoStay,
      animation_order.firstCardSecondInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const firstCardThirdInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardSecondInfoExit,
      animation_order.firstCardThirdInfoIntro,
      animation_order.firstCardThirdInfoStay,
      animation_order.firstCardThirdInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const firstCardFourthInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardThirdInfoExit,
      animation_order.firstCardFourthInfoIntro,
      animation_order.firstCardFourthInfoStay,
      animation_order.firstCardFourthInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const michalPricture_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardFourthInfoExit,
      animation_order.michelePhotoIntro,
      animation_order.micheleStay,
      animation_order.micheleExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const michalInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardFourthInfoExit,
      animation_order.michelePhotoIntro,
      animation_order.micheleStay,
      animation_order.micheleExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const michalInfo_x = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.firstCardFourthInfoExit,
      animation_order.michelePhotoIntro,
      animation_order.micheleStay,
      animation_order.micheleExit,
    ],
    [20, 20, 0, 0, 20]
  );

  const nicolosInfo_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.micheleExit,
      animation_order.nicolsIntro,
      animation_order.nicolosStay,
      animation_order.nicolosExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const nicolosInfo_y = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.micheleExit,
      animation_order.nicolsIntro,
      animation_order.nicolosStay,
      animation_order.nicolosExit,
    ],
    [-20, -20, 0, 0, -20]
  );

  const exitText_opacity = useTransform(
    scrollYProgress,
    [
      animation_order.initial,
      animation_order.nicolosExit,
      animation_order.exitTextIntro,
    ],
    [0, 0, 1]
  );

  return (
    <div className="electricity " ref={holderRef}>
      <div className="electricity__wrapper">
        <div className="electricity__title_container">
          <BackBubble
            style={{
              width: 700,
              height: 700,
              top: -350,
              left: -350,
              opacity: bubblesIntro,
            }}
          />
          <BackBubble
            style={{
              width: 600,
              height: 600,
              bottom: -100,
              right: -380,
              opacity: bubblesIntro,
            }}
          />

          <motion.div
            className="electricity__title_container_page_title"
            style={{ fontSize: "10rem", opacity: introTextExit }}
          >
            <div className="electricity__title_container_page_title_container">
              <span className="blink_letter_front">ELE</span>CTR
              <span className="blink_letter_back">IC</span>ITY
            </div>
          </motion.div>

          <motion.div
            className="electricity__title_container_thunder"
            style={{ opacity: thunderIntro, width: "100vw" }}
          >
            <img
              src={thunder}
              alt="thunder"
              width="100%"
              height="100%"
              style={{ objectFit: "fill" }}
            />
          </motion.div>
          <motion.div
            style={{
              x: firstCard_x,
              opacity: firstCard_opacity,
              position: "absolute",
            }}
          >
            <GlassInfoHolder>
              <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                <div>
                  <img
                    src={frankyu}
                    alt="frank"
                    width={200}
                    height={200}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <div
                  style={{ width: "500px", position: "relative" }}
                  className="first_info_card"
                >
                  <motion.p
                    className="info_container"
                    style={{ opacity: firstCardFirstInfo_opacity }}
                  >
                    In June 1752, Franklin performed his kite experiment. He
                    constructed a kite by attaching a metal key to the kite's
                    string and used a silk handkerchief to serve as a sail. The
                    key was connected to a Leyden jar (a device for storing
                    static electricity) through a damp string.
                  </motion.p>
                  <motion.p
                    className="info_container"
                    style={{ opacity: firstCardSecondInfo_opacity }}
                  >
                    Franklin flew the kite during a thunderstorm while taking
                    precautions to avoid injury. He stood under a shelter,
                    holding a silk ribbon that acted as an insulator. As the
                    storm approached, the kite attracted electrical charge from
                    the atmosphere.
                  </motion.p>
                  <motion.p
                    className="info_container"
                    style={{ opacity: firstCardThirdInfo_opacity }}
                  >
                    As electricity accumulated in the Leyden jar, Franklin
                    observed the loose fibers of the string standing erect,
                    indicating the presence of electric charge. He also noted
                    sparks when he brought his knuckle close to the key,
                    demonstrating the transfer of electrical energy.
                  </motion.p>
                  <motion.p
                    className="info_container"
                    style={{ opacity: firstCardFourthInfo_opacity }}
                  >
                    Franklin's daring experiment helped solidify the
                    understanding of electricity, laying the groundwork for
                    future scientific investigations into electricity and its
                    applications in technology.
                  </motion.p>
                </div>
              </div>
            </GlassInfoHolder>
          </motion.div>
          <motion.div
            style={{
              position: "absolute",
              bottom: "0",
              left: 0,
              opacity: michalPricture_opacity,
            }}
          >
            <img src={michele} alt="michel" width={730} height={"auto"} />
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              right: 100,
              opacity: michalInfo_opacity,
              x: michalInfo_x,
            }}
          >
            <GlassInfoHolder>
              <div style={{ width: 400 }}>
                Michael Faraday's work on electromagnetic induction and
                Faraday's laws of electrolysis in the early 19th century laid
                the groundwork for understanding the relationship between
                electricity and magnetism.
              </div>
            </GlassInfoHolder>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              opacity: nicolosInfo_opacity,
            }}
          >
            <img src={ThomasPic} alt="Thomas" width={430} height={"auto"} />
          </motion.div>
          <motion.div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              opacity: nicolosInfo_opacity,
            }}
          >
            <img src={TeslaPic} alt="Thomas" width={430} height={"auto"} />
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              opacity: nicolosInfo_opacity,
              y: nicolosInfo_y,
            }}
          >
            <GlassInfoHolder>
              <div style={{ width: 400 }}>
                Thomas Edison and Nikola Tesla played pivotal roles in the
                evolution of electricity: Edison's work contributed to the
                widespread use of direct current (DC) systems, while Tesla's
                innovations advanced alternating current (AC) systems,
                transforming power generation and distribution.
              </div>
            </GlassInfoHolder>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              opacity: exitText_opacity,
              fontSize: "1.2rem",
            }}
          >
            The combined efforts of such visionaries propelled the evolution of
            electricity, revolutionizing power systems and paving the way for
            the modern electrical era.
          </motion.div>
        </div>
      </div>

      <div className="electricity__content"></div>
    </div>
  );
};

export default Electricity;
