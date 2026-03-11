import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Tracks', to: 'tracks' },
    { name: 'Timeline', to: 'dates' },
    { name: 'Committee', to: 'committee' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">



        {/* Desktop Links & Partner Logos */}
        <div className="nav-desktop">
          <div className="nav-partner-logos">
            <img src="/logo1.png" alt="SVCE" className="nav-logo-partner" />
            <img src="/logo2.png" alt="AMIST" className="nav-logo-partner" />
            <img src="/logo.png" alt="ICICRCET" className="nav-logo-partner" />
          </div>
          <div className="nav-links-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-100}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                {link.name}
                <div className="underline"></div>
              </Link>
            ))}
          </div>
          <button className="btn-modern btn-primary nav-btn">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
          >
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link"
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-modern btn-primary w-full mt-4">
                REGISTER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s var(--ease-expo);
          padding: 2rem 0;
        }

        .fixed-nav.scrolled {
          padding: 1rem 0;
          background: rgba(2, 2, 5, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-text {
          cursor: pointer;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .brand-text .gradient-text {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -1px;
        }

        @media (max-width: 768px) {
          .brand-text .gradient-text { font-size: 1.2rem; }
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .nav-partner-logos {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-right: 2rem;
          border-right: 1px solid var(--glass-border);
        }

        .nav-logo-partner {
          height: 40px;
          width: auto;
          filter: brightness(1.2);
          transition: transform 0.3s ease;
        }

        .nav-logo-partner:hover {
          transform: scale(1.1);
        }

        .nav-links-wrap {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: white;
        }

        .underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--neon-blue);
          transition: width 0.3s ease;
        }

        .nav-link:hover .underline, .nav-link.active .underline {
          width: 100%;
        }

        .nav-btn {
          padding: 0.7rem 1.8rem;
          font-size: 0.8rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .mobile-toggle { display: block; }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: rgba(2, 2, 5, 0.95);
          backdrop-filter: blur(40px);
          z-index: 1001;
          padding: 6rem 2rem;
          border-left: 1px solid var(--glass-border);
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-link {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          font-family: var(--font-heading);
        }

        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
      `}</style>
    </nav>
  );
};

export default Navbar;
