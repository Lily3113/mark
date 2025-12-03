import { motion } from "framer-motion";

interface FloatingTapeProps {
  color?: "blue" | "orange" | "rose";
  className?: string;
  rotation?: number;
  size?: "sm" | "md" | "lg";
}

const FloatingTape = ({ 
  color = "rose", 
  className = "", 
  rotation = 45,
  size = "md"
}: FloatingTapeProps) => {
  const tapeImages = {
    blue: "/blue.png",
    orange: "/orange.png",
    rose: "/rose.png",
  };

  const sizeClasses = {
    sm: "w-16",
    md: "w-24",
    lg: "w-32",
  };

  return (
    <motion.img
      src={tapeImages[color]}
      alt=""
      className={`absolute ${sizeClasses[size]} h-auto pointer-events-none z-10 ${className}`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
        rotate: [rotation, rotation + 3, rotation - 2, rotation],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
};

export default FloatingTape;
