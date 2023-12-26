import React, { useEffect, useRef } from "react";
import "../../styles/pages/agriculture.scss";
import collage_0 from "../../assets/The_Harvesters.jpg";
import collage_1 from "../../assets/his-farming-1.jpg";
import collage_2 from "../../assets/ClaySumerianSickle.jpg";
import collage_3 from "../../assets/Jethro_Tull_seed_drill_(1762).png";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import bgVideo from "../../assets/videoplayback.mp4";
import ImageWithOverlay from "../ImageWithOverlay";
import { getBrowserName } from "../../browserCheck";

interface Props {
  nextContainerRef: React.RefObject<HTMLDivElement>;
}

const animationOrder = {
  initial: 0,
  titleColorChange: 0.2,
  introTextScale: 0.25,
  introTextOpacity: 0.3,
  firstTextIntro: 0.35,
  firstInfoStay: 0.45,
  firstInfoExit: 0.5,
  secondInfoIntro: 0.55,
  secondInfoStay: 0.65,
  secondInfoExit: 0.7,
  thirdInfoIntro: 0.75,
  thirdInfoStay: 0.85,
  thirdInfoExit: 0.9,
  photoCollageIntro: 0.95,
  photoCollageStay: 1,
};

const Agriculture: React.FC<Props> = ({ nextContainerRef }) => {
  const holderRef = useRef<HTMLDivElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress, scrollY } = useScroll({ container: holderRef });
  // const springYProgress = useSpring(scrollYProgress);

  const browser = getBrowserName(navigator.userAgent);

  console.log("B", browser);

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.introTextScale,
      animationOrder.firstTextIntro,
      animationOrder.firstInfoExit,
    ],
    [1, 20, 20, 1]
  );

  const x = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.introTextScale],
    [0, 100]
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
    scrollYProgress,

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
    scrollYProgress,

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
    scrollYProgress,

    [
      animationOrder.initial,
      animationOrder.secondInfoExit,
      animationOrder.thirdInfoIntro,
      animationOrder.thirdInfoStay,
      animationOrder.thirdInfoExit,
    ],
    [-30, -30, 0, 0, 30]
  );
  let titleColor;
  if (browser.includes("Chromium")) {
    titleColor = "var(--text-color)";
  } else {
    titleColor = useTransform(
      scrollYProgress,
      [animationOrder.initial, animationOrder.titleColorChange],
      ["var(--text-color)", "#ffffff00"]
    );
  }

  const photo_opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.thirdInfoExit,
      animationOrder.photoCollageIntro,
    ],
    [0, 0, 1]
  );

  const photo_1_y = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.thirdInfoExit,
      animationOrder.photoCollageIntro,
    ],
    [-30, -30, 0]
  );

  const photo_2_x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.thirdInfoExit,
      animationOrder.photoCollageIntro,
    ],
    [30, 30, 0]
  );

  const photo_3_x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.thirdInfoExit,
      animationOrder.photoCollageIntro,
    ],
    [-30, -30, 0]
  );

  const photo_4_y = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.thirdInfoExit,
      animationOrder.photoCollageIntro,
    ],
    [30, 30, 0]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1550 && bgVideoRef.current) {
      bgVideoRef.current.playbackRate = 0.5;
      bgVideoRef.current.play();
    } else if (latest < 1550 && bgVideoRef.current) {
      bgVideoRef.current.currentTime = 0;
    }
  });

  useEffect(() => {
    if (holderRef.current) {
      holderRef.current.addEventListener("scroll", () => {
        if (holderRef.current) {
          const isFullyScrolled =
            holderRef.current.scrollHeight - holderRef.current.scrollTop - 5 ===
            holderRef.current.clientHeight;

          if (isFullyScrolled) {
            nextContainerRef.current?.scrollIntoView();
          }
        }
      });
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
              <motion.span style={{ color: titleColor }}>FARMING</motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="agriculture__content">
        <div className="agriculture__content_infos_container">
          <div className="agriculture__content_infos">
            <motion.div
              className="agriculture__content_infos_info"
              style={{ opacity: opacity_first_Info, x: x_first_Info }}
            >
              <span>
                As the sun dawned on a new era roughly 12,000 years ago,
                humanity's first farmers took a bold step, coaxing life from the
                earth and birthing the age-old practice of agriculture.
              </span>
            </motion.div>
            <motion.div
              className="agriculture__content_infos_info"
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
              className="agriculture__content_infos_info"
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
            <div className="agriculture__content_infos_photo_collage">
              <section className="agriculture__content_infos_photo_collage_sec">
                <motion.div style={{ opacity: photo_opacity, y: photo_1_y }}>
                  <ImageWithOverlay
                    img={collage_0}
                    width={350}
                    height={300}
                    overlayText="The Harvesters. Pieter Bruegel – 1565 BC"
                  />
                </motion.div>
                <motion.div style={{ opacity: photo_opacity, x: photo_2_x }}>
                  <ImageWithOverlay
                    img={collage_3}
                    width={"250px"}
                    height={"300px"}
                    overlayText="Jethro Tull's seed drill, invented in 1701 BC"
                  />
                </motion.div>
              </section>
              <section className="agriculture__content_infos_photo_collage_sec">
                <motion.div style={{ opacity: photo_opacity, x: photo_3_x }}>
                  <ImageWithOverlay
                    img={collage_1}
                    width={"300px"}
                    height={"200px"}
                    overlayText="Ploughing with a yoke of horned cattle in Ancient Egypt. 1200 BC"
                  />
                </motion.div>
                <motion.div style={{ opacity: photo_opacity, y: photo_4_y }}>
                  <ImageWithOverlay
                    img={collage_2}
                    width={"300px"}
                    height={"200px"}
                    overlayText="Sumerian harvester's sickle, 3000 BC, made from baked clay"
                  />
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
