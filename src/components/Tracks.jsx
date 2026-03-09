import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Radio, ShieldAlert, Cpu, Layers, CheckCircle2 } from 'lucide-react';

const tracks = [
  {
    id: "01",
    icon: <BrainCircuit size={48} />,
    title: "Computational Intelligence",
    color: "#ff0080",
    topics: [
      "Artificial Intelligence", "Machine Learning", "Deep Learning", 
      "Natural Language Processing", "Computational Optimization", 
      "Robotics", "Text Mining", "Web Mining", "Visualization Techniques"
    ]
  },
  {
    id: "02",
    icon: <Radio size={48} />,
    title: "Ambient Intelligence",
    color: "#00eaff",
    topics: [
      "Data Science & Analytics", "Smart Cities", "Affective Computing", 
      "Context Aware Pervasive Systems", "Intelligent Transportation"
    ]
  },
  {
    id: "03",
    icon: <ShieldAlert size={48} />,
    title: "Cybsersecurity & Trust",
    color: "#7a00ff",
    topics: [
      "Biometrics", "Internet Security", "Cloud Security", 
      "Secure Transactions", "Advanced Cryptography", "Cyber Security"
    ]
  },
  {
    id: "04",
    icon: <Cpu size={48} />,
    title: "Advanced Computing",
    color: "#b3ff00",
    topics: [
      "Cloud Computing", "Edge Computing", "Quantum Computing", 
      "High Performance Computing", "Bio-Inspired Computing", "Human Centered Computing"
    ]
  },
  {
    id: "05",
    icon: <Layers size={48} />,
    title: "Next-Gen Technologies",
    color: "#ff8c00",
    topics: [
      "Virtualization Techniques", "Computer Vision", "BCI Interface", 
      "AR / VR Realities", "Block Chain", "Metaverse"
    ]
  }
];

const Tracks = () => {
  return (
    <section id="tracks" className="section-padding background-dots">
      <div className="container">
        <div className="tracks-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="vibrant-label">INNOVATION DOMAINS</h4>
            <h2 className="title-huge">
              CONFERENCE <span className="gradient-text">TRACKS</span>
            </h2>
            <p className="section-intro-alt">
              Original research contributions are invited in these five focal areas.
            </p>
          </motion.div>
        </div>

        <div className="tracks-vertical-stack">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="track-strip glass-panel"
              style={{ '--track-accent': track.color }}
            >
              <div className="track-main-info">
                <div className="track-identity">
                  <span className="track-idx">{track.id}</span>
                  <div className="track-icon-sq" style={{ background: track.color }}>
                    {track.icon}
                  </div>
                </div>
                <h3 className="track-name">{track.title}</h3>
              </div>

              <div className="track-expertise">
                {track.topics.map((topic, i) => (
                  <div key={i} className="expertise-item">
                    <CheckCircle2 size={16} className="text-[#00eaff]" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              
              <div className="track-hover-bg" style={{ background: track.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .background-dots {
          background-image: radial-gradient(var(--glass-border) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .tracks-header {
          text-align: center;
          margin-bottom: 8rem;
        }

        .section-intro-alt {
          max-width: 600px;
          margin: 2rem auto 0;
          font-size: 1.25rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .tracks-vertical-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .track-strip {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          padding: 3rem 4rem;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s var(--ease-expo);
        }

        .track-strip:hover {
          transform: scale(1.02);
          border-color: var(--track-accent);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .track-main-info {
          display: flex;
          align-items: center;
          gap: 3rem;
          z-index: 2;
        }

        .track-identity {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .track-idx {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--text-secondary);
          opacity: 0.5;
        }

        .track-icon-sq {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .track-name {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .track-expertise {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          z-index: 2;
        }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .track-strip:hover .expertise-item {
          color: white;
        }

        .track-hover-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.4s ease;
          mix-blend-mode: overlay;
          z-index: 1;
        }

        .track-strip:hover .track-hover-bg {
          opacity: 0.05;
        }

        @media (max-width: 1200px) {
          .track-strip { grid-template-columns: 1fr; gap: 3rem; padding: 3rem; }
          .track-expertise { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .track-name { font-size: 1.5rem; }
          .track-icon-sq { width: 60px; height: 60px; }
          .track-expertise { grid-template-columns: 1fr; gap: 1rem; }
          .track-main-info { gap: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Tracks;
