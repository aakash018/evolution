import React, { useRef } from "react";
import "../../styles/pages/electricity.scss";
import { MotionStyle, motion, useScroll, useTransform } from "framer-motion";

import thunder from "../../assets/electricity/thunder.png";
import GlassInfoHolder from "../shared/GlassInfoHolder";
import frankyu from "../../assets/electricity/franku.jpg";

const animation_order = {
  initial: 0,
  introTextStay: 0.05,
  introTextExit: 0.09,
  bubblesIntro: 0.1,
  thunderIntro: 0.12,
  firstCardIntro: 0.15,
  firstCardFirstInfoStay: 0.2,
  firstCardFirstInfoExit: 0.25,
  firstCardSecondInfoIntro: 0.27,
  firstCardSecondInfoStay: 0.35,
  firstCardSecondInfoExit: 0.4,
  firstCardThirdInfoIntro: 0.42,
  firstCardThirdInfoStay: 0.5,
  firstCardThirdInfoExit: 0.55,
  firstCardFourthInfoIntro: 0.57,
  firstCardFourthInfoStay: 0.65,
  firstCardFourthInfoExit: 0.67,
  firstCardExit: 0.7,
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
            style={{ opacity: thunderIntro }}
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
        </div>
      </div>

      <div className="electricity__content"></div>
    </div>
  );
};

export default Electricity;
