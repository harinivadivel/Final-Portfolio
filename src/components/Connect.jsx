import React from 'react';
import { Container } from 'react-bootstrap';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, FacebookIcon, InstagramIcon } from './Icons';

const Connect = () => {
  const { personal } = portfolioData;

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personal.links.linkedin,
      icon: <LinkedinIcon size={24} />,
      color: '#0a66c2'
    },
    {
      name: 'GitHub',
      url: personal.links.github,
      icon: <GithubIcon size={24} />,
      color: '#f0f6fc'
    },
    {
      name: 'Email',
      url: `mailto:${personal.email}`,
      icon: <Mail size={24} />,
      color: 'var(--primary-light)'
    },
    {
      name: 'Facebook',
      url: personal.links.facebook,
      icon: <FacebookIcon size={24} />,
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      url: personal.links.instagram,
      icon: <InstagramIcon size={24} />,
      color: '#e4405f'
    }
  ];

  return (
    <section id="connect" className="py-5">
      <Container className="text-center">
        <div className="section-title-wrapper mb-4">
          <span className="section-subtitle">Social Profiles</span>
          <h2 className="section-title">
            Connect <span className="highlight">with Me</span>
          </h2>
          <p className="section-lead">
            Get in touch with me through any of the following professional platforms and social networks:
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title={item.name}
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Connect;
