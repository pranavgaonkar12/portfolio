import React, { useState } from "react";

export function BackgroundGradientAnimation({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 1))`,
        transition: "background 0.2s ease",
      }}
    >
      <div className="z-10">{children}</div>
    </div>
  );
}
