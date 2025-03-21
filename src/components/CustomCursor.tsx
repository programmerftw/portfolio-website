import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  // Create smooth spring animations for x and y coordinates
  const smoothX = useSpring(0, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });
  
  const smoothY = useSpring(0, {
    stiffness: 100,
    damping: 20,
    mass: 0.5
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Update spring animations
      smoothX.set(e.clientX - 16);
      smoothY.set(e.clientY - 16);
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      );
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [smoothX, smoothY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-white dark:border-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY
      }}
      animate={{
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.2
        }
      }}
    />
  );
};

export default CustomCursor;