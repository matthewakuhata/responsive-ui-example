import React from "react";
import "./feature.css";

type FeatureProps = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureProps) => (
  <div className="feature-container">
    <div className="feature-container-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="feature-container-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
