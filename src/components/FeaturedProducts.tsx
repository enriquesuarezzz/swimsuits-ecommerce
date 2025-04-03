
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Riviera One-Piece",
      price: 89.99,
      image: "https://images.pexels.com/photos/1386450/pexels-photo-1386450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: true,
      rating: 4.8,
      primaryColor: "bg-turquoise"
    },
    {
      id: 2,
      name: "Coastal Bikini Set",
      price: 69.99,
      image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: true,
      rating: 4.9,
      primaryColor: "bg-coral"
    },
    {
      id: 3,
      name: "Horizon Swim Shorts",
      price: 59.99,
      image: "https://images.pexels.com/photos/1450116/pexels-photo-1450116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: false,
      rating: 4.7,
      primaryColor: "bg-ocean"
    },
    {
      id: 4,
      name: "Palm Beach Two-Piece",
      price: 79.99,
      image: "https://images.pexels.com/photos/6311600/pexels-photo-6311600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: false,
      rating: 4.6,
      primaryColor: "bg-sand"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="editorial-spacing px-8 md:px-16 lg:px-24 bg-gradient-to-b from-white to-turquoise/5" id="new">
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
            <span className="caption text-black/60">NEW ARRIVALS</span>
            <div className="h-px w-10 bg-black/60"></div>
          </div>
          <h2 className="headline mb-12">The <span className="text-coral">Summer</span> Collection</h2>
          <p className="subheadline text-gray-600 max-w-2xl mx-auto">
            Crafted with sustainable materials for the conscious consumer
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-96 image-hover-zoom">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                {product.isNew && (
                  <span className={`absolute top-3 left-3 ${product.primaryColor} text-white text-xs font-normal px-2 py-1`}>
                    NEW ARRIVAL
                  </span>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="icon" className="rounded-none bg-white text-gray-800 hover:bg-turquoise hover:text-white" title="Quick view">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="rounded-none bg-white text-gray-800 hover:bg-coral hover:text-white" title="Add to favorites">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg">{product.name}</h3>
                  <span className="caption">
                    ★ {product.rating}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-light">${product.price}</span>
                  <div className="flex items-center group-hover:translate-x-2 transition-transform text-turquoise">
                    <span className="mr-2 text-sm font-light">Add to Cart</span>
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-24 text-center">
          <Button className="bg-transparent border border-ocean text-ocean hover:bg-ocean hover:text-white rounded-none px-12 py-6 uppercase tracking-widest text-sm">
            View The Complete Collection
          </Button>
        </div>
        
        {/* Page Number */}
        <div className="mt-24 flex justify-end">
          <div className="text-black/60">
            <span className="text-4xl font-display tracking-tighter">02</span>
            <div className="w-10 h-px bg-black/40 my-2"></div>
            <span className="caption">COLLECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
