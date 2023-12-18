import React from "react";
import "../../styles/shared/GlassInfoHolder.scss";

interface Props {
  children: React.ReactNode;
}

const GlassInfoHolder: React.FC<Props> = ({ children }) => {
  return <div className="glass-info-holder">{children}</div>;
};

export default GlassInfoHolder;
