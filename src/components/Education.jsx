import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Academic Qualifications</span>
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-lead">
            A strong academic track record in Artificial Intelligence, Machine Learning, Mathematics, and Computer Science.
          </p>
        </div>

        <Row className="g-4">
          {education.map((edu, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="glass-card p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="project-badge">{edu.badge}</span>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)' }}
                  >
                    <GraduationCap size={20} color="var(--primary-light)" />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {edu.institution}
                </h3>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--primary-light)', marginBottom: '12px' }}>
                  {edu.degree}
                </h4>

                <div
                  className="px-3 py-2 rounded mb-3"
                  style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)', borderLeft: '3px solid var(--primary)' }}
                >
                  <div className="fw-bold text-white" style={{ fontSize: '0.95rem' }}>
                    {edu.grade}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {edu.period}
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginTop: 'auto' }}>
                  {edu.details}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
