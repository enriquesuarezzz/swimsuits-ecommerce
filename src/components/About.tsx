
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="editorial-spacing px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-black/60"></div>
                <span className="caption text-black/60">THE ETHOS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-light leading-tight mb-8">Ethical Creation, <br/>Timeless Expression</h2>
              <div className="magazine-column mb-12">
                <p className="text-lg leading-relaxed text-gray-600 mb-4">
                  At Sun Kissed, we believe that fashion and sustainability can go hand in hand. Our swimwear is crafted with recycled materials and eco-friendly production processes, without compromising on style or comfort.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  Each piece is designed to make you feel confident and beautiful, while also making a positive impact on our oceans and planet. Our dedication to sustainable practices extends throughout our supply chain, from sourcing materials to packaging.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-turquoise">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905A3.61 3.61 0 018.91 7.5L7 10" />
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-widest">Eco-friendly Materials</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-turquoise">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-widest">Ethically Made</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center mr-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-turquoise">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm uppercase tracking-widest">UV Protection</span>
              </div>
            </div>
            <Button className="bg-transparent border border-coral text-coral hover:bg-coral hover:text-white rounded-none px-10 py-6 uppercase tracking-widest text-sm">
              Read Our Full Story
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sustainable swimwear" 
                className="w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-turquoise flex items-center justify-center text-white">
                <div className="text-center">
                  <span className="block text-3xl font-display">100%</span>
                  <span className="text-xs uppercase tracking-widest">Recycled</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-right">
              <span className="caption text-black/60">PHOTOGRAPHER</span>
              <h4 className="font-display text-lg">Elena Thornton</h4>
            </div>
          </motion.div>
        </div>
        
        {/* Page Number */}
        <div className="mt-24 flex justify-start">
          <div className="text-black/60">
            <span className="text-4xl font-display tracking-tighter">03</span>
            <div className="w-10 h-px bg-black/40 my-2"></div>
            <span className="caption">SUSTAINABILITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
