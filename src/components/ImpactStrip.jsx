import React from 'react';
import './ImpactStrip.css';

export default function ImpactStrip({ step }) {
  return (
    <div 
      id="impact"
      className={`executive-impact-strip ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
      style={{ transitionDelay: '0.35s' }}
    >
      <div className="impact-counter-card">
        <span className="impact-number" style={{ color: '#38bdf8' }}>AUC &ge; 0.80</span>
        <span className="impact-label">Automated Quality Gate Standard</span>
      </div>
      <div className="impact-counter-card">
        <span className="impact-number" style={{ color: '#34d399' }}>80% Less</span>
        <span className="impact-label">Manual Continuous Retraining Effort</span>
      </div>
      <div className="impact-counter-card">
        <span className="impact-number" style={{ color: '#a855f7' }}>10,000+</span>
        <span className="impact-label">Proprietary RAG Documents Indexed</span>
      </div>
      <div className="impact-counter-card">
        <span className="impact-number" style={{ color: '#f59e0b' }}>0 Downtime</span>
        <span className="impact-label">Canary Model Deployments on Vertex AI</span>
      </div>
    </div>
  );
}
