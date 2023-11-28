import React, { useEffect, useRef } from "react";
import "../../styles/shared/WheelsTypeHolder.scss";

import { useAnimate } from "framer-motion";

interface Props {
  pageRef: React.RefObject<HTMLDivElement>;
  entryPoint: number;
  exitPoint: number;
  image: string;
  text: string;
  title: string;
}

const WheelsTypeHolder: React.FC<Props> = ({
  pageRef,
  entryPoint,
  exitPoint,
  image,
  text,
  title,
}) => {
  const [textRef, animateText] = useAnimate();
  const [pictureRef, animatePicture] = useAnimate();
  const [pictureWheelRef, animateWheelPicture] = useAnimate();

  const animationDone = useRef(false);

  useEffect(() => {
    (() => {
      if (pageRef.current) {
        pageRef.current.addEventListener("scroll", async () => {
          if (pageRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = pageRef.current;

            // Calculate the scroll position inside the scrollable div
            const scrollPosition =
              (scrollTop / (scrollHeight - clientHeight)) * 100;

            if (
              scrollPosition >= entryPoint &&
              scrollPosition <= exitPoint &&
              !animationDone.current
            ) {
              animationDone.current = true;
              animateText(textRef.current, {
                opacity: 1,
                x: 0,
              });
              await animatePicture(pictureRef.current, {
                opacity: 1,
              });
              animateWheelPicture(
                pictureWheelRef.current,
                {
                  rotate: [0, -360, -200],
                  x: [250, -400, -200],
                },
                {
                  duration: 5,
                  // repeat: Infinity,
                  ease: "linear",
                  // repeatType: "reverse",
                }
              );
            } else if (scrollPosition < entryPoint) {
              animationDone.current = false;

              pictureWheelRef.current.style.transform = "translateX(250px)";

              animateText(
                textRef.current,
                {
                  opacity: 0,
                },
                { duration: 0.1 }
              );
              await animatePicture(
                pictureRef.current,
                {
                  opacity: 0,
                },
                { duration: 0.1 }
              );
            } else if (scrollPosition > exitPoint) {
              animationDone.current = false;
              pictureWheelRef.current.style.transform = "translateX(250px)";

              animateText(
                textRef.current,
                {
                  opacity: 0,
                },
                { duration: 0.1 }
              );
              await animatePicture(
                pictureRef.current,
                {
                  opacity: 0,
                },
                { duration: 0.1 }
              );
            }
          }
        });
      }
    })();
  }, []);

  return (
    <div className="wheelType">
      <div className="wheelType__content">
        <div className="wheelType__content_text" ref={textRef}>
          <div className="title">{title}</div>
          {text}
        </div>
        <div className="wheelType__content_picture" ref={pictureRef}>
          <img
            src={image}
            alt="wheel"
            width={200}
            height={200}
            ref={pictureWheelRef}
          />
        </div>
      </div>
    </div>
  );
};

export default WheelsTypeHolder;
