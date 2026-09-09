import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { internships } = portfolioData;

  return (
    <section id="experience">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">
            Internship <span className="highlight">Experience</span>
          </h2>
          <p className="section-lead">
            Hands-on industry experience building scalable AI platforms, responsive frontend architectures,
            and robotics sensor systems.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            {internships.map((item, idx) => (
              <div key={idx} className="glass-card timeline-card">
                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <h4 className="timeline-company">{item.company}</h4>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="timeline-period">
                      <Calendar size={14} color="var(--primary-light)" /> {item.period}
                    </span>
                    <span className="timeline-period">
                      <MapPin size={14} color="var(--primary-light)" /> {item.mode}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '16px' }}>
                  {item.description}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-light)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
