import React from 'react';
import { RotateCcw } from 'lucide-react';
import './NavBar.css';

export default function Navbar({ step, onReplay }) {
  return (
    <header 
      className={`executive-navbar ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
      style={{ pointerEvents: step >= 4 ? 'auto' : 'none' }}
    >
      <div className="navbar-inner">
        <a href="#hero" className="brand-monogram">
          <div className="brand-badge">V</div>
          <div className="brand-title">Veadhanayaaham</div>
        </a>

        <nav className="nav-links">
          <a href="#impact" className="nav-link-item">Metrics</a>
          <a href="#production-mlops" className="nav-link-item">MLOps Pipeline</a>
          <a href="#agentic-systems" className="nav-link-item">GenAI Engine</a>
          <a href="#competencies" className="nav-link-item">Capabilities</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div className="status-indicator-pill">
            <span className="live-pulse" />
            <span>Available for Architecture Roles</span>
          </div>
          
          <button 
            className="btn-secondary-executive" 
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}
            onClick={onReplay}
            title="Re-run reveal animation"
          >
            <RotateCcw style={{ width: 13, height: 13 }} />
            <span>Replay</span>
          </button>
        </div>
      </div>
    </header>
  );
}