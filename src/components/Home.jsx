import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ArrowRight, Award, GraduationCap, Briefcase } from 'lucide-react';

const Home = () => {
  const { personal, stats } = portfolioData;

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Hero Text */}
          <Col lg={7} className="text-start">
            <div className="hero-status-badge">
              <span className="pulse-dot"></span>
              <Sparkles size={15} color="var(--primary-light)" />
              <span style={{ fontSize: '0.86rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                AIML Enthusiast & Full-Stack Developer
              </span>
            </div>

            <h1 className="hero-greeting">Hello,</h1>
            <h2 className="hero-name">
              I'm <span className="hero-name-highlight">{personal.shortName}</span>,
              <br />
              <span style={{ fontSize: '2.4rem', fontWeight: 700, color: '#f8fafc' }}>
                Student of AI & ML
              </span>
            </h2>

            <p className="hero-subtitle">
              {personal.role}
            </p>

            <p className="hero-bio">
              {personal.objective}
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#contact" onClick={scrollToContact} className="btn-hire">
                <img src={personal.hireMeIcon} alt="Hire Me" width="26" height="26" />
                Hire Me
              </a>
              <a href="#projects" onClick={scrollToProjects} className="btn-outline-custom">
                Explore Projects <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <Row className="g-2 pt-3">
              {stats.map((st, i) => (
                <Col xs={6} sm={3} key={i}>
                  <div className="stat-card">
                    <div className="stat-value">{st.value}</div>
                    <div className="stat-label">{st.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Hero Image */}
          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <div className="profile-avatar-container">
              <div className="profile-avatar-glow"></div>
              <img
                src={personal.avatar}
                alt={personal.name}
                className="profile-avatar-img img-fluid"
              />
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x px-3 py-2 rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
                style={{
                  background: 'rgba(11, 16, 28, 0.92)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  backdropFilter: 'blur(12px)',
                  whiteSpace: 'nowrap',
                  zIndex: 2,
                  marginBottom: '-12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                }}
              >
                <GraduationCap size={18} color="var(--primary-light)" />
                <span style={{ fontSize: '0.84rem', color: '#f8fafc', fontWeight: 600, letterSpacing: '0.01em' }}>
                  B.Tech AIML • CGPA 9.09
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
