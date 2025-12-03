import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTape from "@/components/FloatingTape";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useCountUp } from "@/hooks/useCountUp";

const About = () => {
  const clientsCount = useCountUp({ end: 100, suffix: "+", duration: 20000 });

  return (
    <div className="min-h-screen bg-background">
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
            About Us
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            Prelusive Digital Marketing helps brands stand out with creative strategies, data-driven 
            insights, and tailored solutions that inspire growth and measurable results.
          </p>
        </motion.div>

        {/* Hero Image with animated tapes - Orange on left, Rose on right top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto overflow-visible"
        >
          <FloatingTape color="orange" className="-left-12 -bottom-14" rotation={-100} size="lg" />
          <FloatingTape color="rose" className="-right-10 -top-14" rotation={270} size="lg" />
          <img 
            src="/5.png" 
            alt="Team collaboration" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-visible"
          >
            {/* Clients badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute left-2 top-1 z-20 bg-background rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-navy" />
                <div className="w-5 h-5 rounded-full bg-secondary" />
              </div>
              <span className="font-body text-xs font-medium" ref={clientsCount.ref}>{clientsCount.displayValue} Clients</span>
            </motion.div>
            
            
            <img src="/6.png" alt="Team member" className="w-full rounded-lg shadow-lg" />
            
            {/* Team members badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-1 -bottom-4 z-20 bg-background rounded-lg px-6 py-4 shadow-lg cursor-pointer"
            >
              <p className="font-body text-xs text-muted-foreground">Team Members</p>
              <p className="font-display text-2xl font-semibold">10</p>
            </motion.div>
          </motion.div>
          
          <div>
            <AnimatedHeading 
              label="about us" 
              title="Who we are at prelusive" 
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-muted-foreground mt-6 text-sm leading-relaxed"
            >
              At Prelusive, we craft digital marketing solutions that help 
              your business grow smarter. From branding to social 
              media, strategy to execution — we've got you covered. 
              Our focus is on storytelling, visibility, and measurable 
              results that drive real impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-muted-foreground mt-4 text-sm leading-relaxed"
            >
              We combine creativity and innovation with data-driven 
              insights, empowering businesses to thrive online. Whether 
              you're a startup or an established brand, we tailor 
              strategies to fit your goals and help you stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-navy text-primary-foreground font-body text-sm font-medium rounded-md"
                >
                  Inquire more
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimatedHeading 
              label="Our Mission" 
              title="Offer Flexible Marketing Solutions That Help Your Business Run Smoother." 
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-muted-foreground mt-6 text-sm leading-relaxed"
            >
              Deliver innovative digital marketing solutions that help businesses 
              grow and connect with their audience. We combine creativity, 
              strategy, and technology to drive measurable results and lasting 
              impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="mt-8"
            >
              <img src="/8.png" alt="Team working" className="w-full rounded-lg shadow-md mt-12" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/7.png" alt="Office workspace" className="w-full rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-visible"
          >
            <img src="/9.png" alt="Team collaboration" className="w-full rounded-lg shadow-lg" />
            
            {/* Lines Changed badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-1 -bottom-4 z-20 bg-background rounded-lg px-6 py-4 shadow-lg cursor-pointer"
            >
              <p className="font-body text-xs text-muted-foreground">Lines Changed</p>
              <p className="font-display text-2xl font-semibold">1000+</p>
            </motion.div>
          </motion.div>
          
          <div>
            <AnimatedHeading 
              label="Vision" 
              title="Empowering Brands, Driving Growth" 
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-muted-foreground mt-6 text-sm leading-relaxed"
            >
              Empower brands in Zimbabwe and beyond to stand out, 
              inspire engagement, and achieve sustainable growth 
              through innovative, results-driven digital marketing.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-muted-foreground mt-8 text-sm leading-relaxed"
            >
              Every project we take on is results-driven, measurable, and 
              designed to set you apart.
              We focus on understanding your audience, your vision, and 
              your business. By combining creativity, innovation, and 
              strategy, we ensure your brand stands out in a competitive 
              digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-navy text-primary-foreground font-body text-sm font-medium rounded-md"
                >
                  Contact us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
