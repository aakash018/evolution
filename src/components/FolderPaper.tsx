import React from "react";
import "../styles/foldedPaper.sass";
const FolderPaper: React.FC = () => {
  return (
    <>
      <div id="frame">
        <div id="stage">
          <div id="box">
            <div className="in"></div>
            <div className="one"></div>
          </div>
          <div id="box">
            <div className="in"></div>
            <div className="two"></div>
          </div>
          <div id="box">
            <div className="in"></div>
            <div className="thr"></div>
          </div>
          <div id="box">
            <div className="in"></div>
            <div className="fou"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderPaper;
