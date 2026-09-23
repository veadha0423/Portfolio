import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
Globe,
Lock,
RotateCw,
ArrowRight,
Terminal,
Code2,
Compass,
Zap,
Play,
Copy,
Check,
Layers,
Cpu,
FastForward,
ChevronRight,
Maximize2
} from 'lucide-react';

/

PURE STANDARD CSS (NO TAILWIND NEEDED)

You can keep this right here, or cut & paste into your App.css!
/
const PURE_CSS = `
/ --- Global Resets & Theme --- */
:root {
--bg-dark: #07090e;
--bg-card: rgba(15, 23, 42, 0.65);
--border-color: rgba(255, 255, 255, 0.08);
--text-main: #f1f5f9;
--text-muted: #94a3b8;
--accent-cyan: #38bdf8;
--accent-purple: #a855f7;
}

{
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
background-color: var(--bg-dark);
color: var(--text-main);
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
overflow-x: hidden;
}

.portfolio-wrapper {
position: relative;
min-height: 100vh;
background-color: var(--bg-dark);
}

/* Ambient glow orbs */
.glow-orb {
position: fixed;
border-radius: 50%;
pointer-events: none;
z-index: 0;
filter: blur(140px);
}
.glow-1 { top: -10%; left: 25%; width: 550px; height: 550px; background: rgba(56, 189, 248, 0.12); }
.glow-2 { top: 35%; right: -5%; width: 500px; height: 500px; background: rgba(168, 85, 247, 0.12); }
.glow-3 { bottom: 5%; left: 5%; width: 500px; height: 500px; background: rgba(6, 182, 212, 0.1); }

.grid-overlay {
position: fixed;
inset: 0;
pointer-events: none;
background-image:
linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
background-size: 44px 44px;
z-index: 0;
}

/* --- Surfing Overlay Modal --- */
.surfing-overlay {
position: fixed;
inset: 0;
z-index: 100;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(7, 9, 14, 0.94);
backdrop-filter: blur(20px);
padding: 1.5rem;
transition: opacity 0.5s ease;
perspective: 1200px;
}

.speed-canvas {
position: absolute;
inset: 0;
width: 100%;
height: 100%;
pointer-events: none;
}

.surfing-header {
position: absolute;
top: 1.5rem;
left: 0;
right: 0;
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 20;
}

.status-pill {
display: inline-flex;
align-items: center;
gap: 0.5rem;
font-family: monospace;
font-size: 0.75rem;
color: #38bdf8;
background: rgba(8, 47, 73, 0.6);
border: 1px solid rgba(14, 165, 233, 0.4);
padding: 0.35rem 0.85rem;
border-radius: 9999px;
}

.skip-btn {
background: rgba(15, 23, 42, 0.8);
border: 1px solid rgba(255, 255, 255, 0.15);
color: #cbd5e1;
font-family: monospace;
font-size: 0.75rem;
padding: 0.45rem 1rem;
border-radius: 9999px;
cursor: pointer;
display: flex;
align-items: center;
gap: 0.5rem;
transition: all 0.2s;
}
.skip-btn:hover {
background: rgba(30, 41, 59, 1);
color: #ffffff;
}

.kbd-badge {
background: rgba(30, 41, 59, 0.8);
border: 1px solid rgba(255, 255, 255, 0.1);
padding: 0.1rem 0.35rem;
border-radius: 4px;
font-size: 0.65rem;
}

.hud-meta {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 1rem;
z-index: 10;
}

/* 3D Browser Stage */
.browser-window {
position: relative;
z-index: 10;
width: 100%;
max-width: 860px;
height: 440px;
background: #090d16;
border-radius: 16px;
border: 1px solid rgba(255, 255, 255, 0.12);
box-shadow: 0 30px 80px rgba(0, 0, 0, 0.85);
display: flex;
flex-direction: column;
overflow: hidden;
transform-style: preserve-3d;
transition: transform 0.2s ease-out;
}

.browser-bar {
height: 44px;
background: rgba(15, 23, 42, 0.95);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 1rem;
flex-shrink: 0;
}

.browser-dots {
display: flex;
gap: 6px;
width: 70px;
}
.dot {
width: 11px;
height: 11px;
border-radius: 50%;
}
.dot-red { background: #f43f5e; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.browser-omnibar {
flex: 1;
max-width: 480px;
margin: 0 1rem;
background: #020617;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 8px;
padding: 0.35rem 0.75rem;
font-family: monospace;
font-size: 0.75rem;
display: flex;
align-items: center;
}

.browser-content {
flex: 1;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
transition: all 0.3s ease;
}

.browser-progress-track {
height: 4px;
width: 100%;
background: #0f172a;
}
.browser-progress-bar {
height: 100%;
background: linear-gradient(90deg, #38bdf8, #818cf8, #c084fc);
transition: width 0.12s ease;
}

/* --- Main Layout Navigation --- */
.main-nav {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 40;
padding: 1.25rem 2rem;
background: rgba(7, 9, 14, 0.75);
backdrop-filter: blur(16px);
border-bottom: 1px solid var(--border-color);
display: flex;
justify-content: space-between;
align-items: center;
}

.nav-links {
display: flex;
gap: 1.5rem;
background: rgba(15, 23, 42, 0.6);
border: 1px solid var(--border-color);
padding: 0.5rem 1.25rem;
border-radius: 9999px;
font-size: 0.85rem;
}
.nav-links a {
color: var(--text-muted);
text-decoration: none;
transition: color 0.2s;
}
.nav-links a:hover {
color: #ffffff;
}

.cta-btn {
background: linear-gradient(135deg, #0284c7, #6366f1);
color: #fff;
border: none;
padding: 0.55rem 1.2rem;
border-radius: 10px;
font-size: 0.85rem;
font-weight: 600;
text-decoration: none;
cursor: pointer;
transition: transform 0.2s, box-shadow 0.2s;
}
.cta-btn:hover {
transform: translateY(-2px);
box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
}

/* --- Hero Section & Kinetic Typography --- */
.hero-container {
position: relative;
z-index: 10;
max-width: 1100px;
margin: 0 auto;
padding: 10rem 1.5rem 5rem 1.5rem;
display: flex;
flex-direction: column;
}

.headline-name {
font-size: clamp(3.2rem, 9vw, 8rem);
font-weight: 900;
letter-spacing: -0.04em;
line-height: 1;
color: #ffffff;
margin-bottom: 1.5rem;
user-select: none;
}

.kinetic-char {
display: inline-block;
cursor: default;
transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
}
.kinetic-char:hover {
transform: translateY(-10px) scale(1.15) rotate(-2deg);
color: #38bdf8;
}

.hero-subtitle {
font-size: 1.35rem;
font-weight: 300;
color: var(--text-muted);
max-width: 680px;
line-height: 1.6;
margin-bottom: 2rem;
}

.hero-btn-row {
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
margin-bottom: 4rem;
}

.btn-white {
background: #ffffff;
color: #020617;
padding: 0.85rem 1.6rem;
border-radius: 12px;
font-weight: 700;
font-size: 0.95rem;
text-decoration: none;
display: inline-flex;
align-items: center;
gap: 0.5rem;
transition: background 0.2s, transform 0.2s;
}
.btn-white:hover {
background: #38bdf8;
transform: translateY(-2px);
}

.btn-dark {
background: rgba(15, 23, 42, 0.8);
border: 1px solid rgba(255, 255, 255, 0.12);
color: #f1f5f9;
padding: 0.85rem 1.5rem;
border-radius: 12px;
font-weight: 500;
font-size: 0.95rem;
text-decoration: none;
display: inline-flex;
align-items: center;
gap: 0.5rem;
}

/* --- Cards and Grid --- */
.card-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 1.5rem;
margin-top: 2rem;
}

.card {
background: rgba(15, 23, 42, 0.5);
border: 1px solid var(--border-color);
border-radius: 16px;
padding: 1.75rem;
backdrop-filter: blur(12px);
transition: border-color 0.2s, transform 0.2s;
}
.card:hover {
border-color: rgba(56, 189, 248, 0.4);
transform: translateY(-4px);
}

.footer {
margin-top: 6rem;
padding-top: 2rem;
border-top: 1px solid var(--border-color);
display: flex;
justify-content: space-between;
align-items: center;
color: var(--text-muted);
font-size: 0.85rem;
}

.footer-email-link {
color: var(--accent-cyan);
text-decoration: none;
font-family: monospace;
transition: opacity 0.2s;
}
.footer-email-link:hover {
opacity: 0.8;
text-decoration: underline;
}

@media (max-width: 768px) {
.nav-links { display: none; }
.browser-window { height: 380px; }
.headline-name { font-size: 3.5rem; }
.footer {
flex-direction: column;
gap: 0.75rem;
align-items: flex-start;
}
}
`;

