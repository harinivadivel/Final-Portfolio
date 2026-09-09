import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Code2, Globe2, Cpu, Users } from 'lucide-react';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">
            Professional <span className="highlight">Skills</span>
          </h2>
          <p className="section-lead">
            A comprehensive overview of my programming expertise, web frameworks, artificial intelligence
            competencies, and collaborative capabilities.
          </p>
        </div>

        <Row className="g-4">
          {/* Programming Languages */}
          <Col lg={4} md={6}>
            <div className="glass-card p-4 h-100">
              <h3 className="skill-category-title">
                <Code2 size={22} color="#22c55e" />
                Programming
              </h3>
              {skills.programming.map((skill, idx) => (
                <div key={idx} className="skill-bar-wrapper">
                  <div className="skill-name-row">
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Web Technologies */}
          <Col lg={4} md={6}>
            <div className="glass-card p-4 h-100">
              <h3 className="skill-category-title">
                <Globe2 size={22} color="#22c55e" />
                Web Technology
              </h3>
              {skills.webTechnologies.map((skill, idx) => (
                <div key={idx} className="skill-bar-wrapper">
                  <div className="skill-name-row">
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* AI / ML & Tools */}
          <Col lg={4} md={12}>
            <div className="glass-card p-4 h-100">
              <h3 className="skill-category-title">
                <Cpu size={22} color="#22c55e" />
                AI, ML & DevOps
              </h3>
              {skills.aiAndTools.map((skill, idx) => (
                <div key={idx} className="skill-bar-wrapper">
                  <div className="skill-name-row">
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Soft Skills Section */}
        <div className="glass-card p-4 mt-4 text-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <Users size={22} color="#22c55e" />
            <h3 className="skill-category-title mb-0">Soft Skills & Competencies</h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {skills.softSkills.map((soft, idx) => (
              <span key={idx} className="soft-skill-pill">
                ✦ {soft}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
