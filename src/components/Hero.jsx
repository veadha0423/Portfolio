import React from 'react';
import { ShieldCheck, ArrowRight, Mail, Copy, Check } from 'lucide-react';
import './Hero.css';

export default function Hero({ step, copied, onCopyEmail }) {
  return (
    <div className="hero-editorial-center" id="hero">
      {/* Legal Verification Pill */}
      <div className={step >= 3 ? 'fade-visible' : 'fade-hidden'}>
        <div className="legal-badge-pill">
          <ShieldCheck style={{ width: 13, height: 13, color: '#38bdf8' }} />
          <span>Legal Name Verified</span>
        </div>
      </div>

      {/* Legal Name Headline */}
      <div>
        <h1 className={`legal-name-headline ${step >= 3 ? 'fade-visible' : 'fade-hidden'}`}>
          Veadhanayaaham here
        </h1>
      </div>

      {/* Concise Executive Statement */}
      <p 
        className={`executive-summary-text ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
        style={{ transitionDelay: '0.15s' }}
      >
        <strong className="executive-highlight">AI Systems & MLOps Engineer</strong> specializing in enterprise-scale continuous training pipelines on Google Cloud Vertex AI, autonomous multi-agent engines, and high-throughput vector retrieval architectures.
      </p>

      {/* Action Buttons */}
      <div 
        className={`action-cluster ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
        style={{ transitionDelay: '0.25s' }}
      >
        <a href="#production-mlops" className="btn-primary-executive">
          <span>Explore Production Systems</span>
          <ArrowRight style={{ width: 16, height: 16 }} />
        </a>

        <a href="mailto:veadhanayagam@domain.com" className="btn-secondary-executive">
          <Mail style={{ width: 16, height: 16, color: '#38bdf8' }} />
          <span>Contact Direct</span>
        </a>

        <button 
          className="btn-secondary-executive" 
          onClick={onCopyEmail}
          title="Copy email to clipboard"
        >
          {copied ? (
            <Check style={{ width: 16, height: 16, color: '#34d399' }} />
          ) : (
            <Copy style={{ width: 16, height: 16 }} />
          )}
          <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
        </button>
      </div>
    </div>
  );
}