const SURF_SITES = [
{
url: 'https://neural-matrix.ai/canvas',
title: 'NEURAL LAB 0.9',
type: 'AI Vision Engine',
bg: 'linear-gradient(135deg, rgba(59, 7, 100, 0.9), rgba(15, 23, 42, 0.95))',
color: '#c084fc',
tagline: 'Latent space visualization & generative vector synthesis'
},
{
url: 'https://solaris-dex.protocol/pools',
title: 'SOLARIS EXCHANGE',
type: 'Decentralized Orderbook',
bg: 'linear-gradient(135deg, rgba(8, 47, 73, 0.9), rgba(15, 23, 42, 0.95))',
color: '#38bdf8',
tagline: 'Sub-second liquidation engines with real-time web telemetry'
},
{
url: 'https://hyper-frequency.audio/daw',
title: 'OSCILLATOR LAB',
type: 'WebAudio Synth',
bg: 'linear-gradient(135deg, rgba(69, 26, 3, 0.8), rgba(15, 23, 42, 0.95))',
color: '#fbbf24',
tagline: 'Custom low-pass ladder filters and real-time frequency FFT'
},
{
url: 'https://astral-telemetry.space/orbit',
title: 'KEPLER OBSERVATORY',
type: 'Exoplanetary Feed',
bg: 'linear-gradient(135deg, rgba(6, 78, 59, 0.85), rgba(15, 23, 42, 0.95))',
color: '#34d399',
tagline: 'High-resolution photometric light curve spectral decomposition'
},
{
url: 'https://veadhanayagam.dev',
title: 'VEADHANAYAGAM',
type: 'Final Destination Target',
bg: 'linear-gradient(135deg, rgba(12, 74, 110, 0.9), rgba(7, 9, 14, 0.98))',
color: '#38bdf8',
tagline: 'Welcome to my digital sanctuary. Systems locked and online.'
}
];

