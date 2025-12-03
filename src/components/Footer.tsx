import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* CTA Section */}
      <div className="py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-4"
        >
          Ring in a better future with Prelusive
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-medium mb-4"
        >
          Request More Information
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-sm text-primary-foreground/80 max-w-md mx-auto mb-8"
        >
          Prelusive is a modern call center solutions provider, delivering tailored
          virtual support to help businesses connect, scale, and thrive.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary text-secondary-foreground font-body text-sm font-medium rounded-md"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-primary-foreground/60"
        >
          © 2025 Takue_thebrain
        </motion.p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <Link to="/">
            <img src="/logo.png" alt="Prelusive" className="h-10 w-auto mb-4 md:mb-0" />
          </Link>
          
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <Link to="/about" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Team
            </Link>
            <Link to="/services" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              About us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin size={16} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook size={16} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
