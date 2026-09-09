import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle, Presentation, BookOpenCheck } from 'lucide-react';

const Certifications = () => {
  const { certifications, activities } = portfolioData;

  return (
    <section id="certifications">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Credentials & Achievements</span>
          <h2 className="section-title">
            Certificates & <span className="highlight">Workshops</span>
          </h2>
          <p className="section-lead">
            Continuous learning credentials certified by leading industry platforms and university symposiums.
          </p>
        </div>

        {/* Certifications Grid */}
        <Row className="g-3 mb-5">
          {certifications.map((cert, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="glass-card cert-card">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="cert-category-badge">{cert.category}</span>
                    <Award size={18} color="var(--primary-light)" />
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
                <div className="cert-date mt-3 pt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  Issued: {cert.date}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Extra Curricular & Symposiums */}
        <div className="section-title-wrapper mt-5 mb-4">
          <h3 className="section-title" style={{ fontSize: '1.7rem' }}>
            Workshops & <span className="highlight">Symposiums</span>
          </h3>
        </div>

        <Row className="g-4">
          {activities.map((act, idx) => (
            <Col md={4} key={idx}>
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="project-badge">{act.type}</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  {act.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {act.details}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certifications;