export default function App() {
const [isPlayingIntro, setIsPlayingIntro] = useState(true);
const [overlayVisible, setOverlayVisible] = useState(true);
const [overlayOpacity, setOverlayOpacity] = useState(1);
const [siteIndex, setSiteIndex] = useState(0);
const [speedVal, setSpeedVal] = useState(940);
const [copied, setCopied] = useState(false);
const [tilt, setTilt] = useState({ rx: 6, ry: -8, scale: 0.95 });

const overlayRef = useRef(null);
const browserRef = useRef(null);
const canvasRef = useRef(null);
const lettersRef = useRef([]);
const timerRef = useRef(null);

const rawName = "Veadhanayagam";
const nameLetters = useMemo(() => rawName.split(""), [rawName]);

// Load GSAP safely via CDN so you never need npm GSAP errors either
useEffect(() => {
if (!window.gsap) {
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
script.async = true;
document.head.appendChild(script);
}
}, []);

// 3D Canvas Warp Starfield
useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;
const ctx = canvas.getContext('2d');
let animId;

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
resize();
window.addEventListener('resize', resize);

const stars = Array.from({ length: 45 }, () => ({
  x: (Math.random() - 0.5) * window.innerWidth * 1.5,
  y: (Math.random() - 0.5) * window.innerHeight * 1.5,
  z: Math.random() * 1000 + 100,
  len: Math.random() * 20 + 10,
  color: Math.random() > 0.5 ? '#38bdf8' : '#c084fc'
}));

const render = () => {
  if (!isPlayingIntro) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const warp = Math.max(0.2, speedVal / 300);

  stars.forEach((s) => {
    s.z -= 15 * warp;
    if (s.z <= 10) {
      s.z = 1000;
      s.x = (Math.random() - 0.5) * canvas.width * 1.5;
      s.y = (Math.random() - 0.5) * canvas.height * 1.5;
    }

    const k = 240 / s.z;
    const px = s.x * k + cx;
    const py = s.y * k + cy;

    const pzOld = s.z + s.len * warp;
    const kOld = 240 / pzOld;
    const pxOld = s.x * kOld + cx;
    const pyOld = s.y * kOld + cy;

    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      ctx.beginPath();
      ctx.moveTo(pxOld, pyOld);
      ctx.lineTo(px, py);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = Math.min(2.5, 240 / s.z);
      ctx.globalAlpha = Math.min(0.85, Math.max(0, 1 - s.z / 1000));
      ctx.stroke();
    }
  });

  animId = requestAnimationFrame(render);
};

