import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./MaskCursor.module.scss";

const MaskCursor = ({ children, size = 40, revealSize = 300 }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const updateMousePos = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    node.addEventListener("mousemove", updateMousePos);
    return () => node.removeEventListener("mousemove", updateMousePos);
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={styles.maskContainer}
      animate={{
        backgroundColor: isHovered ? "#111" : "#fff",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Mask layer */}
      <motion.div
        className={styles.maskLayer}
        animate={{
          WebkitMaskPosition: `${mousePos.x - maskSize / 2}px ${
            mousePos.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
          maskPosition: `${mousePos.x - maskSize / 2}px ${
            mousePos.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div
          className={styles.maskContent}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MaskCursor;
