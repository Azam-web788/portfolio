import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutImage3D() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -25;
    const rotateY = ((x / rect.width) - 0.5) * 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const reset = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative flex items-center justify-center"
      style={{ width: "280px", height: "280px" }}
    >
      {/* Rings same as before */}
      <div
        style={{
           position: 'absolute',
           width: '390px', height: '390px',
            borderRadius: '50%',
            border: '2px dashed #3b82f6',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            animation: 'spinCW 4s linear infinite',
            opacity: 0.8,
        }}
      />

      <div
        style={{
          position: 'absolute',
            width: '350px', height: '350px',
            borderRadius: '50%',
            border: '2px dashed #22d3ee',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            animation: 'spinCCW 3s linear infinite',
            opacity: 0.8,
        }}
      />
      <div
        style={{
           position: 'absolute',
            width: '310px', height: '310px',
            borderRadius: '50%',
            border: '1.5px dashed #818cf8',
            borderTopColor: 'transparent',
            animation: 'spinCW 6s linear infinite',
            opacity: 0.5,
        }}
      />

      <motion.img
        src="https://avatars.githubusercontent.com/u/187546672?v=4"
        alt="Azam"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{
          width: "275px",
          height: "275px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #2563eb",
          boxShadow: "0 0 30px #2563eb88, 0 0 60px #06b6d433",
          transformStyle: "preserve-3d",
        }}
      />
      <style>{`
        @keyframes spinCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}