render();

return () => {
  cancelAnimationFrame(animId);
  window.removeEventListener('resize', resize);
};


}, [isPlayingIntro, speedVal]);

const triggerHeroAnimation = useCallback(() => {
if (window.gsap) {
window.gsap.fromTo(
lettersRef.current.filter(Boolean),
{ y: 60, opacity: 0, rotateX: -60 },
{ y: 0, opacity: 1, rotateX: 0, stagger: 0.04, duration: 0.8, ease: 'back.out(1.7)' }
);
}
}, []);

const completeIntro = useCallback(() => {
if (timerRef.current) clearTimeout(timerRef.current);

if (window.gsap && browserRef.current && overlayRef.current) {
  window.gsap.to(browserRef.current, {
    scale: 1.15,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut'
  });

  window.gsap.to(overlayRef.current, {
    opacity: 0,
    duration: 0.65,
    ease: 'power2.out',
    onComplete: () => {
      setIsPlayingIntro(false);
      setOverlayVisible(false);
      triggerHeroAnimation();
    }
  });
} else {
  setOverlayOpacity(0);
  setTimeout(() => {
    setIsPlayingIntro(false);
    setOverlayVisible(false);
    triggerHeroAnimation();
  }, 500);
}


}, [triggerHeroAnimation]);

const startSurfing = useCallback(() => {
setIsPlayingIntro(true);
setOverlayVisible(true);
setOverlayOpacity(1);

if (browserRef.current) {
  browserRef.current.style.opacity = '1';
}

let step = 0;
const delays = [80, 110, 180, 320, 650];

const runHop = () => {
  if (step >= SURF_SITES.length) {
    timerRef.current = setTimeout(completeIntro, 500);
    return;
  }

  setSiteIndex(step);
  const isFinal = step === SURF_SITES.length - 1;
  const speed = isFinal ? 0 : Math.round(150 + (1 - step / SURF_SITES.length) * 800);
  setSpeedVal(speed);

  if (!isFinal) {
    setTilt({
      scale: 0.94 + Math.random() * 0.04,
      rx: (Math.random() - 0.5) * 8,
      ry: (Math.random() - 0.5) * 12
    });
  } else {
    setTilt({ scale: 1.02, rx: 0, ry: 0 });
  }

  const d = delays[step] || 350;
  step++;
  timerRef.current = setTimeout(runHop, d);
};

runHop();


}, [completeIntro]);

useEffect(() => {
startSurfing();

const onKey = (e) => {
  if (e.key === 'Escape') completeIntro();
};
window.addEventListener('keydown', onKey);
return () => {
  window.removeEventListener('keydown', onKey);
  if (timerRef.current) clearTimeout(timerRef.current);
};


}, [startSurfing, completeIntro]);

