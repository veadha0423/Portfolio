import React from 'react';
import { Activity, Terminal } from 'lucide-react';
import './WelcomeHUD.css';

export default function WelcomeHUD({ step }) {
  if (step !== 1 && step !== 2) return null;

  return (
    <div className={`welcome-viewport-wrapper ${step === 1 ? 'welcome-enter' : 'welcome-exit'}`}>
      <div className="executive-glass-hud">
        
        {/* Telemetry Status Line */}
        <div className="welcome-telemetry">
          <span className="telemetry-tag">
            <Activity style={{ width: 14, height: 14 }} />
            <span>TRANSMISSION ONLINE // SYSTEM READY</span>
          </span>
          <span style={{ color: 'var(--border-subtle)' }}>|</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#94a3b8' }}>
            LATENCY &le; 10ms
          </span>
        </div>

        {/* Exact Welcome Text */}
        <div className="welcome-phrase-box">
          <div className="welcome-phrase">
            welcome to my profile its veadhanayaaham here....
          </div>
        </div>

        {/* Terminal Indicator */}
        <div className="welcome-system-bar">
          <Terminal style={{ width: 14, height: 14, color: '#38bdf8' }} />
          <span>INITIALIZING PRODUCTION ARCHITECTURES</span>
        </div>
      </div>
    </div>
  );
}