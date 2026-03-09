import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrap glass-panel">
          <div className="contact-header">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="massive-title"
            >
              GET IN <span className="gradient-text">TOUCH</span>
            </motion.h2>
            <p className="contact-desc">
              Connect with our secretariat for sponsorship, registration, or academic inquiries.
            </p>
          </div>

          <div className="contact-channels">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="channel-card"
            >
              <div className="channel-icon bg-pink"><Mail size={30} /></div>
              <div className="channel-info">
                <h4>EMAIL ENQUIRIES</h4>
                <p>ncrctcse@svce.ac.in</p>
                <a href="mailto:ncrctcse@svce.ac.in" className="channel-link">SEND MAIL <ExternalLink size={14} /></a>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="channel-card"
            >
              <div className="channel-icon bg-blue"><Phone size={30} /></div>
              <div className="channel-info">
                <h4>HOTLINE</h4>
                <p>044-27152000 (EXT 300)</p>
                <a href="tel:04427152000" className="channel-link">CALL NOW <ExternalLink size={14} /></a>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="channel-card"
            >
              <div className="channel-icon bg-purple"><MapPin size={30} /></div>
              <div className="channel-info">
                <h4>LOCATION</h4>
                <p>DEPT. OF CSE, SVCE, CHENNAI, INDIA</p>
                <a href="https://maps.google.com" target="_blank" className="channel-link">VIEW MAP <ExternalLink size={14} /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-wrap {
          padding: 6rem;
          position: relative;
          overflow: hidden;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .contact-desc {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 2rem auto 0;
          font-weight: 500;
        }

        .contact-channels {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .channel-card {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 30px;
          border: 1px solid var(--glass-border);
          transition: all 0.4s var(--ease-expo);
        }

        .channel-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .channel-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 2rem;
        }

        .bg-pink { background: var(--neon-pink); box-shadow: 0 10px 30px rgba(255, 0, 128, 0.3); }
        .bg-blue { background: var(--neon-blue); box-shadow: 0 10px 30px rgba(0, 234, 255, 0.3); }
        .bg-purple { background: var(--neon-purple); box-shadow: 0 10px 30px rgba(122, 0, 255, 0.3); }

        .channel-info h4 {
          font-weight: 800;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          margin-bottom: 0.8rem;
          color: var(--text-secondary);
        }

        .channel-info p {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: white;
          margin-bottom: 2rem;
        }

        .channel-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 0.75rem;
          color: var(--neon-blue);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid transparent;
        }

        .channel-link:hover {
          border-color: currentColor;
        }

        @media (max-width: 1100px) {
          .contact-channels { grid-template-columns: 1fr; gap: 2rem; }
          .contact-wrap { padding: 4rem 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
