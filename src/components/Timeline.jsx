import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Timer, Bell, CheckCircle } from 'lucide-react';

const dates = [
  {
    date: "APRIL 05, 2026",
    title: "Submission Deadline",
    desc: "Last call for full paper submissions for review.",
    accent: "var(--neon-pink)",
    icon: <Timer size={24} />
  },
  {
    date: "APRIL 09, 2026",
    title: "Selection Intimation",
    desc: "Notification of paper acceptance status.",
    accent: "var(--neon-blue)",
    icon: <Bell size={24} />
  },
  {
    date: "APRIL 11, 2026",
    title: "Registration Closing",
    desc: "Final window to secure your spot for the conference.",
    accent: "var(--neon-purple)",
    icon: <CheckCircle size={24} />
  },
  {
    date: "APRIL 16, 2026",
    title: "Conference Genesis",
    desc: "The main event begins Online (Virtual Mode).",
    accent: "var(--neon-lime)",
    icon: <Calendar size={24} />,
    glow: true
  }
];

const Timeline = () => {
  return (
    <section id="dates" className="section-padding">
      <div className="container">
        <div className="timeline-grid">
          <div className="timeline-sticky-head">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="title-vertical">
                KEY <span className="gradient-text">DATES</span>
              </h2>
              <p className="timeline-subtitle">
                Mark your calendars for clinical precision in project delivery.
              </p>
            </motion.div>
          </div>

          <div className="timeline-items">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="date-card glass-panel"
                style={{ '--accent': item.accent }}
              >
                <div className="date-visual">
                  <div className="date-icon" style={{ background: item.accent }}>
                    {item.icon}
                  </div>
                  <div className="date-line"></div>
                </div>

                <div className="date-content">
                  <div className="date-stamp" style={{ color: item.accent }}>{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {item.glow && <div className="card-glow" style={{ background: item.accent }}></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 6rem;
        }

        .timeline-sticky-head {
          position: sticky;
          top: 150px;
          height: fit-content;
        }

        .title-vertical {
          font-size: 6rem;
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -3px;
          margin-bottom: 2rem;
        }

        .timeline-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .date-card {
          display: flex;
          gap: 3rem;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s var(--ease-expo);
        }

        .date-card:hover {
          transform: translateX(15px);
          border-color: var(--accent);
        }

        .date-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .date-icon {
          width: 60px;
          height: 60px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .date-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom, var(--accent), transparent);
          opacity: 0.3;
        }

        .date-stamp {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.2em;
          margin-bottom: 0.8rem;
        }

        .date-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          color: white;
        }

        .date-content p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          filter: blur(100px);
          opacity: 0.1;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .timeline-sticky-head { position: static; }
          .title-vertical { font-size: 4rem; }
          .date-card { padding: 2rem; gap: 2rem; }
        }

        @media (max-width: 600px) {
          .date-card { flex-direction: column; }
          .date-visual { flex-direction: row; }
          .date-line { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
