import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import WelcomeHUD from './components/WelcomeHUD';
import Hero from './components/Hero';
import ImpactStrip from './components/ImpactStrip';
import CaseStudies from './components/CaseStudies';
import Competencies from './components/Competencies';
import Footer from './components/Footer';

export default function App() {
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const scheduleStep = (nextStep, delayMs) => {
    const id = setTimeout(() => {
      setStep(nextStep);
    }, delayMs);
    timersRef.current.push(id);
  };

  const startIntroSequence = () => {
    clearAllTimers();
    setStep(0);

    // Initial stillness (600ms)
    scheduleStep(1, 600);

    // Welcome HUD card stays visible and active for 3.2s, then dissolves
    scheduleStep(2, 3800);

    // "Veadhanayaaham here" legal name fades in
    scheduleStep(3, 5000);

    // Executive portfolio, systems architectures, and toolkits emerge
    scheduleStep(4, 6200);
  };

  useEffect(() => {
    startIntroSequence();
    return () => clearAllTimers();
  }, []);

  const handleSkip = () => {
    clearAllTimers();
    setStep(4);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startIntroSequence();
  };

  const copyEmail = () => {
    const email = 'veadhanayagam@domain.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('input');
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="viewport-root">
      {/* Ambient Radial Lighting & Blueprint Grid */}
      <div className="ambient-glow-grid" />
      <div className="subtle-blueprint-grid" />

      {/* Skip Button */}
      {step < 4 && (
        <button 
          className="skip-trigger" 
          onClick={handleSkip}
          title="Direct bypass to portfolio"
        >
          Skip Intro &rarr;
        </button>
      )}

      {/* Floating Header */}
      <Navbar step={step} onReplay={handleReplay} />

      {/* Main Cinematic Stage */}
      <div className="cinematic-stage">
        
        {/* Phase 1 & 2: Welcome HUD */}
        <WelcomeHUD step={step} />

        {/* Phase 3 & 4: Hero and Production Sections */}
        {step >= 3 && (
          <div className="emerge-wrapper">
            <Hero 
              step={step} 
              copied={copied} 
              onCopyEmail={copyEmail} 
            />

            <ImpactStrip step={step} />

            <CaseStudies step={step} />

            <Competencies step={step} />

            <Footer step={step} />
          </div>
        )}

      </div>
    </div>
  );
}
