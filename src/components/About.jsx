import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Cpu, Globe, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding about-viewport">
      <div className="container">
        <div className="about-layout">
          {/* Left Side: Text and Stats */}
          <div className="about-main">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-header"
            >
              <h4 className="vibrant-label">ESTABLISHED INNOVATION</h4>
              <h2 className="title-huge">
                DISCOVER THE <span className="gradient-text">SUMMIT</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="about-description"
            >
              <p className="lead-para">
                The 2nd International Conference on Innovative Computing Research (ICICRCET) stands as a beacon for global technological advancement. 
              </p>
              <p className="side-para">
                Organized by the Department of Computer Science at SVCE, we converge the brightest researchers to solve the world's most complex engineering challenges through collective intelligence.
              </p>
            </motion.div>

            <div className="about-stats-grid">
              <div className="mini-stat">
                < Award className="text-[#ff0080]" size={24} />
                <div className="mini-stat-text">
                  <h5>TOP-TIER</h5>
                  <p>Journal Selection</p>
                </div>
              </div>
              <div className="mini-stat">
                < Globe className="text-[#00eaff]" size={24} />
                <div className="mini-stat-text">
                  <h5>GLOBAL</h5>
                  <p>Networking Hub</p>
                </div>
              </div>
              <div className="mini-stat">
                < ShieldCheck className="text-[#b3ff00]" size={24} />
                <div className="mini-stat-text">
                  <h5>ELITE</h5>
                  <p>Peer Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Vision/Mission Boxes */}
          <div className="about-visuals">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="floating-card vision-box glass-panel"
            >
              <div className="box-icon-wrap bg-pink">
                <Target size={32} />
              </div>
              <div className="box-content">
                <h3>VISION</h3>
                <p>To catalyze a new era of engineering excellence through decentralized innovation and global research transparency.</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="floating-card mission-box glass-panel"
            >
              <div className="box-icon-wrap bg-blue">
                < Zap size={32} />
              </div>
              <div className="box-content">
                <h3>MISSION</h3>
                <p>Equipping the next generation of pioneers with cutting-edge tools and strategic industry-academia partnerships.</p>
              </div>
            </motion.div>
            
            {/* Background elements */}
            <div className="visual-decor"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-viewport {
          position: relative;
          background: radial-gradient(circle at 100% 50%, rgba(122, 0, 255, 0.05) 0%, transparent 50%);
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 8rem;
          align-items: center;
        }

        .vibrant-label {
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--neon-pink);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .title-huge {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          margin-bottom: 3rem;
        }

        .about-description {
          max-width: 650px;
          margin-bottom: 4rem;
        }

        .lead-para {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .side-para {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          font-weight: 500;
        }

        .about-stats-grid {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .mini-stat {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .mini-stat-text h5 {
          font-size: 0.9rem;
          font-weight: 800;
          color: white;
          letter-spacing: 0.1em;
        }

        .mini-stat-text p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .about-visuals {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .floating-card {
          padding: 3rem;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          transition: all 0.5s var(--ease-expo);
          z-index: 2;
        }

        .floating-card:hover {
          transform: translateY(-10px) rotate(-1deg);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .vision-box {
          margin-right: 15%;
        }

        .mission-box {
          margin-left: 15%;
        }

        .box-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .bg-pink { background: var(--neon-pink); box-shadow: 0 10px 30px rgba(255, 0, 128, 0.3); }
        .bg-blue { background: var(--neon-blue); box-shadow: 0 10px 30px rgba(0, 234, 255, 0.3); }

        .box-content h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          letter-spacing: 0.1em;
        }

        .box-content p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .visual-decor {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          border: 1px dashed var(--glass-border);
          border-radius: 50%;
          z-index: 1;
        }

        @media (max-width: 1200px) {
          .about-layout { grid-template-columns: 1fr; gap: 6rem; }
          .vision-box, .mission-box { margin: 0; }
        }

        @media (max-width: 768px) {
          .title-huge { font-size: 3rem; }
          .lead-para { font-size: 1.2rem; }
          .floating-card { padding: 2rem; flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>
    </section>
  );
};

export default About;
