import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="p-6"
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-6 h-6 text-secondary" />
      </motion.div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
