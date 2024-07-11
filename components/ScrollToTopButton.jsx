"use client"

import React from "react";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img
      src="/Fr.svg"
      className="w-10 h-10 cursor-pointer"
      alt=""
      onClick={handleScrollToTop}
    />
  );
};

export default ScrollToTopButton;