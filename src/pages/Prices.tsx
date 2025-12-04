import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTape from "@/components/FloatingTape";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useIsMobile } from "@/hooks/use-mobile";


const Prices = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Prices
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            We offer flexible pricing to suit your business needs. Get in touch to discuss strategy, 
            branding, or full-service digital marketing packages—our team is ready to help you grow.
          </p>
        </motion.div>

        {/* Hero Image - Rose starburst top-right under image, vertical blue left corner, orange vertical right under image, rose starburst left white space */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto overflow-visible"
        >
          <FloatingTape color="blue" className={isMobile ? "-left-2 -bottom-4" : "-left-10 -bottom-14"} rotation={155} size="lg" />
          
          <img 
            src="/14.png" 
            alt="Pricing consultation" 
            className="w-full rounded-lg shadow-lg"
          />
          <FloatingTape color="rose" className={isMobile ? "-right-2 -top-4" : "-right-10 -top-16"} rotation={310} size="lg" />
          
        </motion.div>
      </section>

      {/* Book Consultancy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimatedHeading 
              label="Prices" 
              title="Book Consultancy by Clicking Button Below" 
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-sm leading-relaxed"
          >
            We offer flexible pricing to suit your business needs. Get in 
            touch to discuss strategy, branding, or full-service digital 
            marketing packages—our team is ready to help you grow. 
            Not sure which package fits your business best? Talk to us, 
            and we'll work with you to find the perfect pricing plan 
            tailored to your goals and budget.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-navy rounded-2xl overflow-hidden"
        >
          
          <div className={`relative z-10 ${isMobile ? 'p-6' : 'p-12'}`}>
            <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center justify-between'}`}>
              <div className={isMobile ? 'max-w-full' : 'max-w-md'}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-secondary text-xs font-body font-medium tracking-wide uppercase mb-2"
                >
                  Why Choose Prelusive Digital Marketing
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`font-display font-semibold text-primary-foreground mb-6 ${isMobile ? 'text-xl leading-tight' : 'text-3xl'}`}
                >
                  Smarter Marketing.<br />Proven Results.
                </motion.h2>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body text-sm font-medium rounded-md"
                  >
                    Book Consultancy
                  </motion.button>
                </Link>
              </div>
              {!isMobile && (
                <div className={`absolute ${isMobile ? 'right-4 top-1/2 -translate-y-1/2 opacity-10' : 'right-12 top-1/2 -translate-y-1/2 opacity-20'}`}>
                  <motion.div 
                    className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-4'}`}
                    animate={{ rotate: isMobile ? [0, 2, -2, 0] : [0, 5, -5, 0] }}
                    transition={{ duration: isMobile ? 15 : 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
                    <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
                    <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
                    <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
