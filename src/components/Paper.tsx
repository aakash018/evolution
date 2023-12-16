import React from "react";
import "../styles/paper.scss";

const FolderPaper: React.FC<{ text: string; image: string }> = ({
  text,
  image,
}) => {
  return (
    <>
      <div className="paper">
        <div className="paper__content">{text}</div>
        <div className="paper__image">
          <img src={image} alt="inventor" />
        </div>
      </div>
    </>
  );
};

export default FolderPaper;
