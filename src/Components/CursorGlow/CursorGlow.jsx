import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 5, // half of size
        left: position.x - 5,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #00ffff55 0%, #00ffff11 80%)",
        pointerEvents: "none",
        mixBlendMode: "screen",
        filter: "blur(10px)",
        transition: "transform 0.05s ease",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default CursorGlow;
