
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add custom cursor on page load
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        
        .custom-cursor {
          width: 30px;
          height: 30px;
          border: 1px solid #5FD4C8;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: width 0.2s, height 0.2s, border-color 0.2s;
          mix-blend-mode: difference;
        }
        
        a:hover ~ .custom-cursor,
        button:hover ~ .custom-cursor {
          width: 60px;
          height: 60px;
          border-color: #FF7F6D;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
