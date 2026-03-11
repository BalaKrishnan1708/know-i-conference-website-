import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, Cpu, Globe, Award, ShieldCheck, School, Users, Presentation } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('conference');

  const content = {
    college: {
      title: "ABOUT THE COLLEGE",
      text: "Sri Venkateswara College of Engineering (Autonomous), a premier self-financing engineering college was established in the year 1985 and is managed by Sri Venkateswara Educational and Health Trust. The college offers 12 under-graduate programs and 7 post-graduate programs in Engineering and Technology. These programs are approved by AICTE and affiliated to Anna University, Chennai. The college attained autonomous status in the year 2016. The college is accredited by National Assessment and Accreditation Council (NAAC) with A+ Grade in the year 2022. The National Board of Accreditation has accredited many of the eligible programs. The college is an ISO 9001:2015 certified institution. The college is situated in serene environment about 37 Kms from Chennai and located in Chennai – Bangalore National Highway (NH4) at Pennalur, Sriperumbudur in Kancheepuram district.",
      icon: <School size={24} />
    },
    conference: {
      title: "ABOUT CONFERENCE",
      text: "The 2nd International Conference on Innovative Computing, Research and Cutting Edge Technologies in Computer Science and Engineering (ICICRCET'26) is an annual event that brings together researchers, scholars, and industry experts in Computer Science and Engineering. Organized by Sri Venkateswara College of Engineering in association with AIMST University, the conference provides a platform for presenting innovative research, fostering industry-academia collaboration, and enhancing skill development among students and faculty. What began as a national conference has since scaled into a prestigious international platform, the conference is spearheaded by Know-I - the department's AI/ML research club - reflecting the department's growing commitment to global academic outreach and research excellence.",
      icon: <Presentation size={24} />
    },
    department: {
      title: "ABOUT THE DEPARTMENT",
      text: "The Department of Computer Science and Engineering, established in 1985, has earned distinguished national and international recognition through the collective efforts of its dedicated faculty, committed support staff, and talented students. The department is equipped with state-of-the-art computing infrastructure and a team of highly qualified faculty specializing in cutting-edge domains such as Artificial Intelligence, Cloud Computing and Data Analytics.\n\nThe department fosters a vibrant culture of research and innovation, actively organizing national and international conferences, workshops, technical seminars, and symposia. Through strong global academic collaborations and industry partnerships, it ensures students are exposed to a truly international learning experience. The department takes pride in a distinguished alumni network, including Padma Shri Prof. V. Kamakoti, Director of IIT Madras — a reflection of its enduring tradition of nurturing exceptional talent.\n\nThe department proudly offers B.E. in Computer Science and Engineering, B.Tech. in Artificial Intelligence and Data Science, M.E. in Computer Science and Engineering, and Ph.D. programs - all committed to shaping technically excellent, ethically grounded, and socially responsible engineers for a rapidly evolving world.",
      icon: <Users size={24} />
    }
  };

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
                ABOUT THE <span className="gradient-text">CONFERENCE</span>
              </h2>
            </motion.div>

            <div className="about-tabs">
              {Object.keys(content).map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {content[tab].icon}
                  <span>{content[tab].title.split(' ').pop()}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="about-description-box glass-panel"
            >
              <h3 className="tab-title">{content[activeTab].title}</h3>
              <p className="tab-text">{content[activeTab].text}</p>
            </motion.div>


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
                <p>To gain national and global recognition as a leader in computer science and engineering driven by innovative research, outstanding education, and the accomplishments of our learners, supported by state-of-the-art resources and a collaborative environment.</p>
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
                <ul className="mission-list">
                  <li>By providing a supportive ecosystem to our learners that fosters continuous learning, education, research, and innovation in computer science and engineering.</li>
                  <li>By enhancing the skills and virtues of our learners, enabling them to understand and address societal needs through advanced technological solutions.</li>
                  <li>By leveraging the experiential learning in the field of computer science and engineering and cutting-edge research to develop innovative solutions for complex engineering and technological challenges at both national and global levels.</li>
                </ul>
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
          gap: 6rem;
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

        .about-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .tab-btn.active {
          background: var(--neon-blue);
          border-color: transparent;
          color: black;
          box-shadow: 0 10px 20px rgba(0, 234, 255, 0.2);
        }

        .about-description-box {
          padding: 3rem;
          margin-bottom: 4rem;
          min-height: 350px;
        }

        .tab-title {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          color: var(--neon-pink);
        }

        .tab-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
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
          margin-right: 5%;
        }

        .mission-box {
          margin-left: 5%;
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

        .mission-list {
          list-style: none;
          padding: 0;
        }

        .mission-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .mission-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--neon-blue);
          font-weight: 800;
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
          .about-tabs { flex-direction: column; }
          .floating-card { padding: 2rem; flex-direction: column; text-align: center; align-items: center; }
          .mission-list li { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default About;

