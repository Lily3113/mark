import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTape from "@/components/FloatingTape";
import ServiceCard from "@/components/ServiceCard";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useIsMobile } from "@/hooks/use-mobile";
import { TrendingUp, Megaphone, Globe, Share2, Mail, Building2 } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  const services = [
    { icon: TrendingUp, title: "Digital Marketing Strategy & Consultancy", description: "Tailored strategies to help your brand thrive online, whether you're a startup or an established business." },
    { icon: Megaphone, title: "Public Relations & Branding", description: "Build and leverage your brand's reputation while increasing visibility in your market." },
    { icon: Globe, title: "Website Development & SEO", description: "Develop active, user-friendly websites optimized for search engines to drive real traffic." },
    { icon: Share2, title: "Social Media & Content Management", description: "Create engaging content and manage your social channels to grow your audience." },
    { icon: Mail, title: "Email Marketing Campaigns", description: "Design email campaigns to connect with your audience directly and drive conversions." },
    { icon: Building2, title: "Corporate Branding", description: "Strengthen your brand identity and stand out from competitors in your industry." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Amplifying Your Brand in the<br />Digital World
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We craft innovative digital marketing strategies that help businesses in Zimbabwe and beyond stand out, grow, and connect with their audience.
          </motion.p>
        </div>

        {/* Hero Image with tapes - Blue bottom-left corner, Rose top-right corner */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="relative max-w-4xl mx-auto overflow-visible">
          <FloatingTape color="blue" className={isMobile ? "-left-2 -bottom-4" : "-left-8 -bottom-16"} rotation={-20} size="lg" />
          <FloatingTape color="rose" className={isMobile ? "-right-2 -top-4" : "-right-10 -top-20"} rotation={310} size="lg" />
          <img src="/1.png" alt="Team collaboration" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </section>

      {/* About Section with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedHeading label="About Us" title="Empowering Brands in the Digital World" />
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="font-body text-muted-foreground mt-6 text-sm leading-relaxed">
              At Prelusive Digital Marketing, our mission is to revolutionize the digital landscape for businesses in Zimbabwe and beyond. We want to help brands stand out in competitive markets.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6">
              <Link to="/about"><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-2.5 bg-navy text-primary-foreground font-body text-sm font-medium rounded-md">Learn More</motion.button></Link>
            </motion.div>
          {/* Image under Learn More button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="mt-8 relative"
            >
              <img src="/3.png" alt="Creative workspace" className="w-3/4 rounded-lg shadow-md" />
            </motion.div>
          </div>
          {/* Single image on right side with orange tape on bottom-right */}
          <div className="relative">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-visible">
              <FloatingTape color="orange" className={isMobile ? "-right-2 -bottom-6" : "-right-4 -bottom-12"} rotation={200} />
              <img src="/2.png" alt="Working professional" className="w-full rounded-lg shadow-md" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
    <AnimatedHeading 
      label="Services" 
      title="Services & Benefits of Working With Us" 
    />

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2 font-body text-muted-foreground text-sm leading-relaxed mt-6"
    >
      At Prelusive Digital Marketing, we provide a full suite of services designed to help businesses grow online. We deliver measurable results.
    </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* Smarter Marketing Section with Orange Tape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedHeading label="Why Choose Prelusive Digital Marketing" title="Smarter Marketing Results." />
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="font-body text-muted-foreground mt-6 text-sm leading-relaxed">
              At Prelusive, we don't release one-size-fits-all campaigns. Every strategy is tailored to your business goals, combining creativity, innovation, and data-driven insights. We focus on compelling brand positioning, measurable outcomes — ensuring your brand doesn't just exist online, it stands out. Our team of digital marketing officers utilizes the latest resources to meet your needs while maintaining consistent quality and transparent reporting — we're focused on you and your brand the project is complete.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6">
              <Link to="/about"><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-2.5 bg-navy text-primary-foreground font-body text-sm font-medium rounded-md">Learn More</motion.button></Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-visible">
            <img src="/4.png" alt="Team collaboration" className="w-full rounded-lg shadow-lg" />
            <FloatingTape color="orange" className={isMobile ? "-left-3 -bottom-8" : "-left-10 -bottom-16"} rotation={90} size="lg" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-navy rounded-2xl overflow-hidden">
          <div className={`relative z-10 ${isMobile ? 'p-6' : 'p-12'}`}>
            <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center justify-between'}`}>
              <div className={isMobile ? 'max-w-full' : 'max-w-md'}>
                <motion.p className="text-secondary text-xs font-body font-medium tracking-wide uppercase mb-2">Why Choose Prelusive Digital Marketing</motion.p>
                <motion.h2 className={`font-display font-semibold text-primary-foreground mb-6 ${isMobile ? 'text-xl leading-tight' : 'text-3xl'}`}>Smarter Marketing.<br />Proven Results.</motion.h2>
                <Link to="/prices"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body text-sm font-medium rounded-md">Book Consultancy</motion.button></Link>
              </div>
          {/* Background shapes - responsive positioning */}
          <div className={`absolute ${isMobile ? 'right-4 top-1/2 -translate-y-1/2 opacity-10' : 'right-12 top-1/2 -translate-y-1/2 opacity-20'}`}>
            <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-4'}`}>
              <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
              <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
              <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
              <div className={`${isMobile ? 'w-12 h-12 border-4' : 'w-24 h-24 border-8'} rounded-full border-primary-foreground/30`} />
            </div>
          </div>
            </div>
          </div>
          <FloatingTape color="orange" className={isMobile ? "-right-3 -bottom-2" : "-right-10 -bottom-2"} rotation={90} />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
