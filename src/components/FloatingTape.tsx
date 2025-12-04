import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const tapeImages = {
    blue: "/blue.png",
    orange: "/orange.png",
    rose: "/rose.png",
  };

  const sizeClasses = {
    sm: isMobile ? "w-6" : "w-16",
    md: isMobile ? "w-8" : "w-24",
    lg: isMobile ? "w-10" : "w-32",
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
        y: isMobile ? [0, -4, 0] : [0, -8, 0],
        rotate: isMobile ? [rotation, rotation + 2, rotation - 1, rotation] : [rotation, rotation + 3, rotation - 2, rotation],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: { duration: isMobile ? 6 : 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: isMobile ? 8 : 6, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
};

export default FloatingTape;
