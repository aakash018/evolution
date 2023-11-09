import { useRef } from "react";
import "../../styles/pages/fire.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import fireWithPeople from "../../assets/fire-with-people.webp";

import Candle from "../Candle";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const animationOrder = {
  initial: 0,
  introTextFadeAway: 0.13,
  firstIntroIntro: 0.2,
  firstInfoShow: 0.28,
  firstInfoStay: 0.3,
  SecondInfoShow: 0.4,
  SecondInfoStay: 0.5,
  ThirdInfoShow: 0.6,
  ThirdInfoStay: 0.7,
  FourthInfoShow: 0.75,
  FourthInfoStay: 0.8,
  FifthInfoShow: 0.85,
  candleShow: 1,
};

const Fire: React.FC<Props> = ({ containerRef }) => {
  const holderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: holderRef,
  });

  const fire_opacity = useTransform(
    scrollYProgress,
    [animationOrder.initial, animationOrder.introTextFadeAway],
    [1, 0]
  );

  const fire_intro_img_width = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstIntroIntro,
      animationOrder.firstInfoShow,
    ],
    [500, 500, 900]
  );

  const fire_intro_img_height = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstIntroIntro,
      animationOrder.firstInfoShow,
    ],
    ["40vh", "40vh", "100vh"]
  );

  const fire_intro_left = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstIntroIntro,
      animationOrder.firstInfoShow,
    ],
    ["0%", "0%", "-45%"]
  );

  const fire_text_width = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstIntroIntro,
      animationOrder.firstInfoShow,
    ],
    [300, 300, 450]
  );

  const fire_intro_text_1_exit = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.firstInfoStay,
      animationOrder.SecondInfoShow,
    ],
    [1, 0.7, 0.7, 0]
  );

  const fire_intro_text_1_exit_transform = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.firstInfoStay,
      animationOrder.SecondInfoShow,
    ],
    [0, 0, 0, 80]
  );

  const fire_intro_text_2 = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.SecondInfoStay,
      animationOrder.ThirdInfoShow,
    ],
    [0, 0, 0, 1, 0]
  );

  const fire_intro_text_2_transofrm = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.SecondInfoStay,
      animationOrder.ThirdInfoShow,
    ],
    [0, 0, 0, 0, 80]
  );

  const fire_intro_text_3 = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.ThirdInfoShow,
      animationOrder.ThirdInfoStay,
      animationOrder.FourthInfoShow,
    ],
    [0, 0, 0, 0, 1, 0]
  );

  const fire_intro_text_3_transofrm = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.ThirdInfoShow,
      animationOrder.ThirdInfoStay,
      animationOrder.FourthInfoShow,
    ],
    [0, 0, 0, 0, 0, 80]
  );

  const fire_intro_text_4 = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.ThirdInfoShow,
      animationOrder.FourthInfoShow,
      animationOrder.FourthInfoStay,
      animationOrder.FifthInfoShow,
    ],
    [0, 0, 0, 0, 0, 1, 0]
  );

  const fire_intro_text_4_transofrm = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.firstInfoShow,
      animationOrder.SecondInfoShow,
      animationOrder.ThirdInfoShow,
      animationOrder.FourthInfoShow,
      animationOrder.FourthInfoStay,
      animationOrder.FifthInfoShow,
    ],
    [0, 0, 0, 0, 0, 0, 80]
  );

  const candleIntro = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.FifthInfoShow,
      animationOrder.candleShow,
    ],
    [0, 0, 1]
  );

  return (
    <div className="fire" ref={holderRef}>
      <div className="fire__content_holder">
        <motion.div
          className="fire__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ root: containerRef, once: true }}
          style={{ opacity: fire_opacity }}
        >
          <span className="page-title">FIRE</span>
        </motion.div>

        <div className="fire__content">
          <div className="fire__content_1">
            <motion.img
              src={fireWithPeople}
              alt="f-w-p"
              style={{
                // opacity: fire_intro_opacity,
                width: fire_intro_img_width,
                height: fire_intro_img_height,
                x: fire_intro_left,
              }}
            />
            <motion.div
              className="fire__content_1_texts"
              style={{ width: fire_text_width, x: fire_intro_left }}
            >
              <motion.div
                className="fire__content_1_text"
                style={{
                  opacity: fire_intro_text_1_exit,
                  x: fire_intro_text_1_exit_transform,
                }}
              >
                In the distant past, around one million years ago, our ancestors
                stumbled upon the magic of fire, a chance discovery that ignited
                the path of human progress.
              </motion.div>
              <motion.div
                className="fire__content_1_text"
                style={{
                  opacity: fire_intro_text_2,
                  x: fire_intro_text_2_transofrm,
                }}
              >
                In an act of serendipity, our ancient ancestors may have
                discovered fire when lightning struck dry vegetation or through
                volcanic eruptions, unveiling its transformative potential.
              </motion.div>
              <motion.div
                className="fire__content_1_text"
                style={{
                  opacity: fire_intro_text_3,
                  x: fire_intro_text_3_transofrm,
                }}
              >
                Early humans learned to control fire through trial and error,
                experimenting with techniques like rubbing stones together to
                create sparks, eventually mastering the ability to kindle and
                sustain flames for cooking, warmth, and protection.
              </motion.div>
              <motion.div
                className="fire__content_1_text"
                style={{
                  opacity: fire_intro_text_4,
                  x: fire_intro_text_4_transofrm,
                }}
              >
                As we reflect on the ancient dance of discovery and mastery,
                fire remains an enduring symbol of humanity's relentless pursuit
                of knowledge and innovation.
              </motion.div>
              <motion.div
                className="candle_wrapper"
                style={{ opacity: candleIntro }}
              >
                <div className="candle_wrapper__title">
                  Feel the warmth of history and the brightness of discovery -
                  go ahead, light the candle!
                </div>
                <div className="candle_wrapper__candle">
                  <Candle />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fire;
