import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Laptop, Shield, User, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-viewport">
      <div className="hero-geometric-decor">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
      </div>

      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hero-badge"
        >
          <Sparkles size={16} className="text-yellow-400" />
          <span>APRIL 16, 2026 • VIRTUAL SUMMIT</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-main-title">
            <span className="title-top">GLOBAL SUMMIT ON</span>
            <span className="gradient-text title-focus">ICICRCET'26</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-tagline"
        >
          2nd International Conference on Innovative Computing, Research and Cutting Edge Technologies in Computer Science and Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-actions"
        >
          <button className="btn-modern btn-primary">
            RESERVE YOUR SPOT <ArrowRight size={20} />
          </button>
          <div className="brochure-btn">
            <div className="brochure-icon">
              <Download size={20} />
            </div>
            <span>DOWNLOAD BROCHURE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="partner-strip glass-panel"
        >
          <div className="partner-label">PRESENTED BY</div>
          <div className="logos-wrap">
            <div className="logo-item">SVCE</div>
            <div className="logo-item">AIMST</div>
            <div className="logo-item know-i">
              <Brain size={20} className="text-[#ff0080]" />
              KNOW-I
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-viewport {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          overflow: hidden;
        }

        .hero-geometric-decor {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          filter: blur(100px);
          opacity: 0.4;
        }

        .circle-1 {
          top: -10%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: var(--neon-purple);
          border-radius: 50%;
        }

        .circle-2 {
          bottom: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: var(--neon-pink);
          border-radius: 50%;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          border: 1px solid var(--glass-border);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          margin-bottom: 2.5rem;
          color: var(--neon-blue);
        }

        .hero-main-title {
          font-family: var(--font-heading);
          line-height: 0.9;
          margin-bottom: 2rem;
        }

        .title-top {
          display: block;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          color: var(--text-secondary);
        }

        .title-focus {
          display: block;
          font-size: clamp(4rem, 15vw, 10rem);
          font-weight: 900;
          letter-spacing: -5px;
        }

        .hero-tagline {
          max-width: 800px;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: 4rem;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .brochure-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .brochure-btn:hover {
          color: var(--neon-pink);
        }

        .brochure-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
        }

        .brochure-btn span {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
        }

        .partner-strip {
          padding: 1.5rem 3rem;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .partner-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
        }

        .logos-wrap {
          display: flex;
          align-items: center;
          gap: 3rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.2rem;
        }

        .know-i {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: white;
        }

        @media (max-width: 768px) {
          .title-focus { font-size: 4.5rem; letter-spacing: -2px; }
          .hero-badge { font-size: 0.7rem; padding: 0.5rem 1.2rem; margin-bottom: 2rem; }
          .hero-tagline { margin-bottom: 3rem; }
          .hero-actions {
            flex-direction: column;
            gap: 2rem;
          }
          .partner-strip {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2.5rem 1.5rem;
          }
          .logos-wrap {
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .title-focus { font-size: 3.5rem; }
          .hero-main-title { margin-bottom: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
