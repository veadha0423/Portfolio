import React from 'react';
import { Workflow, Activity, Cpu, Box, ChevronRight } from 'lucide-react';
import './CaseStudies.css';

export default function CaseStudies({ step }) {
  return (
    <div 
      className={`section-container ${step >= 4 ? 'fade-visible' : 'fade-hidden'}`}
      style={{ transitionDelay: '0.45s' }}
    >
      <div className="section-meta-header">
        <span className="section-eyebrow">
          <Workflow style={{ width: 13, height: 13 }} />
          <span>01 // PRODUCTION CASE STUDIES</span>
        </span>
        <h2 className="section-headline">Engineered Cloud & Agentic Architectures</h2>
        <p className="section-subtext">
          Verifiable production implementations deployed on enterprise Google Cloud infrastructure and client-side edge runtimes.
        </p>
      </div>

      {/* CASE STUDY 1: End-to-End MLOps on Vertex AI */}
      <div className="case-study-card" id="production-mlops">
        <div className="case-study-header">
          <div className="case-domain-tag">
            <Activity style={{ width: 13, height: 13 }} />
            <span>MLOps & CLOUD INFRASTRUCTURE</span>
          </div>
          <span className="case-domain-category">
            ENTERPRISE PIPELINE
          </span>
        </div>

        <h3 className="case-title">End-to-End MLOps on Vertex AI</h3>

        <div className="stack-tags-row">
          <span className="stack-tag">Google Cloud Vertex AI</span>
          <span className="stack-tag">KFP v2</span>
          <span className="stack-tag">XGBoost</span>
          <span className="stack-tag">BigQuery</span>
          <span className="stack-tag">Cloud Functions (Gen 2)</span>
          <span className="stack-tag">Cloud Pub/Sub</span>
          <span className="stack-tag">Cloud Scheduler</span>
        </div>

        {/* Pipeline Architecture Flow */}
        <div className="architecture-flow-diagram">
          <div className="flow-step-box">
            <span className="flow-step-label">Ingestion</span>
            <span className="flow-step-title">BigQuery Data</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Orchestration</span>
            <span className="flow-step-title">KFP v2 Pipeline</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Gatekeeper</span>
            <span className="flow-step-title" style={{ color: '#38bdf8' }}>AUC &ge; 0.80 Gate</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Registry</span>
            <span className="flow-step-title">Vertex Model Registry</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Serving</span>
            <span className="flow-step-title" style={{ color: '#34d399' }}>Canary Split</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="case-metrics-grid">
          <div className="case-metric-cell">
            <span className="case-metric-val">AUC &ge; 0.80</span>
            <span className="case-metric-desc">Conditional Quality Gate</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val">80% Less</span>
            <span className="case-metric-desc">Manual Retraining Effort</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val">100%</span>
            <span className="case-metric-desc">Inference Sampling</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val">0 Downtime</span>
            <span className="case-metric-desc">Canary Traffic Rollouts</span>
          </div>
        </div>

        {/* Specifications */}
        <ul className="specs-list">
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon" />
            <span>
              <strong style={{ color: '#fff' }}>Serverless Pipeline & Lineage:</strong> Architected a serverless MLOps pipeline on Vertex AI Pipelines (KFP v2) with conditional quality gates (<span className="code-inline">AUC &ge; 0.80</span>), full lineage tracking via Vertex ML Metadata, and automated model registration to Vertex AI Model Registry.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon" />
            <span>
              <strong style={{ color: '#fff' }}>High-Availability Serving:</strong> Deployed managed endpoints with canary traffic splitting, autoscaling (1–2 replicas on <span className="code-inline">n1-standard-2</span>), and 100% inference sampling for continuous statistical evaluation and zero-downtime rollouts.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon" />
            <span>
              <strong style={{ color: '#fff' }}>Drift & Skew Detection:</strong> Configured Vertex AI Model Monitoring with Jensen-Shannon Divergence thresholds on critical features (<span className="code-inline">tenure</span>, <span className="code-inline">MonthlyCharges</span>, <span className="code-inline">TotalCharges</span>) to detect drift and training-serving skew in real time.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon" />
            <span>
              <strong style={{ color: '#fff' }}>Automated Continuous Training (CT):</strong> Built event-driven continuous training (CT) using Cloud Pub/Sub, Cloud Scheduler, and Cloud Functions (Gen 2) to automate pipeline submission and parameter overrides, reducing manual retraining effort by 80%.
            </span>
          </li>
        </ul>
      </div>

      {/* CASE STUDY 2: Enterprise Multi-Agent Knowledge Engine */}
      <div className="case-study-card" id="agentic-systems">
        <div className="case-study-header">
          <div className="case-domain-tag tag-purple">
            <Cpu style={{ width: 13, height: 13 }} />
            <span>GENERATIVE AI & AGENTIC ARCHITECTURES</span>
          </div>
          <span className="case-domain-category">
            AGENTIC SYSTEM
          </span>
        </div>

        <h3 className="case-title">Enterprise Multi-Agent Knowledge Engine</h3>

        <div className="stack-tags-row">
          <span className="stack-tag">Google ADK</span>
          <span className="stack-tag">Vertex AI Vector Search</span>
          <span className="stack-tag">Cloud Run</span>
          <span className="stack-tag">Google Workspace APIs</span>
          <span className="stack-tag">OAuth 2.0</span>
          <span className="stack-tag">VPC Service Controls</span>
          <span className="stack-tag">Hybrid RAG</span>
        </div>

        {/* Multi-Agent Architecture Flow */}
        <div className="architecture-flow-diagram">
          <div className="flow-step-box">
            <span className="flow-step-label">Interface</span>
            <span className="flow-step-title">Enterprise Query</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Security</span>
            <span className="flow-step-title" style={{ color: '#a855f7' }}>Governance Agent (PII)</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Orchestration</span>
            <span className="flow-step-title">ADK Specialist Team</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Corpus</span>
            <span className="flow-step-title" style={{ color: '#38bdf8' }}>Vector Search (10K+)</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Execution</span>
            <span className="flow-step-title">Workspace Actions</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="case-metrics-grid">
          <div className="case-metric-cell">
            <span className="case-metric-val val-purple">10,000+</span>
            <span className="case-metric-desc">Proprietary Documents</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-purple">Multi-Tier</span>
            <span className="case-metric-desc">Orchestrator + Specialists</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-purple">OAuth 2.0</span>
            <span className="case-metric-desc">Least-Privilege Authorization</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-purple">VPC-SC</span>
            <span className="case-metric-desc">PII & Injection Containment</span>
          </div>
        </div>

        {/* Specifications */}
        <ul className="specs-list">
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-purple" />
            <span>
              <strong style={{ color: '#fff' }}>Multi-Agent Orchestration:</strong> Architected a multi-tier agentic system with Google ADK using orchestrator + specialist agents for enterprise knowledge task decomposition and autonomous execution.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-purple" />
            <span>
              <strong style={{ color: '#fff' }}>Production Enterprise RAG:</strong> Built a production RAG pipeline with Vertex AI Vector Search, hybrid search, and cross-encoder reranking over 10,000+ proprietary internal documents.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-purple" />
            <span>
              <strong style={{ color: '#fff' }}>Workspace Ecosystem Integration:</strong> Integrated Google Workspace APIs with OAuth 2.0 least-privilege access for live document retrieval, intelligent email summarization, and contextual calendar/event drafting.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-purple" />
            <span>
              <strong style={{ color: '#fff' }}>Enterprise Security & Governance:</strong> Implemented a dedicated Governance Agent for real-time PII scrubbing and prompt injection detection, deployed on Cloud Run with full VPC Service Controls (VPC-SC) containment.
            </span>
          </li>
        </ul>
      </div>

      {/* CASE STUDY 3: AI Virtual Try-On Web App */}
      <div className="case-study-card" id="virtual-try-on">
        <div className="case-study-header">
          <div className="case-domain-tag tag-emerald">
            <Box style={{ width: 13, height: 13 }} />
            <span>COMPUTER VISION & EDGE GRAPHICS</span>
          </div>
          <span className="case-domain-category">
            REAL-TIME WEB APPLICATION
          </span>
        </div>

        <h3 className="case-title">AI Virtual Try-On Web App</h3>

        <div className="stack-tags-row">
          <span className="stack-tag">Python</span>
          <span className="stack-tag">PyTorch</span>
          <span className="stack-tag">React</span>
          <span className="stack-tag">YOLOv8</span>
          <span className="stack-tag">ONNX</span>
          <span className="stack-tag">WebAssembly (WASM)</span>
          <span className="stack-tag">Three.js</span>
        </div>

        {/* Real-time Edge CV Architecture Flow */}
        <div className="architecture-flow-diagram">
          <div className="flow-step-box">
            <span className="flow-step-label">Capture</span>
            <span className="flow-step-title">Video Stream</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Edge Inference</span>
            <span className="flow-step-title" style={{ color: '#34d399' }}>ONNX Runtime (WASM)</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Pose Model</span>
            <span className="flow-step-title">YOLOv8 Keypoints</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Transform</span>
            <span className="flow-step-title" style={{ color: '#38bdf8' }}>Coordinate Mapping</span>
          </div>
          <ChevronRight className="flow-arrow" style={{ width: 14, height: 14 }} />
          <div className="flow-step-box">
            <span className="flow-step-label">Viewport</span>
            <span className="flow-step-title" style={{ color: '#34d399' }}>Three.js (60 FPS)</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="case-metrics-grid">
          <div className="case-metric-cell">
            <span className="case-metric-val val-emerald">98%</span>
            <span className="case-metric-desc">Keypoint Tracking Accuracy</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-emerald">100% Cost Cut</span>
            <span className="case-metric-desc">Zero Cloud GPU Server Fees</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-emerald">60 FPS</span>
            <span className="case-metric-desc">Mid-Range Hardware Benchmark</span>
          </div>
          <div className="case-metric-cell">
            <span className="case-metric-val val-emerald">0ms Latency</span>
            <span className="case-metric-desc">Private Client-Side Inference</span>
          </div>
        </div>

        {/* Specifications */}
        <ul className="specs-list">
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-emerald" />
            <span>
              <strong style={{ color: '#fff' }}>High-Precision Pose Estimation:</strong> Engineered a high-precision pose-estimation pipeline by fine-tuning a custom YOLOv8 model in PyTorch, applying data structures and algorithmic problem-solving to achieve <span className="code-inline code-emerald">98% accuracy</span> in skeletal keypoint tracking.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-emerald" />
            <span>
              <strong style={{ color: '#fff' }}>Zero-Latency Edge Inference:</strong> Architected a cost-efficient, zero-latency inference engine by exporting models to ONNX and deploying via WebAssembly (WASM), eliminating 100% of cloud GPU server costs while enabling private, client-side execution.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-emerald" />
            <span>
              <strong style={{ color: '#fff' }}>Mathematical 3D Canvas Projection:</strong> Developed a real-time rendering system using React.js and Three.js, implementing custom mathematical logic to map 2D skeletal coordinates onto the canvas for precise positioning and dynamic scaling of overlay assets.
            </span>
          </li>
          <li className="specs-list-item">
            <ChevronRight className="specs-bullet-icon icon-emerald" />
            <span>
              <strong style={{ color: '#fff' }}>Lifecycle & Render Optimization:</strong> Optimized application performance to maintain a consistent <span className="code-inline code-emerald">60 FPS</span> on mid-range hardware by implementing asynchronous processing and memory-efficient texture loading within the React lifecycle.
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
}