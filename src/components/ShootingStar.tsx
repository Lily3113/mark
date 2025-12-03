import { motion } from "framer-motion";

const ShootingStar = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, x: -20, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        x: [-20, 0, 30, 60],
        y: [20, 0, -30, -60],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeOut"
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M16 0L18.5 13.5L32 16L18.5 18.5L16 32L13.5 18.5L0 16L13.5 13.5L16 0Z"
          fill="hsl(var(--secondary))"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      {/* Trail effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent"
        style={{ transformOrigin: "left center" }}
        animate={{ 
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </motion.div>
  );
};

export default ShootingStar;
