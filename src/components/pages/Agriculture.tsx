import React, { useEffect, useRef } from "react";
import "../../styles/pages/agriculture.scss";
import img from "../../assets/freesvgorg21040.png";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import bgVideo from "../../assets/videoplayback.mp4";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const animationOrder = {
  initial: 0,
  titleColorChange: 0.2,
  introTextScale: 0.25,
  introTextOpacity: 0.3,
  firstTextIntro: 0.35,
  firstInfoStay: 0.4,
  firstInfoExit: 0.45,
  secondInfoIntro: 0.5,
  secondInfoStay: 0.55,
  secondInfoExit: 0.6,
  thirdInfoIntro: 0.65,
  thirdInfoStay: 0.7,
  thirdInfoExit: 0.75,
};

const Agriculture: React.FC<Props> = () => {
  const holderRef = useRef<HTMLDivElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress, scrollY } = useScroll({ container: holderRef });
  const springYProgress = useSpring(scrollYProgress);
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.introTextScale,
      animationOrder.firstTextIntro,
    ],
    [1, 20, 1]
  );

  const x = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.introTextScale],
    [0, 600]
  );

  const opacity = useTransform(
    scrollYProgress,
    [animationOrder.introTextScale, animationOrder.introTextOpacity],
    [1, 0]
  );
  const opacity_vid = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.introTextScale,
      animationOrder.introTextOpacity,
    ],
    [0, 0, 1]
  );

  const opacity_first_Info = useTransform(
    scrollYProgress,

    [
      animationOrder.initial,
      animationOrder.introTextOpacity,
      animationOrder.firstTextIntro,
      animationOrder.firstInfoStay,
      animationOrder.firstInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const x_first_Info = useTransform(
    springYProgress,

    [
      animationOrder.initial,
      animationOrder.introTextOpacity,
      animationOrder.firstTextIntro,
      animationOrder.firstInfoStay,
      animationOrder.firstInfoExit,
    ],
    [-30, -30, 0, 0, 30]
  );

  const opacity_second_Info = useTransform(
    scrollYProgress,

    [
      animationOrder.initial,
      animationOrder.firstInfoExit,
      animationOrder.secondInfoIntro,
      animationOrder.secondInfoStay,
      animationOrder.secondInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const x_second_Info = useTransform(
    springYProgress,

    [
      animationOrder.initial,
      animationOrder.firstInfoExit,
      animationOrder.secondInfoIntro,
      animationOrder.secondInfoStay,
      animationOrder.secondInfoExit,
    ],
    [-30, -30, 0, 0, 30]
  );

  const opacity_third_Info = useTransform(
    scrollYProgress,

    [
      animationOrder.initial,
      animationOrder.secondInfoExit,
      animationOrder.thirdInfoIntro,
      animationOrder.thirdInfoStay,
      animationOrder.thirdInfoExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const x_third_Info = useTransform(
    springYProgress,

    [
      animationOrder.initial,
      animationOrder.secondInfoExit,
      animationOrder.thirdInfoIntro,
      animationOrder.thirdInfoStay,
      animationOrder.thirdInfoExit,
    ],
    [-30, -30, 0, 0, 30]
  );

  const titleColor = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.titleColorChange],
    ["var(--text-color)", "#ffffff00"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1550 && bgVideoRef.current) {
      bgVideoRef.current.playbackRate = 0.5;
      bgVideoRef.current.play();
    } else if (latest < 1550 && bgVideoRef.current) {
      bgVideoRef.current.currentTime = 0;
    }
  });

  return (
    <div className="agriculture" ref={holderRef}>
      <div className="agriculture__title">
        <div className="agriculture__title_container">
          <motion.div
            className="agriculture__title_container__video_bg"
            style={{ opacity: opacity_vid }}
          >
            <video
              src={bgVideo}
              width={"100%"}
              height={"100%"}
              loop
              ref={bgVideoRef}
            />
          </motion.div>
          <div className="page-title agriculture__title_container_text">
            <motion.div style={{ opacity, x, scale }}>
              <motion.span style={{ color: titleColor }}>FRAMING</motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="agriculture__content">
        <div className="agriculture__content_infos_container">
          <div className="agriculture__content_infos">
            <motion.div
              className="agriculture__content__info"
              style={{ opacity: opacity_first_Info, x: x_first_Info }}
            >
              <span>
                As the sun dawned on a new era roughly 12,000 years ago,
                humanity's first farmers took a bold step, coaxing life from the
                earth and birthing the age-old practice of agriculture.
              </span>
            </motion.div>
            <motion.div
              className="agriculture__content__info"
              style={{ opacity: opacity_second_Info, x: x_second_Info }}
            >
              <span>
                In the nascent stages of agriculture, humanity sowed the
                foundations of sustenance, cultivating vital grains such as
                wheat, barley, rice, millet, and oats, while domesticating
                essential livestock including goats, sheep, cattle, pigs, and
                poultry, shaping the diverse tableau of early farming practices
              </span>
            </motion.div>
            <motion.div
              className="agriculture__content__info"
              style={{ opacity: opacity_third_Info, x: x_third_Info }}
            >
              <span>
                Across the epochs of agriculture, tools evolved from rudimentary
                implements like digging sticks and hand-held sickles to more
                sophisticated advancements such as plows, seed drills, and
                combine harvesters, marking a transformative journey in farming
                technology.
              </span>
            </motion.div>
            <div className="photo-collage">
              <img src={img} alt="imge" width={"100px"} height={"100px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
