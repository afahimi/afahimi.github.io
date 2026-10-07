import React from "react";

const Chip = ({ children }) => (
  <span className="themed rounded-full border border-line bg-surface px-3 py-1 text-sm leading-none text-muted">
    {children}
  </span>
);

export default Chip;
