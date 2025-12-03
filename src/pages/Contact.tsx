import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingTape from "@/components/FloatingTape";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [selectedSubject, setSelectedSubject] = useState("general");

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us Directly",
      description: "Let's discuss how our tailored strategies can help your brand thrive online, whether you're a startup or an established business.",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Our doors are always open! Come by anytime to discuss how we can help grow and elevate your brand's presence.",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Reach out to us anytime at our email— we're ready to help you grow your brand and achieve your digital goals.",
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
            Contact us
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            Get in touch with us to discuss your digital marketing needs. Whether you're looking for 
            strategy, branding, or full-service campaigns, our team is ready to help your business grow.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto overflow-visible"
        >
          <FloatingTape color="orange" className="-right-6 -top-6" rotation={45} size="lg" />
          <img 
            src="/6.png" 
            alt="Office space" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border border-border rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-navy p-8 lg:p-12 text-primary-foreground relative overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-display text-xl font-semibold mb-2"
              >
                Contact Information
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-body text-sm text-primary-foreground/70 mb-12"
              >
                Say something to start a live chat!
              </motion.p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <Phone size={18} />
                  <span className="font-body text-sm">+1234567890</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <Mail size={18} />
                  <span className="font-body text-sm">prelusive@gmail.com</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm">123 Takue_thebrain Street Murehwa,<br />Harare Zimbabwe 02156</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center gap-3 mt-16"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                >
                  <Facebook size={14} className="text-secondary-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center"
                >
                  <Instagram size={14} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                >
                  <Mail size={14} className="text-secondary-foreground" />
                </motion.a>
              </motion.div>

              {/* Background circle */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-primary-foreground/5" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary-foreground/5" />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="block font-body text-xs text-muted-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="J"
                      className="w-full border-b border-border bg-transparent py-2 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block font-body text-xs text-muted-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full border-b border-border bg-transparent py-2 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label className="block font-body text-xs text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full border-b border-border bg-transparent py-2 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block font-body text-xs text-muted-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 012 3456 789"
                      className="w-full border-b border-border bg-transparent py-2 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className="block font-body text-xs text-muted-foreground mb-4">Select Subject?</label>
                  <div className="flex flex-wrap gap-4">
                    {["General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"].map((subject, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={selectedSubject === subject + index}
                          onChange={() => setSelectedSubject(subject + index)}
                          className="w-3 h-3 accent-foreground"
                        />
                        <span className="font-body text-xs">{subject}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label className="block font-body text-xs text-muted-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Write your message.."
                    rows={3}
                    className="w-full border-b border-border bg-transparent py-2 font-body text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex justify-end"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-navy text-primary-foreground font-body text-sm font-medium rounded-md border border-navy hover:bg-transparent hover:text-foreground transition-colors"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
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

      <Footer />
    </div>
  );
};

export default Contact;
