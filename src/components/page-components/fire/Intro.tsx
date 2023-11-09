import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import fireWithPeople from "../../../assets/fire-with-people.webp";
import { animationOrder } from "../../pages/Fire";

import "../../../styles/";

const Intro: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

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
    [0, 0, 1, 1, 0]
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
    [0, 0, 0, 1, 1, 0]
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
    [0, 0, 0, 0, 1, 1, 0]
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
  return (
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
          stumbled upon the magic of fire, a chance discovery that ignited the
          path of human progress.
        </motion.div>
        <motion.div
          className="fire__content_1_text"
          style={{
            opacity: fire_intro_text_2,
            x: fire_intro_text_2_transofrm,
          }}
        >
          In the distant past, around one million years ago, our ancestors
          stumbled upon the magic of fire, a chance discovery that ignited the
          path of human progress.
        </motion.div>
        <motion.div
          className="fire__content_1_text"
          style={{
            opacity: fire_intro_text_3,
            x: fire_intro_text_3_transofrm,
          }}
        >
          In the distant past, around one million years ago, our ancestors
          stumbled upon the magic of fire, a chance discovery that ignited the
          path of human progress.
        </motion.div>
        <motion.div
          className="fire__content_1_text"
          style={{
            opacity: fire_intro_text_4,
            x: fire_intro_text_4_transofrm,
          }}
        >
          In the distant past, around one million years ago, our ancestors
          stumbled upon the magic of fire, a chance discovery that ignited the
          path of human progress.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
