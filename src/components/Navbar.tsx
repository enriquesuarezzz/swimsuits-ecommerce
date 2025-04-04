import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-8 md:px-16 lg:px-24 fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-light tracking-wide text-ocean"
          >
            OCEANIC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#women"
              className="text-sm uppercase tracking-widest hover:text-turquoise transition-colors"
            >
              Women
            </a>
            <a
              href="#men"
              className="text-sm uppercase tracking-widest hover:text-turquoise transition-colors"
            >
              Men
            </a>
            <a
              href="#collections"
              className="text-sm uppercase tracking-widest hover:text-turquoise transition-colors"
            >
              Collections
            </a>
            <a
              href="#new"
              className="text-sm uppercase tracking-widest hover:text-turquoise transition-colors"
            >
              Editorial
            </a>
          </div>
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="hidden md:inline-block text-sm uppercase tracking-widest hover:text-turquoise transition-colors"
          >
            Search
          </a>
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-md z-50 p-8 mt-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#women" className="text-sm uppercase tracking-widest py-2">
              Women
            </a>
            <a href="#men" className="text-sm uppercase tracking-widest py-2">
              Men
            </a>
            <a
              href="#collections"
              className="text-sm uppercase tracking-widest py-2"
            >
              Collections
            </a>
            <a href="#new" className="text-sm uppercase tracking-widest py-2">
              Editorial
            </a>
            <a href="#" className="text-sm uppercase tracking-widest py-2">
              Search
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
