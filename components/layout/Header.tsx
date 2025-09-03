'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Heart className="w-8 h-8 text-primary stroke-2" />
              <div className="absolute -top-1 -right-1 w-4 h-6 border-r-2 border-t-2 border-primary transform rotate-45"></div>
            </div>
            <span className="font-montserrat font-bold text-2xl text-secondary">
              The Initiative
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="font-montserrat font-medium text-secondary hover:text-primary transition-colors duration-200">
                {item.name}
              </a>
            ))}
            <Button className="font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground">
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-secondary hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="block font-montserrat font-medium text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
            <Button className="w-full font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground">
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
