
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/10 via-sand/10 to-coral/10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-black/60"></div>
            <span className="caption text-black/60">SUBSCRIBE</span>
            <div className="h-px w-10 bg-black/60"></div>
          </div>
          <h2 className="headline text-4xl md:text-5xl lg:text-6xl mb-8">Join Our <span className="text-gradient bg-gradient-to-r from-ocean to-turquoise bg-clip-text text-transparent">Editorial List</span></h2>
          <p className="subheadline text-gray-600 mb-12 max-w-2xl mx-auto">
            Be the first to receive our curated collections, exclusive offers, and editorial features
          </p>
          
          <div className="p-2 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="sm:min-w-[350px] bg-transparent border border-black/20 focus:border-turquoise focus:ring-0 h-14 rounded-none text-lg"
              />
              <Button className="bg-black hover:bg-black/80 text-white h-14 px-10 rounded-none uppercase tracking-widest text-sm">
                Subscribe
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6 font-light">
            By subscribing, you agree to our Privacy Policy and consent to receive our periodic journal.
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute -left-10 top-10 w-20 h-20 rounded-full bg-coral/10 backdrop-blur-sm"></div>
          <div className="absolute -right-10 bottom-10 w-24 h-24 rounded-full bg-turquoise/10 backdrop-blur-sm"></div>
        </motion.div>
      </div>
      
      {/* Page Number */}
      <div className="mt-24 flex justify-end max-w-7xl mx-auto">
        <div className="text-black/60">
          <span className="text-4xl font-display tracking-tighter">04</span>
          <div className="w-10 h-px bg-black/40 my-2"></div>
          <span className="caption">CONNECT</span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
