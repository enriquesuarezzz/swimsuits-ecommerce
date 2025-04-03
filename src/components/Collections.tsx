
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Collections = () => {
  const collections = [
    {
      id: 1,
      issue: "VOLUME 01",
      title: "RIVIERA",
      description: "Elegant silhouettes in azure tones",
      image: "https://images.pexels.com/photos/5876663/pexels-photo-5876663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#women",
      color: "from-turquoise/40 to-transparent"
    },
    {
      id: 2,
      issue: "VOLUME 02",
      title: "COASTAL",
      description: "Minimalist designs for the modern man",
      image: "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#men",
      color: "from-coral/40 to-transparent"
    },
    {
      id: 3,
      issue: "VOLUME 03",
      title: "ARCHIPELAGO",
      description: "Accessories for the discerning traveler",
      image: "https://images.pexels.com/photos/1573460/pexels-photo-1573460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#accessories",
      color: "from-ocean/40 to-transparent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="editorial-spacing px-8 md:px-16 lg:px-24 bg-white" id="collections">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-black/60"></div>
            <span className="caption text-black/60">THE COLLECTIONS</span>
            <div className="h-px w-10 bg-black/60"></div>
          </div>
          <h2 className="headline mb-12">This Season's <span className="text-gradient bg-gradient-to-r from-ocean via-turquoise to-coral bg-clip-text text-transparent">Editorials</span></h2>
          <p className="subheadline text-gray-600 max-w-2xl mx-auto">
            Curated selections for distinctive tastes
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {collections.map((collection) => (
            <motion.div 
              key={collection.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="h-[30rem] image-hover-zoom">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <span className="caption block mb-2">{collection.issue}</span>
                <h3 className="text-3xl font-display mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-6">{collection.description}</p>
                <div className="flex items-center group-hover:translate-x-2 transition-transform">
                  <span className="mr-2 font-light">Explore Collection</span>
                  <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1L19 5M19 5L15 9M19 5H1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-32 mx-auto max-w-4xl">
          <div className="pullquote">
            "The essence of style is simplicity against the backdrop of the infinite ocean."
          </div>
          <div className="text-center">
            <span className="byline">CLAIRE THOMSON — CREATIVE DIRECTOR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
