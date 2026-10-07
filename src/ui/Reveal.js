import React from "react";
import { motion } from "framer-motion";

// Fades content up as it scrolls into view. MotionConfig (App.js) handles reduced motion.
const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
