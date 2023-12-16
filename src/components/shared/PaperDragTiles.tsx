import {
  useDragControls,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import React, { useState } from "react";
import Paper from "../Paper";

interface Props {
  style?: React.CSSProperties;
  text: string;
  image: string;
  setNextTileShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaperDragTiles: React.FC<Props> = ({
  style,
  text,
  setNextTileShown,
  image,
}) => {
  const [showTile, setShowTile] = useState(true);
  const controls_first = useDragControls();

  const x_first_card = useMotionValue(0);

  const rotate_card = useTransform(x_first_card, [-200, 200], [-15, 15]);
  const card_opacity = useTransform(
    x_first_card,
    [-200, -100, 0, 100, 200],
    [0.01, 1, 1, 1, 0.01]
  );

  useMotionValueEvent(x_first_card, "change", (latest) => {
    console.log(latest);
    if (latest > 150 || latest < -150) {
      setShowTile(false);
      setNextTileShown(true);
    }
  });

  return (
    <>
      {showTile && (
        <div
          onPointerDown={(event) => controls_first.start(event)}
          className="press__content_paperHolder_container"
          style={{
            ...style,
            position: "absolute",
            transition: "all 0.3s ease-in",
          }}
        >
          <motion.div
            drag="x"
            style={{
              x: x_first_card,
              rotate: rotate_card,
              opacity: card_opacity,
            }}
            dragControls={controls_first}
            dragConstraints={{ left: -200, right: 200 }}
          >
            <Paper text={text} image={image} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PaperDragTiles;
