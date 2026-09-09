import React from 'react';
import { Container } from 'react-bootstrap';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          &copy; {new Date().getFullYear()} Harini Vadivel. All rights reserved.
        </div>
        <div className="d-flex align-items-center gap-3">
          <span style={{ fontSize: '0.88rem' }}>Designed with React & Bootstrap</span>
          <button
            onClick={scrollToTop}
            className="btn footer-scroll-top rounded-circle d-flex align-items-center justify-content-center"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
