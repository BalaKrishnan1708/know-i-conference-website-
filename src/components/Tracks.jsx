import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Cpu, Network, Bot, Dna, Orbit, Leaf, CheckCircle2 } from 'lucide-react';

const tracks = [
  {
    id: "01",
    icon: <BrainCircuit size={48} />,
    title: "Artificial Intelligence and Machine Learning",
    color: "#ff0080",
    topics: [
      "Machine Learning Theory and Algorithms",
      "Deep Learning and Neural Architectures",
      "Generative AI and Foundation Models",
      "Explainable, Trustworthy, and Ethical AI",
      "Computer Vision and Multimodal Learning",
      "AI Applications in Science and Industry"
    ]
  },
  {
    id: "02",
    icon: <Database size={48} />,
    title: "Data Science and Intelligent Systems",
    color: "#00eaff",
    topics: [
      "Big Data Analytics and Scalable Processing",
      "Knowledge Representation and Semantic Systems",
      "Data Engineering and Pipeline Management",
      "Real-Time and Stream Analytics",
      "Data Privacy, Governance, and Security",
      "Decision Support and Intelligent Automation"
    ]
  },
  {
    id: "03",
    icon: <Cpu size={48} />,
    title: "High-Performance and Quantum Computing",
    color: "#7a00ff",
    topics: [
      "Parallel and Distributed Computing",
      "Cloud, Edge, and Heterogeneous Architectures",
      "Performance Optimization and Benchmarking",
      "Quantum Algorithms and Complexity",
      "Quantum Hardware, Error Correction, and Communication",
      "Hybrid Quantum-Classical Systems"
    ]
  },
  {
    id: "04",
    icon: <Network size={48} />,
    title: "Networks, Cybersecurity, and Decentralized Systems",
    color: "#b3ff00",
    topics: [
      "Next-Generation Wireless and Network Architectures",
      "Software-Defined and Virtualized Networking",
      "Cybersecurity, Cryptography, and Privacy",
      "Edge and Fog Computing Networks",
      "Blockchain and Distributed Ledger Technologies",
      "Decentralized Identity, Governance, and Trust"
    ]
  },
  {
    id: "05",
    icon: <Bot size={48} />,
    title: "Cyber-Physical Systems, IoT, and Robotics",
    color: "#ff8c00",
    topics: [
      "IoT Architectures and Embedded Systems",
      "Smart Infrastructure and Industrial Automation",
      "Digital Twins and Cyber-Physical Integration",
      "Autonomous Robotics and Manipulation",
      "Human-Robot Interaction and Collaborative Systems",
      "Swarm Systems and Multi-Agent Coordination"
    ]
  },
  {
    id: "06",
    icon: <Dna size={48} />,
    title: "Bioinformatics and Computational Biology",
    color: "#ff4d4d",
    topics: [
      "Computational Genomics and Molecular Biology",
      "Structural Biology and Drug Discovery",
      "Systems Biology and Multi-Omics",
      "Neuroinformatics and Brain-Computer Interfaces",
      "Precision Medicine and Digital Health",
      "Biomedical Data Management and Clinical Informatics"
    ]
  },
  {
    id: "07",
    icon: <Orbit size={48} />,
    title: "Astroinformatics and Space Systems",
    color: "#00ffff",
    topics: [
      "Computational Astrophysics and Simulations",
      "Machine Learning for Astronomical Surveys",
      "Space Mission Systems and Ground Operations",
      "Exoplanet and Planetary Science",
      "Autonomous Space Vehicles and Navigation",
      "Satellite Networks and Space Communication"
    ]
  },
  {
    id: "08",
    icon: <Leaf size={48} />,
    title: "Sustainability and Green Computing",
    color: "#39ff14",
    topics: [
      "Energy-Efficient Algorithms and Systems",
      "Green Data Centres and Sustainable Infrastructure",
      "Climate and Environmental Modelling",
      "Low-Power and Sustainable Networking",
      "Circular Computing and E-Waste Reduction",
      "Computational Methods for Environmental Monitoring"
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
              Original research contributions are invited in these eight focal areas.
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
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          z-index: 2;
        }

        .expertise-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 0.95rem;
          line-height: 1.4;
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
