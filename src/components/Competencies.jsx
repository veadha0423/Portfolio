import React from 'react';
import { Terminal, Activity, Cpu, Server, Lock } from 'lucide-react';
import './Competencies.css';

export default function Competencies({ step }) {
  return (
    <div 
      id="competencies"
      className={`section-container ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
      style={{ transitionDelay: '0.55s' }}
    >
      <div className="section-meta-header">
        <span className="section-eyebrow">
          <Terminal style={{ width: 13, height: 13 }} />
          <span>02 // ARCHITECTURAL COMPETENCIES</span>
        </span>
        <h2 className="section-headline">Technical Specializations</h2>
        <p className="section-subtext">
          Core competencies honed across enterprise cloud AI deployments.
        </p>
      </div>

      <div className="competency-grid">
        <div className="competency-card">
          <div className="competency-icon-wrap">
            <Activity style={{ width: 18, height: 18 }} />
          </div>
          <h3 className="competency-title">MLOps & Pipelines</h3>
          <div className="competency-pills-list">
            <span className="competency-mini-pill">Vertex AI Pipelines</span>
            <span className="competency-mini-pill">Kubeflow / KFP v2</span>
            <span className="competency-mini-pill">Vertex ML Metadata</span>
            <span className="competency-mini-pill">Event-Driven CT</span>
            <span className="competency-mini-pill">Model Registry</span>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-icon-wrap" style={{ color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.25)', background: 'rgba(168, 85, 247, 0.08)' }}>
            <Cpu style={{ width: 18, height: 18 }} />
          </div>
          <h3 className="competency-title">Agentic AI & Retrieval</h3>
          <div className="competency-pills-list">
            <span className="competency-mini-pill">Google ADK</span>
            <span className="competency-mini-pill">Vertex Vector Search</span>
            <span className="competency-mini-pill">Hybrid Search & RAG</span>
            <span className="competency-mini-pill">Cross-Encoders</span>
            <span className="competency-mini-pill">Autonomous Agents</span>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-icon-wrap" style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.25)', background: 'rgba(52, 211, 153, 0.08)' }}>
            <Server style={{ width: 18, height: 18 }} />
          </div>
          <h3 className="competency-title">Cloud Infrastructure</h3>
          <div className="competency-pills-list">
            <span className="competency-mini-pill">Google Cloud Platform</span>
            <span className="competency-mini-pill">Cloud Run (Serverless)</span>
            <span className="competency-mini-pill">Pub/Sub & Scheduler</span>
            <span className="competency-mini-pill">BigQuery</span>
            <span className="competency-mini-pill">Canary Rollouts</span>
          </div>
        </div>

        <div className="competency-card">
          <div className="competency-icon-wrap" style={{ color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.25)', background: 'rgba(245, 158, 11, 0.08)' }}>
            <Lock style={{ width: 18, height: 18 }} />
          </div>
          <h3 className="competency-title">Security & Governance</h3>
          <div className="competency-pills-list">
            <span className="competency-mini-pill">VPC Service Controls</span>
            <span className="competency-mini-pill">OAuth 2.0 Scopes</span>
            <span className="competency-mini-pill">PII Redaction</span>
            <span className="competency-mini-pill">Model Drift Monitoring</span>
            <span className="competency-mini-pill">Jensen-Shannon Divergence</span>
          </div>
        </div>
      </div>
    </div>
  );
}
