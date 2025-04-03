
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
      {/* Hero Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-sandy-shore-1161-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/70 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="byline text-white/80 mb-4 inline-block">SUMMER ISSUE • 2025</span>
            <h1 className="headline text-white mb-8">
              <span className="text-gradient bg-gradient-to-r from-coral via-sand to-turquoise bg-clip-text text-transparent block">THE OCEANIC</span> 
              EDITORIAL
            </h1>
            <p className="subheadline text-white/90 mb-16 max-w-xl">
              A curated collection of sustainable swimwear 
              for the modern aesthetic
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-transparent border border-white text-white hover:bg-white/20 rounded-none px-10 py-7 text-base transform transition-transform hover:translate-x-2">
                SHOP THE ISSUE
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 rounded-none px-10 py-7 text-base transform transition-transform hover:translate-x-2">
                READ THE FEATURES
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Page Number */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-10 text-white/80"
      >
        <span className="text-5xl font-display tracking-tighter">01</span>
        <div className="w-10 h-px bg-white/40 my-2"></div>
        <span className="caption">COVER</span>
      </motion.div>
      
      {/* Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-1/2 -right-10 transform -rotate-90 origin-left"
      >
        <span className="byline text-white/80">SUMMER • 2025</span>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-10 flex items-center text-white/80"
      >
        <div className="h-px w-10 bg-white/60 mr-4"></div>
        <span className="caption">SCROLL DOWN</span>
      </motion.div>
    </section>
  );
};

export default Hero;
