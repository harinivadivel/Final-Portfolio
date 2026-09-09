import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * Turn an EmailJS failure into a readable, user-friendly string so the real
 * reason (status + server message) is never hidden behind a generic message.
 */
const describeEmailError = (err) => {
  // EmailJSResponseStatus has shape { status: number, text: string }
  if (err && typeof err.status === 'number') {
    let detail = typeof err.text === 'string' ? err.text : '';
    try {
      // Server text is sometimes JSON like {"message": "..."}
      const parsed = JSON.parse(detail);
      if (parsed && typeof parsed.message === 'string') detail = parsed.message;
    } catch {
      /* keep raw text */
    }
    return detail
      ? `EmailJS error ${err.status}: ${detail}`
      : `EmailJS error ${err.status}`;
  }
  if (err && typeof err.message === 'string') return err.message;
  return 'Unexpected error occurred';
};

const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const templateParams = {
      from_name: formData.name,
      your_email: formData.email,
      subject: formData.subject.trim() || 'Portfolio Contact Message',
      message: formData.message
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setError(
        `Sorry, your message could not be sent right now. ${describeEmailError(
          err
        )} — please try again in a few minutes, or email me directly at ${personal.email}.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <Container>
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="highlight">Me</span>
          </h2>
          <p className="section-lead">
            Please fill out the form below or reach out directly to discuss internship, full-time opportunities,
            or collaborative technical projects.
          </p>
        </div>

        {/* Quick Contact Info Cards */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <div className="glass-card contact-info-card">
              <div className="contact-icon-bubble">
                <Mail size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>Email Address</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '8px' }}>Direct inquiries</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-decoration-none fw-bold"
                style={{ color: 'var(--primary-light)', wordBreak: 'break-all', fontSize: '0.92rem' }}
              >
                {personal.email}
              </a>
            </div>
          </Col>

          <Col md={4}>
            <div className="glass-card contact-info-card">
              <div className="contact-icon-bubble">
                <Phone size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>Phone Number</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>Call or WhatsApp</p>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="text-decoration-none fw-bold"
                style={{ color: 'var(--primary-light)', fontSize: '0.92rem' }}
              >
                {personal.phone}
              </a>
            </div>
          </Col>

          <Col md={4}>
            <div className="glass-card contact-info-card">
              <div className="contact-icon-bubble">
                <MapPin size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>Location</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>Tamil Nadu, India</p>
              <span className="fw-bold" style={{ color: 'var(--primary-light)', fontSize: '0.92rem' }}>
                {personal.location}
              </span>
            </div>
          </Col>
        </Row>

        {/* Interactive Contact Form */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="glass-card p-4 p-md-5">
              {submitted && (
                <Alert variant="success" className="d-flex align-items-center gap-2 mb-4 bg-success bg-opacity-25 text-light border-success">
                  <CheckCircle2 size={22} color="#22c55e" />
                  <div>
                    <strong>Thank you!</strong> Your message has been sent successfully. I will get back to you soon!
                  </div>
                </Alert>
              )}

              {error && (
                <Alert variant="danger" className="d-flex align-items-center gap-2 mb-3 bg-danger bg-opacity-25 text-light border-danger">
                  <XCircle size={22} color="#ef4444" />
                  <div>{error}</div>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light fw-semibold" style={{ fontSize: '0.9rem' }}>
                        Your Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light fw-semibold" style={{ fontSize: '0.9rem' }}>
                        Your Email <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-light fw-semibold" style={{ fontSize: '0.9rem' }}>
                        Subject
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject (e.g. Internship Opportunity, Project Inquiry)"
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="text-light fw-semibold" style={{ fontSize: '0.9rem' }}>
                        Message <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        required
                        className="custom-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="text-center pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="btn-hire px-5 py-3 w-100 justify-content-center"
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