const activeSite = SURF_SITES[siteIndex] || SURF_SITES[0];

return (
<div>
{/* Pure CSS Injected Directly */}
{PURE_CSS}

  {/* Background Ambient Glows */}
  <div className="glow-orb glow-1" />
  <div className="glow-orb glow-2" />
  <div className="glow-orb glow-3" />
  <div className="grid-overlay" />

  {/* Surfing 3D Animation Overlay */}
  {overlayVisible && (
    <div 
      ref={overlayRef}
      className="surfing-overlay"
      style={{ opacity: overlayOpacity }}
    >
      <canvas ref={canvasRef} className="speed-canvas" />

      <div className="surfing-header">
        <div className="status-pill">
          <Zap style={{ width: 14, height: 14, color: '#f59e0b' }} />
          <span>HYPER_SURF // LATENCY: 2ms</span>
        </div>
        <button className="skip-btn" onClick={completeIntro}>
          <span>Skip Intro</span>
          <span className="kbd-badge">ESC</span>
        </button>
      </div>

      <div className="hud-meta">
        <div className="status-pill" style={{ marginBottom: 6 }}>
          <span>WARP SPEED: {speedVal} Mbps</span>
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
          Hop {siteIndex + 1} of {SURF_SITES.length} &bull; Decelerating
        </span>
      </div>

      <div 
        ref={browserRef}
        className="browser-window"
        style={{
          transform: `scale(${tilt.scale}) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
        }}
      >
        <div className="browser-bar">
          <div className="browser-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="browser-omnibar">
            <Lock style={{ width: 14, height: 14, color: '#10b981', marginRight: 6 }} />
            <span style={{ color: '#64748b' }}>https://</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>
              {activeSite.url.replace('https://', '')}
            </span>
          </div>

          <div style={{ display: 'flex', gap: 8, color: '#64748b' }}>
            <RotateCw style={{ width: 14, height: 14 }} />
            <Maximize2 style={{ width: 14, height: 14 }} />
          </div>
        </div>

        <div 
          className="browser-content"
          style={{ background: activeSite.bg }}
        >
          <div>
            <span 
              className="status-pill"
              style={{ color: activeSite.color, borderColor: activeSite.color }}
            >
              {activeSite.type}
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '1rem', color: '#fff' }}>
              {activeSite.title}
            </h2>
            <p style={{ color: '#cbd5e1', maxWidth: '500px', fontSize: '0.95rem', marginTop: 8 }}>
              {activeSite.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#94a3b8' }}>
              SIGNAL: 99.8% STABLE
            </span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: activeSite.color, display: 'flex', alignItems: 'center', gap: 4 }}>
              <span>SURFING TRANSIT</span>
              <FastForward style={{ width: 14, height: 14 }} />
            </span>
          </div>
        </div>

        <div className="browser-progress-track">
          <div 
            className="browser-progress-bar"
            style={{ width: `${((siteIndex + 1) / SURF_SITES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )}

  {/* Main Navigation */}
  <header className="main-nav">
    <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ width: 34, height: 34, borderRadius: 8, background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
        V
      </div>
      <div>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>Veadhanayagam</div>
        <div style={{ color: '#64748b', fontSize: '0.65rem', fontFamily: 'monospace' }}>PORTFOLIO</div>
      </div>
    </a>

    <nav className="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#tech">Stack</a>
      <a href="#contact">Contact</a>
    </nav>

    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <button 
        className="skip-btn" 
        onClick={startSurfing}
        title="Replay surfing animation"
      >
        <Compass style={{ width: 14, height: 14, color: '#38bdf8' }} />
        <span>Replay Surf</span>
      </button>
      <a href="#contact" className="cta-btn">Connect</a>
    </div>
  </header>

  {/* Main Hero Container */}
  <main className="hero-container" id="top">
    <div className="status-pill" style={{ marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
      <span>WELCOME TO MY PORTFOLIO</span>
    </div>

    {/* Kinetic Name Typography */}
    <h1 className="headline-name">
      {nameLetters.map((char, i) => (
        <span 
          key={i} 
          ref={(el) => (lettersRef.current[i] = el)}
          className="kinetic-char"
        >
          {char}
        </span>
      ))}
    </h1>

    <p className="hero-subtitle">
      Software Engineer & Creative Developer crafting fluid interactive interfaces, performant web platforms, and scalable backends.
    </p>

    <div className="hero-btn-row">
      <a href="#projects" className="btn-white">
        <span>Explore Works</span>
        <ArrowRight style={{ width: 16, height: 16 }} />
      </a>

      <a href="#tech" className="btn-dark">
        <Code2 style={{ width: 16, height: 16, color: '#38bdf8' }} />
        <span>Tech Stack</span>
      </a>

      <button 
        className="btn-dark"
        style={{ cursor: 'pointer', fontFamily: 'monospace', fontSize: '0.8rem' }}
        onClick={() => {
          navigator.clipboard?.writeText('veadhanayagam@domain.com');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        {copied ? <Check style={{ width: 14, height: 14, color: '#10b981' }} /> : <Copy style={{ width: 14, height: 14 }} />}
        <span>{copied ? 'Email Copied!' : 'veadhanayagam@domain.com'}</span>
      </button>
    </div>

    {/* Projects Section */}
    <section id="projects" style={{ marginTop: '5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: 1.5 }}>
          FEATURED ARTIFACTS
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: 4 }}>Recent Creations</h2>
      </div>

      <div className="card-grid">
        <div className="card">
          <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'monospace' }}>THREE.JS // WEBGL</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: 8, marginBottom: 8 }}>Quantum Cloud Visualizer</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
            Real-time microservice cluster visualizer rendering distributed server telemetry with GLSL shaders.
          </p>
        </div>

        <div className="card">
          <span style={{ fontSize: '0.7rem', color: '#c084fc', fontFamily: 'monospace' }}>HIGH FREQUENCY // WS</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: 8, marginBottom: 8 }}>Nebula Streaming DEX</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
            Sub-millisecond trade execution dashboard leveraging WebSocket streams, canvas charts, and reactive state.
          </p>
        </div>

        <div className="card">
          <span style={{ fontSize: '0.7rem', color: '#fbbf24', fontFamily: 'monospace' }}>AUDIO DSP // WEBAUDIO</span>
          <h3 style={{ fontSize: '1.25rem', marginTop: 8, marginBottom: 8 }}>Aura Modular Synthesizer</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
            Browser-based subtractive sound synthesis laboratory with ADSR envelopes and visual frequency oscilloscopes.
          </p>
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section id="tech" style={{ marginTop: '5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span style={{ color: '#38bdf8', fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: 1.5 }}>
          CORE ARSENAL
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: 4 }}>Full-Stack Precision</h2>
      </div>

      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div className="card">
          <Cpu style={{ width: 24, height: 24, color: '#38bdf8', marginBottom: 12 }} />
          <strong>React & GSAP</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 4 }}>Smooth Interfaces</p>
        </div>
        <div className="card">
          <Layers style={{ width: 24, height: 24, color: '#c084fc', marginBottom: 12 }} />
          <strong>TypeScript</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 4 }}>Strict Type Safety</p>
        </div>
        <div className="card">
          <Terminal style={{ width: 24, height: 24, color: '#34d399', marginBottom: 12 }} />
          <strong>Node & Go</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 4 }}>Backend Services</p>
        </div>
        <div className="card">
          <Code2 style={{ width: 24, height: 24, color: '#fbbf24', marginBottom: 12 }} />
          <strong>Modern CSS</strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: 4 }}>Pure & Zero-Tooling</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer" id="contact">
      <div>
        <strong>Veadhanayagam</strong> &bull; Pure React &amp; CSS
      </div>
      <div>
        <a href="mailto:veadhanayagam@domain.com" className="footer-email-link">
          veadhanayagam@domain.com
        </a>
      </div>
    </footer>
  </main>
</div>
);
}