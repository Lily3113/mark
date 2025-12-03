import { motion } from "framer-motion";

interface TapedImageProps {
  src: string;
  alt: string;
  tapeColor?: "blue" | "orange" | "rose";
  tapePosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  imageClassName?: string;
  tilt?: number;
}

const TapedImage = ({
  src,
  alt,
  tapeColor = "blue",
  tapePosition = "top-right",
  className = "",
  imageClassName = "",
  tilt = 0,
}: TapedImageProps) => {
  const tapePositionClasses = {
    "top-left": "-top-4 -left-4 -rotate-45",
    "top-right": "-top-4 -right-4 rotate-45",
    "bottom-left": "-bottom-4 -left-4 rotate-45",
    "bottom-right": "-bottom-4 -right-4 -rotate-45",
  };

  const tapeImages = {
    blue: "/blue.png",
    orange: "/orange.png",
    rose: "/rose.png",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: tilt - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageClassName}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={tapeImages[tapeColor]}
        alt=""
        className={`absolute w-16 h-auto ${tapePositionClasses[tapePosition]}`}
        animate={{
          rotate: [0, 3, -3, 0],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default TapedImage;
