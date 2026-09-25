import React from 'react';
import { Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer({ step }) {
  return (
    <footer 
      className={`executive-footer ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
      style={{ transitionDelay: '0.65s' }}
    >
      <div>
        <div>
          &copy; {new Date().getFullYear()} Veadhanayaaham &mdash; AI Systems & MLOps Engineering
        </div>
        <div className="footer-attribution">
          <Sparkles style={{ width: 11, height: 11, color: 'var(--cyan-accent)' }} />
          <span>Built with the help of Gemini 3.8 flash</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="mailto:veadhanayagam@domain.com" className="footer-contact-link">
          veadhanayagam@domain.com
        </a>
      </div>
    </footer>
  );
}
