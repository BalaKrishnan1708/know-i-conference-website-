import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Server } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-hub">
            <Link to="hero" smooth={true} className="footer-logo">
              <div className="logo-icon-wrap">
                <Globe size={24} />
              </div>
              <span className="logo-text">ICICRCET<span className="dot">.</span>'26</span>
            </Link>
            <p className="footer-tagline">
              2nd International Conference on Innovative Computing Research and Cutting Edge Technologies. Catalyzing global research through elite academic collaboration.
            </p>
            <div className="social-rack">
              <a href="#" className="soc-link pink"><Facebook size={20} /></a>
              <a href="#" className="soc-link blue"><Twitter size={20} /></a>
              <a href="#" className="soc-link purple"><Instagram size={20} /></a>
              <a href="#" className="soc-link lime"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-info-rack">
            <div className="info-col">
              <h5>NAVIGATION</h5>
              <Link to="about" smooth={true}>About Summit</Link>
              <Link to="tracks" smooth={true}>Innovation Tracks</Link>
              <Link to="dates" smooth={true}>Deadlines</Link>
              <Link to="committee" smooth={true}>Leadership</Link>
            </div>
            
            <div className="info-col address-col">
              <h5>VENUE</h5>
              <p>SRI VENKATESWARA COLLEGE OF ENGINEERING</p>
              <p>POST BAG NO. 1, PENNALUR</p>
              <p>SRIPERUMBUDUR, TAMIL NADU - 602117</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2026 ICICRCET SUMMIT. ALL RIGHTS RESERVED.</p>
          <div className="svce-tag">
            <Server size={14} />
            <span>POWERED BY DEPT. OF CSE, SVCE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrap {
          padding: 100px 0 50px;
          border-top: 1px solid var(--glass-border);
          position: relative;
          background: #000;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2.5fr;
          gap: 6rem;
          margin-bottom: 8rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
          cursor: pointer;
        }

        .logo-icon-wrap {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.8rem;
          letter-spacing: -2px;
          color: white;
        }

        .logo-text .dot { color: var(--neon-pink); }

        .footer-tagline {
          color: var(--text-secondary);
          font-weight: 500;
          line-height: 1.8;
          max-width: 350px;
          margin-bottom: 3rem;
        }

        .social-rack {
          display: flex;
          gap: 1rem;
        }

        .soc-link {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .soc-link.pink:hover { background: var(--neon-pink); box-shadow: 0 0 20px rgba(255, 0, 128, 0.4); border-color: transparent; }
        .soc-link.blue:hover { background: var(--neon-blue); box-shadow: 0 0 20px rgba(0, 234, 255, 0.4); border-color: transparent; }
        .soc-link.purple:hover { background: var(--neon-purple); box-shadow: 0 0 20px rgba(122, 0, 255, 0.4); border-color: transparent; }
        .soc-link.lime:hover { background: var(--neon-lime); box-shadow: 0 0 20px rgba(179, 255, 0, 0.4); color: black; border-color: transparent; }

        .footer-info-rack {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
        }

        .info-col h5 {
          font-weight: 800;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          color: white;
        }

        .info-col a, .info-col p {
          display: block;
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .info-col a:hover { color: var(--neon-blue); }

        .address-col p {
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
        }

        .footer-bottom-bar {
          padding-top: 3rem;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .svce-tag {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--neon-blue);
        }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr; gap: 4rem; }
          .footer-info-rack { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .footer-info-rack { grid-template-columns: 1fr; }
          .footer-bottom-bar { flex-direction: column; gap: 2rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
