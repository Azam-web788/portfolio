import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 350,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 350,
    damping: 25,
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // jab mouse move ho to cursor visible hojaye
      setIsVisible(true);
    };

    // browser window say bahir
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // browser window main wapas aaye
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Blur Glow */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.15)",
            filter: "blur(25px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Main Dot */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "999px",
            background: "#60a5fa",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 12px #3b82f6",
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "999px",
            border: "1.5px solid rgba(96,165,250,.7)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}