import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Innovation & Code</span>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-lead">
            Showcasing real-world engineering solutions spanning generative AI platforms, smart IoT systems,
            and full-stack web applications.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="glass-card project-card">
                <div>
                  <span className="project-badge">{proj.badge}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <h4 className="project-subtitle">{proj.subtitle}</h4>
                </div>

                <p className="project-desc">{proj.description}</p>

                <ul className="project-highlights-list">
                  {proj.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle2 size={16} color="#22c55e" className="flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-tags">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-2 mt-auto pt-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-success d-inline-flex align-items-center gap-1 text-decoration-none px-3 py-2 rounded-pill"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <GithubIcon size={16} /> Code Repository
                  </a>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="d-inline-flex align-items-center gap-1 rounded-pill px-3 py-2"
                    style={{ fontSize: '0.85rem', borderColor: 'rgba(255,255,255,0.2)' }}
                    onClick={() => setSelectedProject(proj)}
                  >
                    Details <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          show={!!selectedProject}
          onHide={() => setSelectedProject(null)}
          centered
          contentClassName="modal-content glass-card text-light"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <Modal.Header closeButton closeVariant="white" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <Modal.Title className="fw-bold d-flex align-items-center gap-2">
              <Sparkles size={20} color="var(--primary-light)" />
              {selectedProject.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className="project-badge mb-3">{selectedProject.badge}</span>
            <p className="text-secondary fw-semibold mb-2">{selectedProject.subtitle}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{selectedProject.description}</p>
            
            <h6 className="fw-bold mt-4 mb-2" style={{ color: 'var(--primary-light)' }}>Key Implementation Highlights:</h6>
            <ul className="project-highlights-list">
              {selectedProject.highlights.map((h, i) => (
                <li key={i} className="text-light mb-2">
                  <CheckCircle2 size={16} color="var(--primary-light)" className="flex-shrink-0 mt-1" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h6 className="fw-bold mt-3 mb-2" style={{ color: 'var(--primary-light)' }}>Technologies Utilized:</h6>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {selectedProject.techStack.map((tech, i) => (
                <span key={i} className="tech-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary-light)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hire d-inline-flex align-items-center gap-2 rounded-pill px-4"
            >
              <GithubIcon size={16} /> View on GitHub
            </a>
            <Button variant="secondary" className="rounded-pill" onClick={() => setSelectedProject(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
