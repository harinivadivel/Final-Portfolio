import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { whatIDo } = portfolioData;

  return (
    <section id="about">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title">
            What <span className="highlight">I Do</span>
          </h2>
          <p className="section-lead">
            I am a skilled and passionate developer with a strong foundation in Artificial Intelligence,
            Machine Learning, and Modern Web Development. I specialize in designing intelligent architectures,
            responsive user interfaces, and robust backend integrations.
          </p>
        </div>

        <Row className="g-4">
          {whatIDo.map((item, index) => (
            <Col md={4} key={index}>
              <div className="glass-card pillar-card">
                <div className="pillar-icon-box">
                  <img src={item.icon} alt={item.title} className="pillar-img" />
                </div>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
