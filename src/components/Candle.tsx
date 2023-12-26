import React from "react";
import "../styles/candle.scss";
import { useAnimate } from "framer-motion";
const Candle: React.FC = () => {
  const [beforeRef, animateBeforeEle] = useAnimate();
  const [bottomRef, animateBottomEle] = useAnimate();
  const [topRef, animateTopEle] = useAnimate();
  const [candleRef, animateCandleEle] = useAnimate();

  return (
    <div
      className="candle"
      ref={candleRef}
      onClick={async () => {
        console.log("Hello");
        await animateBeforeEle(
          beforeRef.current,
          { opacity: [0, 1] },
          { duration: 1 }
        );

        animateTopEle(topRef.current, { opacity: [0, 1] }, { duration: 1 });
        animateBottomEle(
          bottomRef.current,
          { opacity: [0, 1], height: [0, 8] },
          { duration: 2 }
        );

        animateCandleEle(
          candleRef.current,
          { "--flame-height": ["0px", "100px"], y: [0, -100] },
          { duration: 3 }
        );
      }}
    >
      <div className="flame">
        <div className="shadows"></div>
        <div className="top" ref={topRef}></div>
        <div className="middle"></div>
        <div className="bottom" ref={bottomRef}></div>
      </div>
      <div className="wick">
        <div className="wick__before" ref={beforeRef}></div>
        <div className="wick__after"></div>
      </div>
      <div className="wax"></div>
    </div>
  );
};

export default Candle;
