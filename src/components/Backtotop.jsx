import React, { useState } from "react";
import "./styles/backtotop.css";

const Backtotop = () => {
  return (
   <button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ⬆ Back to Top
</button>
  );
};

export default Backtotop;
