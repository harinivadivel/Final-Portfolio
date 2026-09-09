import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Download, Eye, ExternalLink, FileText } from 'lucide-react';

const Resume = () => {
  const { personal } = portfolioData;
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Open resume link or download file
    const link = document.createElement('a');
    link.href = personal.resumePdf;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.download = 'Harini_Vadivel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume">
      <Container className="text-center">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Curriculum Vitae</span>
          <h2 className="section-title">
            My <span className="highlight">Resume</span>
          </h2>
          <p className="section-lead">
            Click the buttons below to preview or download my verified resume detailing academic background,
            internships, projects, and certifications.
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="resume-preview-box">
          <img
            src={personal.resumeImage}
            alt="Harini V Resume Preview"
            className="resume-preview-img"
          />
        </div>

        {/* Download & Action Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button
            onClick={handleDownload}
            className="btn-hire px-4 py-3"
            style={{ fontSize: '1.05rem' }}
          >
            <Download size={20} />
            Download PDF Resume
          </Button>

          <Button
            variant="outline-light"
            onClick={() => setShowModal(true)}
            className="btn-outline-custom px-4 py-3"
            style={{ fontSize: '1.05rem' }}
          >
            <Eye size={20} />
            Preview Full Size
          </Button>

          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-custom px-4 py-3"
            style={{ fontSize: '1.05rem' }}
          >
            <ExternalLink size={20} />
            Open in New Tab
          </a>
        </div>

        {/* Full Size Modal Preview */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          contentClassName="modal-content glass-card text-light"
        >
          <Modal.Header closeButton closeVariant="white" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <Modal.Title className="fw-bold d-flex align-items-center gap-2">
              <FileText size={22} color="var(--primary-light)" />
              Harini V - Official Resume
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-2">
            <img
              src={personal.resumeImage}
              alt="Harini V Full Resume"
              className="img-fluid rounded"
              style={{ maxHeight: '80vh', objectFit: 'contain' }}
            />
          </Modal.Body>
          <Modal.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }} className="justify-content-between">
            <div className="text-muted" style={{ fontSize: '0.88rem' }}>
              CGPA: 9.09 • B.Tech AIML • K.Ramakrishnan College of Engineering
            </div>
            <div className="d-flex gap-2">
              <button onClick={handleDownload} className="btn btn-hire rounded-pill px-3 py-2">
                <Download size={16} className="me-1" /> Download
              </button>
              <Button variant="secondary" onClick={() => setShowModal(false)} className="rounded-pill px-3">
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Resume;
