import React from "react";
import "../styles/imageWithOverlay.scss";
interface Props {
  img: string;
  overlayText: string;
  width: number | string;
  height: number | string;
}

const ImageWithOverlay: React.FC<Props> = ({
  height,
  img,
  overlayText,
  width,
}) => {
  return (
    <div className="imageWithOverlay">
      <img src={img} alt="img" width={width} height={height} />
      <section className="overlay">
        <span>{overlayText}</span>
      </section>
    </div>
  );
};

export default ImageWithOverlay;
