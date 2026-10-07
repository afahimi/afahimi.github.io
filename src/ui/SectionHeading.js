import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title }) => (
  <Reveal className="mb-10 md:mb-14">
    <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
    <h2 className="mt-2 text-step-3">{title}</h2>
  </Reveal>
);

export default SectionHeading;
