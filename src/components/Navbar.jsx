import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowDownToLine } from 'lucide-react';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'education',
        'certifications',
        'resume',
        'contact',
        'connect'
      ];

      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setExpanded(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
    { id: 'connect', label: 'Connect' }
  ];

  return (
    <Navbar
      expand="xl"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? 'shadow-lg' : ''}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="d-flex align-items-center gap-2"
        >
          <img
            src={portfolioData.personal.logo}
            alt="Logo"
            width="34"
            height="34"
            className="rounded-circle"
            style={{ border: '2px solid rgba(16, 185, 129, 0.4)' }}
          />
          <span className="navbar-brand-text">{portfolioData.personal.brand}</span>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-1"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
          style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '8px' }}
        >
          {expanded ? <X size={26} color="var(--primary-light)" /> : <Menu size={26} color="var(--primary-light)" />}
        </button>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-1">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className={`custom-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </Nav.Link>
            ))}

            {/* Quick Resume Download in Nav */}
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('resume');
              }}
              className="nav-cv-btn ms-xl-2 px-3 py-1 rounded-pill d-flex align-items-center gap-1 text-decoration-none"
            >
              <ArrowDownToLine size={14} /> CV
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
