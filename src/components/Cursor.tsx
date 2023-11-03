import React, { useEffect, useRef, useState } from "react";
import "../styles/cursor.scss";

interface Props {
  moonRef: React.RefObject<HTMLDivElement>;
}

const Cursor: React.FC<Props> = ({ moonRef }) => {
  const cursor_outer = useRef<HTMLDivElement>(null);
  const cursor_inner = useRef<HTMLDivElement>(null);
  const [isOverlappingMoon, setIsOverlappingMoon] = useState(false);
  const [cursorLoc, setCursorLoc] = useState<number | null>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor_outer.current?.setAttribute(
        "style",
        "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
      );
      cursor_inner.current?.setAttribute(
        "style",
        "top: " + (e.pageY - 4) + "px; left: " + (e.pageX - 4) + "px;"
      );
      setCursorLoc(e.pageX);
    });
  }, []);

  useEffect(() => {
    const circle1 = moonRef.current;
    const circle2 = cursor_inner.current;
    if (circle1 && circle2) {
      const rect1 = circle1.getBoundingClientRect();
      const rect2 = circle2.getBoundingClientRect();

      const circle1X = rect1.left + rect1.width / 2;
      const circle1Y = rect1.top + rect1.height / 2;

      const circle2X = rect2.left + rect2.width / 2;
      const circle2Y = rect2.top + rect2.height / 2;

      const distance = Math.sqrt(
        Math.pow(circle1X - circle2X, 2) + Math.pow(circle1Y - circle2Y, 2)
      );

      const isOverlap = distance < rect1.width / 2 + rect2.width / 2;

      setIsOverlappingMoon(isOverlap);
    }
  }, [cursorLoc]);

  return (
    <div className="cursor">
      <div
        className={`cursor_outline ${
          isOverlappingMoon ? "cursor_hovering" : ""
        }`}
        ref={cursor_outer}
      ></div>
      <div
        className={`cursor_inner ${
          isOverlappingMoon ? "cursor_hovering" : ""
        } `}
        ref={cursor_inner}
      ></div>
    </div>
  );
};

export default Cursor;
