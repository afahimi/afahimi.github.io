import React from "react";
import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors duration-200";
const variants = {
  primary: "bg-accent-strong text-on-accent hover:brightness-110",
  secondary: "border border-line text-ink hover:border-accent hover:text-accent",
};

const Button = ({ variant = "primary", href, onClick, children, className = "", ...rest }) => {
  const Tag = href ? motion.a : motion.button;
  return (
    <Tag
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Button;
