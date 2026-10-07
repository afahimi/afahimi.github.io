import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ title }) => (
  <Reveal className="mb-10 md:mb-14">
    <h2 className="text-step-3">{title}</h2>
  </Reveal>
);

export default SectionHeading;
