import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTape from "@/components/FloatingTape";
import AnimatedHeading from "@/components/AnimatedHeading";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const Services = () => {
  const { count: reviewCount, ref: reviewRef } = useCountUp({ end: 100, duration: 2000 });
  
  const serviceCards = [
    {
      icon: TrendingUp,
      title: "Our Industries",
      description: "We work with brands across retail, tech, hospitality, and professional services, helping them grow and tell their story.",
    },
    {
      icon: DollarSign,
      title: "Revenue Streams",
      description: "We focus on social media management and corporate branding to drive engagement and growth.",
    },
    {
      icon: Users,
      title: "Clients We Work With",
      description: "We support SMEs, large corporations, and international companies with tailored digital marketing solutions.",
    },
  ];


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
            Services
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, 
            adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt.
          </p>
        </motion.div>

        {/* Single Hero Image with blue starburst left, orange tape top-right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto overflow-visible"
        >
          <img src="/blue_circles.png" alt="Blue circles" className="absolute -left-11 bottom-[-90px]  w-40 h-40" />
          <FloatingTape color="orange" className="-right-9 -top-11" rotation={75} size="lg" />
          <img src="/12.png" alt="Professional services" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </section>

      {/* Building Brands Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <AnimatedHeading 
              label="Services" 
              title="Building Brands That Stand Out" 
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-muted-foreground mt-6 text-sm leading-relaxed"
            >
              We help businesses grow and thrive in the digital space. 
              From digital marketing strategies and expert consultancy 
              to public relations and impactful branding, we cover every 
              angle of your online presence. Our team designs modern 
              websites, manages social media creatively, and crafts 
              engaging content that tells your story.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-body text-muted-foreground mt-4 text-sm leading-relaxed"
            >
              We also run email campaigns that nurture relationships 
              and drive results, while our SEO and corporate branding 
              services boost visibility and leave a lasting impression.
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
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-visible"
            >
              {/* Reviews badge with count-up */}
              <motion.div
                ref={reviewRef}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -left-4 -top-2 z-20 bg-background rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-navy" />
                  <div className="w-6 h-6 rounded-full bg-secondary" />
                </div>
                <span className="font-body text-xs font-medium">{reviewCount}+ Reviews</span>
              </motion.div>
              
              <img src="/13.png" alt="Team member" className="w-full rounded-lg shadow-lg" />
              
              {/* Team members badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -right-4 -bottom-4 z-20 bg-background rounded-lg px-6 py-4 shadow-lg"
              >
                <p className="font-body text-xs text-muted-foreground">Team Members</p>
                <p className="font-display text-2xl font-semibold">10</p>
              </motion.div>

              {/* **ONE tape removed — remaining tape moved to corner** */}
              <FloatingTape color="orange" className="-left-8 -bottom-10" rotation={-95} size="md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedHeading 
            label="How we work" 
            title="Digital Services That Empower Brands" 
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-foreground text-sm leading-relaxed mt-6"
          >
            We deliver tailored digital strategies, from branding and 
            social media to content, SEO, and web design, giving 
            ambitious brands the right tools to grow and stand out 
            online.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 transition-all"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4"
              >
                <card.icon className="w-6 h-6 text-secondary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="relative overflow-visible"
        >
          <FloatingTape color="orange" className="-right-6 -bottom-14" rotation={15} size="lg" />
          <img 
            src="/14.png" 
            alt="Team collaboration" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
