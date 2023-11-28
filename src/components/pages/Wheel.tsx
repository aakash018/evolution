import React from "react";
import "../../styles/pages/wheel.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import WheelsTypeHolder from "../shared/WheelsTypeHolder";

import wheel_1 from "../../assets/solid_wheel.webp";
import wheel_2 from "../../assets/wheel.png";
import wheel_3 from "../../assets/char_wheel-removebg-preview.png";
import wheel_4 from "../../assets/train_wheel-removebg-preview.png";
import wheel_5 from "../../assets/car-wheel.png";

interface Props {
  pageRef: React.RefObject<HTMLDivElement>;
}

const animationOrder = {
  initital: 0,
  titleExit: 0.15,
  firstTextIntro: 0.2,
  firstTextStay: 0.23,
  firstTextExit: 0.25,
  secondTextIntro: 0.3,
  secondTextStay: 0.33,
  secondTextExit: 0.35,
  thirdTextIntro: 0.4,
  thirdTextStay: 0.43,
  thirdTextExit: 0.45,
};

const Wheel: React.FC<Props> = ({ pageRef }) => {
  const { scrollYProgress } = useScroll({ container: pageRef });

  const title_rotate = useTransform(
    scrollYProgress,
    [animationOrder.initital, animationOrder.titleExit],
    [0, 360]
  );

  const title_opacity = useTransform(
    scrollYProgress,
    [animationOrder.initital, animationOrder.titleExit],
    [1, 0]
  );

  const title_scale = useTransform(
    scrollYProgress,
    [animationOrder.initital, animationOrder.titleExit],
    [1, 0.5]
  );

  const intro_text_1 = useTransform(
    scrollYProgress,
    [
      animationOrder.initital,
      animationOrder.titleExit,
      animationOrder.firstTextIntro,
      animationOrder.firstTextStay,
      animationOrder.firstTextExit,
    ],
    [0, 0, 1, 1, 0]
  );

  const intro_text_2 = useTransform(
    scrollYProgress,
    [
      animationOrder.initital,
      animationOrder.titleExit,
      animationOrder.firstTextExit,
      animationOrder.secondTextIntro,
      animationOrder.secondTextStay,
      animationOrder.secondTextExit,
    ],
    [0, 0, 0, 1, 1, 0]
  );

  const intro_text_3 = useTransform(
    scrollYProgress,
    [
      animationOrder.initital,
      animationOrder.secondTextExit,
      animationOrder.thirdTextIntro,
      animationOrder.thirdTextStay,
      animationOrder.thirdTextExit,
    ],
    [0, 0, 1, 1, 0]
  );

  return (
    <div ref={pageRef} className="wheel ">
      <div className="wheel__title">
        <motion.div
          className="page-title"
          style={{
            rotate: title_rotate,
            opacity: title_opacity,
            scale: title_scale,
          }}
        >
          WHEEL
        </motion.div>
      </div>
      <div className="wheel__content">
        <div className="wheel__content_container">
          <div className="wheel__content_container_wrapper">
            <div className="wheel__content_container_wrapper_introTexts">
              <div className="wheel__content_container_wrapper_introTexts_wrapper">
                <motion.div style={{ opacity: intro_text_1 }}>
                  The invention of the wheel, likely around 3500 BCE, marked a
                  monumental shift in transportation engineering, enabling the
                  movement of heavy loads with greater ease by reducing friction
                  between the load and the ground.
                </motion.div>
                <motion.div style={{ opacity: intro_text_2 }}>
                  The wheel's circular shape and its accompanying axle created a
                  simple yet groundbreaking engineering solution, allowing for
                  more efficient and smoother movement of objects by rolling
                  instead of dragging or carrying.
                </motion.div>
                <motion.div style={{ opacity: intro_text_3 }}>
                  Let's explore a few examples of wheels invented throughout
                  history.
                </motion.div>
              </div>
            </div>
            <div className="types_of_wheels">
              <div className="types_of_wheels_holder">
                <WheelsTypeHolder
                  pageRef={pageRef}
                  entryPoint={46}
                  exitPoint={55}
                  image={wheel_1}
                  text="The earliest known wheels were solid
                     discs crafted from wood, likely invented
                      around 3500 BCE. These wheels were simple
                       and robust, used primarily on carts and chariots."
                  title="Solid Wheels (Early Neolithic Period)"
                />
              </div>
              <div className="types_of_wheels_holder">
                <WheelsTypeHolder
                  pageRef={pageRef}
                  entryPoint={56}
                  exitPoint={66}
                  image={wheel_2}
                  text="Spoked wheels emerged around 2000 BCE and
                   introduced a central hub with radiating spokes
                    connected to an outer rim. This design was lighter
                     and more versatile than solid wheels, enhancing
                      speed and maneuverability."
                  title="Spoked Wheels (Early to Mid-Bronze Age)"
                />
              </div>
              <div className="types_of_wheels_holder">
                <WheelsTypeHolder
                  pageRef={pageRef}
                  entryPoint={67}
                  exitPoint={77}
                  image={wheel_3}
                  text="Chariot wheels were designed for war chariots
                   during the late Bronze Age, roughly around 1500–1000 BCE.
                    They were lightweight, spoked wheels engineered for
                     speed and agility in battle."
                  title="Chariot Wheels (Late Bronze Age)"
                />
              </div>
              <div className="types_of_wheels_holder">
                <WheelsTypeHolder
                  pageRef={pageRef}
                  entryPoint={78}
                  exitPoint={88}
                  image={wheel_4}
                  text="With the advent of steam-powered locomotion
                   in the early modern period (18th century), specialized
                    wheels for trains were engineered, featuring flanges
                     and precise design for railway tracks."
                  title="Train Wheels (Early Modern Period)"
                />
              </div>
              <div className="types_of_wheels_holder">
                <WheelsTypeHolder
                  pageRef={pageRef}
                  entryPoint={89}
                  exitPoint={100}
                  image={wheel_5}
                  text="The development of modern vehicles in the
                   late 19th century saw the invention of wheels
                    with steel or aluminum rims and rubber tires,
                     optimizing road travel for automobiles."
                  title="Modern Automobile Wheels (Late 19th Century)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
