import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, User, ShieldCheck, Mail } from 'lucide-react';

const committee = {
  chiefPatrons: [
    { name: "DR. A. C. MUTHIAH", role: "CHAIRMAN, GOVERNING COUNCIL", org: "SVCE", color: "var(--neon-pink)", initials: "AM" },
    { name: "SHRI. ASHWIN C. MUTHIAH", role: "CHAIRMAN, SPIC LTD / VICE CHAIRMAN, GOVERNING COUNCIL", org: "SVCE", color: "var(--neon-blue)", initials: "ACM" },
    { name: "DR. M. SIVANANDHAM", role: "SECRETARY", org: "SVEHT", color: "var(--neon-purple)", initials: "MS" }
  ],
  patron: [
    { name: "PROF. DR. E.N. GANESH", role: "PRINCIPAL", org: "SVCE", color: "var(--neon-purple)", initials: "EG" }
  ],
  convenors: [
    { name: "DR. R. ANITHA", role: "HOD / CSE", org: "SVCE", color: "var(--neon-lime)", initials: "RA" },
    { name: "DR. N. RAJGANESH", role: "AHOD / CSE", org: "SVCE", color: "#ff8c00", initials: "NR" }
  ],
  coordinators: [
    { name: "MS. R. K. KAPILA VANI", role: "ASST. PROFESSOR", org: "SVCE", color: "var(--neon-blue)", initials: "KV" },
    { name: "MR. P. SELVAMANI", role: "ASST. PROFESSOR", org: "SVCE", color: "var(--neon-pink)", initials: "PS" },
    { name: "MS. V. RADHA", role: "ASST. PROFESSOR", org: "SVCE", color: "var(--neon-purple)", initials: "VR" },
    { name: "MR. V. KRISHNAMOORTHY", role: "ASST. PROFESSOR", org: "SVCE", color: "var(--neon-lime)", initials: "VK" }
  ]
};

const MemberCard = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="member-card glass-panel"
    style={{ '--member-color': member.color }}
  >
    <div className="member-visual">
      <div className="avatar-frame">
        <div className="avatar-initials" style={{ background: `linear-gradient(135deg, ${member.color}, #000)` }}>
          {member.initials}
        </div>
        <div className="avatar-ring" style={{ borderColor: member.color }}></div>
        <div className="verified-badge"><ShieldCheck size={12} /></div>
      </div>
    </div>

    <div className="member-details">
      <div className="member-role-tag" style={{ background: `${member.color}15`, color: member.color }}>
        {member.role}
      </div>
      <h3 className="member-name">{member.name}</h3>
      <div className="member-org-info">
        <span>{member.org}</span>
        <div className="sep-dot"></div>
        <span>COMPUTER SCIENCE AND ENGINEERING</span>
      </div>

      <div className="member-actions">
        <a href="#" className="action-btn"><Linkedin size={16} /></a>
        <a href="#" className="action-btn"><Mail size={16} /></a>
        <a href="#" className="action-btn"><Globe size={16} /></a>
      </div>
    </div>

    <div className="card-decor"></div>
  </motion.div>
);

const Committee = () => {
  return (
    <section id="committee" className="section-padding committee-viewport">
      <div className="container">
        <div className="committee-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="vibrant-label">ORGANIZING BODY</h4>
            <h2 className="title-huge">
              LEADERSHIP <span className="gradient-text">FORCE</span>
            </h2>
            <p className="section-intro">
              The visionaries and academic leaders steering ICICRCET'26 towards global impact.
            </p>
          </motion.div>
        </div>

        <div className="committee-hierarchy">
          {/* Chief Patrons */}
          <div className="hierarchy-row">
            <div className="row-label">CHIEF PATRONS</div>
            <div className="members-grid triple">
              {committee.chiefPatrons.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Patron */}
          <div className="hierarchy-row">
            <div className="row-label">PATRON</div>
            <div className="members-grid single">
              {committee.patron.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Convenors */}
          <div className="hierarchy-row">
            <div className="row-label">CONVENORS</div>
            <div className="members-grid dual">
              {committee.convenors.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>

          {/* Coordinators */}
          <div className="hierarchy-row">
            <div className="row-label">COORDINATORS</div>
            <div className="members-grid quad">
              {committee.coordinators.map((m, i) => <MemberCard key={i} member={m} />)}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .committee-viewport {
          background: radial-gradient(circle at 10% 90%, rgba(255, 0, 128, 0.05) 0%, transparent 40%);
        }

        .committee-header {
          text-align: center;
          margin-bottom: 8rem;
        }

        .section-intro {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-top: 2rem;
          font-weight: 500;
        }

        .committee-hierarchy {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .row-label {
          font-weight: 800;
          letter-spacing: 0.6em;
          color: var(--text-secondary);
          font-size: 0.75rem;
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
        }

        .row-label::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--glass-border);
        }

        .members-grid {
          display: grid;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dual { grid-template-columns: repeat(2, 1fr); max-width: 1000px; }
        .triple { grid-template-columns: repeat(3, 1fr); max-width: 1200px; }
        .single { grid-template-columns: 1fr; max-width: 500px; }
        .quad { grid-template-columns: repeat(2, 1fr); }

        @media (min-width: 1200px) {
           .quad { grid-template-columns: repeat(4, 1fr); }
        }

        .member-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: all 0.5s var(--ease-expo);
          overflow: hidden;
        }

        .member-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--member-color);
        }

        .member-visual {
          margin-bottom: 2rem;
        }

        .avatar-frame {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .avatar-initials {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          color: white;
          position: relative;
          z-index: 2;
        }

        .avatar-ring {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1px solid;
          border-radius: 50%;
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .member-card:hover .avatar-ring {
          transform: scale(1.1);
          opacity: 1;
        }

        .verified-badge {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 24px;
          height: 24px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          border: 2px solid var(--dark-bg);
        }

        .member-role-tag {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .member-name {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          line-height: 1.2;
        }

        .member-org-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .sep-dot {
          width: 3px;
          height: 3px;
          background: var(--glass-border);
          border-radius: 50%;
        }

        .member-actions {
          display: flex;
          gap: 1.2rem;
        }

        .action-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          color: white;
          background: var(--member-color);
          transform: scale(1.1);
        }

        .card-decor {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 60px;
          height: 60px;
          background: var(--member-color);
          filter: blur(40px);
          opacity: 0.05;
          pointer-events: none;
        }

        @media (max-width: 968px) {
          .dual, .quad, .triple { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 600px) {
          .dual, .quad, .single { grid-template-columns: 1fr; }
          .member-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Committee;
