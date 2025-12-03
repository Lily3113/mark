import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  label?: string;
  title: string;
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
}

const AnimatedHeading = ({
  label,
  title,
  className = "",
  labelClassName = "",
  titleClassName = "",
}: AnimatedHeadingProps) => {
  return (
    <div className={className}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`text-secondary text-xs font-body font-medium tracking-wide uppercase mb-2 ${labelClassName}`}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl font-semibold text-foreground ${titleClassName}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default AnimatedHeading;
