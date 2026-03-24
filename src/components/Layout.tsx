import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Investment', path: '/investment' },
    { name: 'Contact', path: '/contact' },
    { name: 'Brand Strategy', path: '/strategy' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          MJ <span className="italic font-light">Studios</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium nav-item-hover ${
                location.pathname === link.path ? 'text-accent' : 'text-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-paper border-b border-ink/10 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-serif tracking-wider uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ink text-paper py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-serif mb-6">Capturing the <br /><span className="italic">unspoken</span>.</h2>
          <p className="text-paper/60 max-w-md font-light leading-relaxed">
            MJ Studios is a premium photography service dedicated to preserving the most intimate and artistic moments of your life. Based in Nairobi, available worldwide.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] mb-6 text-paper/40">Navigation</h3>
          <ul className="space-y-4 text-sm font-light">
            <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Book a Session</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] mb-6 text-paper/40">Connect</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
          <p className="mt-8 text-xs text-paper/40 font-light">
            © 2026 MJ Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
