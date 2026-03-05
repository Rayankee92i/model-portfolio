/**
 * ─────────────────────────────────────────────────────
 *  Hero.jsx — Model Portfolio Template
 * ─────────────────────────────────────────────────────
 *  HOW TO CUSTOMISE:
 *  1. Replace the hardcoded values below
 *  2. Add photos to src/components/pictures/
 *  3. Update GALLERY_IMAGES
 * ─────────────────────────────────────────────────────
 */

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import CircularGallery from './CircularGallery';
import LightPillar from './LightPillar';

// ══════════════════════════════════════════════════════
//  ✏️  GALLERY IMAGES
//  import photo1 from './pictures/photo1.jpg';
//  { src: photo1, alt: 'Description' }
// ══════════════════════════════════════════════════════
const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', alt: 'Editorial 1' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', alt: 'Editorial 2' },
  { src: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=800&q=80', alt: 'Editorial 3' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', alt: 'Commercial 1' },
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80', alt: 'Commercial 2' },
  { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Runway 1' },
  { src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80', alt: 'Runway 2' },
  { src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80', alt: 'Campaign 1' },
];

export default function Hero() {
  const [galleryMode, setGalleryMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const navRef = useRef(null);
  const firstRef = useRef(null);
  const ruleRef = useRef(null);
  const taglineRef = useRef(null);
  const descRef = useRef(null);
  const socialsRef = useRef(null);
  const lastRef = useRef(null);
  const btnRef = useRef(null);
  const btnFillRef = useRef(null);
  const btnLabelRef = useRef(null);
  const footerRef = useRef(null);
  const backBtnRef = useRef(null);
  const curtainRef = useRef(null);

  // ── Entrance ──────────────────────────────────────────
  useEffect(() => {
    gsap.set(navRef.current, { autoAlpha: 0, y: -16 });
    gsap.set(firstRef.current, { autoAlpha: 0, x: -40, skewX: -3 });
    gsap.set(lastRef.current, { autoAlpha: 0, x: 40, skewX: 3 });
    gsap.set(ruleRef.current, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set([taglineRef.current, descRef.current],
      { autoAlpha: 0, y: 12 });
    gsap.set([socialsRef.current, btnRef.current, footerRef.current],
      { autoAlpha: 0, y: 10 });

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to(navRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1)
      .to(firstRef.current, { autoAlpha: 1, x: 0, skewX: 0, duration: 1.0 }, 0.28)
      .to(ruleRef.current, { scaleX: 1, duration: 0.85, ease: 'power3.inOut' }, 0.52)
      .to(taglineRef.current, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.64)
      .to(descRef.current, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.72)
      .to(lastRef.current, { autoAlpha: 1, x: 0, skewX: 0, duration: 1.0 }, 0.62)
      .to(socialsRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.76)
      .to(btnRef.current, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.84)
      .to(footerRef.current, { autoAlpha: 1, duration: 0.5 }, 0.90);
  }, []);

  // ── CTA hover ─────────────────────────────────────────
  const onBtnEnter = () => {
    gsap.to(btnFillRef.current, { scaleX: 1, duration: 0.38, ease: 'power2.out' });
    gsap.to(btnLabelRef.current, { color: '#080808', duration: 0.38 });
  };
  const onBtnLeave = () => {
    gsap.to(btnFillRef.current, { scaleX: 0, duration: 0.38, ease: 'power2.inOut' });
    gsap.to(btnLabelRef.current, { color: '#f7f2ea', duration: 0.38 });
  };

  // ── Back hover ────────────────────────────────────────
  // use explicit x values and always reset before showing so the
  // button doesn't drift after repeated hovers/animations
  const onBackEnter = () => gsap.to(backBtnRef.current, { x: -4, duration: 0.22, ease: 'power2.out' });
  const onBackLeave = () => gsap.to(backBtnRef.current, { x: 0, duration: 0.22, ease: 'power2.inOut' });

  // ── Copy email ────────────────────────────────────────
  const handleCopyEmail = async () => {
    console.log('Copying email');
    try {
      await navigator.clipboard.writeText('hello@email.com');
      console.log('Copied successfully');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        console.log('Copied reset');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  // ── Enter gallery ─────────────────────────────────────
  const handleEnterGallery = () => {
    if (galleryMode) return;
    const tl = gsap.timeline();

    tl.to(firstRef.current,
      { autoAlpha: 0, x: -30, skewX: -2, duration: 0.42, ease: 'power2.in' }, 0)
      .to(lastRef.current,
        { autoAlpha: 0, x: 30, skewX: 2, duration: 0.42, ease: 'power2.in' }, 0.04)
      .to(ruleRef.current,
        { scaleX: 0, transformOrigin: 'right center', duration: 0.35, ease: 'power2.in' }, 0.05)
      .to([navRef.current, taglineRef.current, descRef.current,
      socialsRef.current, btnRef.current, footerRef.current],
        { autoAlpha: 0, duration: 0.32, ease: 'power2.in' }, 0.07)
      .fromTo(curtainRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.56, ease: 'power3.inOut' }, 0.18)
      .call(() => setGalleryMode(true), null, 0.68)
      .to(curtainRef.current,
        { scaleX: 0, transformOrigin: 'right center', duration: 0.56, ease: 'power3.inOut' }, 0.74);
  };

  // ── Exit gallery ──────────────────────────────────────
  const handleBack = () => {
    const tl = gsap.timeline();

    // make sure horizontal offset is cleared when we hide
    tl.set(backBtnRef.current, { x: 0 });
    tl.to(backBtnRef.current,
      { autoAlpha: 0, y: 8, duration: 0.2, ease: 'power2.in' }, 0)
      .fromTo(curtainRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.56, ease: 'power3.inOut' }, 0.08)
      .call(() => {
        setGalleryMode(false);
        gsap.set(firstRef.current, { autoAlpha: 0, x: 0, skewX: 0 });
        gsap.set(lastRef.current, { autoAlpha: 0, x: 0, skewX: 0 });
        gsap.set(ruleRef.current, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set([navRef.current, taglineRef.current, descRef.current,
        socialsRef.current, btnRef.current, footerRef.current],
          { autoAlpha: 0, y: 0 });
      }, null, 0.58)
      .to(curtainRef.current,
        { scaleX: 0, transformOrigin: 'right center', duration: 0.56, ease: 'power3.inOut' }, 0.62)
      .to(navRef.current,
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'expo.out' }, 0.88)
      .to(firstRef.current,
        { autoAlpha: 1, x: 0, skewX: 0, duration: 0.9, ease: 'expo.out' }, 0.94)
      .to(ruleRef.current,
        { scaleX: 1, duration: 0.75, ease: 'power3.inOut' }, 1.08)
      .to(taglineRef.current,
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 1.16)
      .to(descRef.current,
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'expo.out' }, 1.22)
      .to(lastRef.current,
        { autoAlpha: 1, x: 0, skewX: 0, duration: 0.9, ease: 'expo.out' }, 1.14)
      .to(socialsRef.current,
        { autoAlpha: 1, y: 0, duration: 0.55, ease: 'expo.out' }, 1.28)
      .to(btnRef.current,
        { autoAlpha: 1, y: 0, duration: 0.55, ease: 'expo.out' }, 1.34)
      .to(footerRef.current,
        { autoAlpha: 1, duration: 0.45 }, 1.4);
  };

  return (
    <div className="site">

      {/* LightPillar */}
      <div className="pillar-bg">
        <LightPillar
          topColor="#c9a96e"
          bottomColor="#f5f0e8"
          intensity={0.85}
          rotationSpeed={0.18}
          glowAmount={0.003}
          pillarWidth={3.2}
          pillarHeight={0.35}
          noiseIntensity={0.3}
          pillarRotation={20}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Curtain */}
      <div className="curtain" ref={curtainRef} />

      {/* ══ HERO ══ */}
      <div className={`hero-view ${galleryMode ? 'hidden' : ''}`}>

        {/* NAV */}
        <nav className="nav" ref={navRef}>
          <div className="nav-agency">Portfolio</div>
        </nav>

        {/* FIRST NAME — top-left */}
        <div className="name-first-wrap">
          <h1 className="name-first" ref={firstRef}>Achraf Rayan</h1>
        </div>

        {/* GOLD RULE */}
        <div className="hero-rule" ref={ruleRef} />

        {/* TAGLINE — below rule, left */}
        <div className="tagline-block" ref={taglineRef}>
          <span className="tagline-dot" />
          <span className="tagline-text">Model · Algiers, Algeria</span>
        </div>

        {/* DESCRIPTION — below tagline, left */}
        <p className="description" ref={descRef}>Available for editorial, commercial & runway.</p>

        {/* SOCIALS — top-right */}
        <div className="socials" ref={socialsRef}>
          <div className="contact-header">Contact</div>
          <a href="https://instagram.com/handle" target="_blank" rel="noreferrer" className="social-link">
            Instagram
          </a>
          <span className="social-sep">·</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="social-link">
            Email
          </a>
          <span className={`copy-msg ${copied ? 'show' : ''}`}>Copied!</span>
        </div>

        {/* LAST NAME — bottom-right */}
        <div className="name-last-wrap">
          <h1 className="name-last" ref={lastRef}>Bouzourine</h1>
        </div>

        {/* CTA — bottom-left */}
        <button
          ref={btnRef}
          className="cta-btn"
          onClick={handleEnterGallery}
          onMouseEnter={onBtnEnter}
          onMouseLeave={onBtnLeave}
        >
          <span className="btn-fill" ref={btnFillRef} />
          <span className="btn-label" ref={btnLabelRef}>View Gallery</span>
        </button>

        {/* FOOTER — bottom-right */}
        <footer className="footer" ref={footerRef}>
          <span>© {new Date().getFullYear()} Achraf Rayan Bouzourine</span>
          <span className="footer-sep">—</span>
          <span>All rights reserved</span>
          <div>
            <span>Website by Bluesy</span><br />
            <span>Contact: bluesydev.contact@gmail.com</span>
          </div>

        </footer>

      </div>

      {/* ══ GALLERY ══ */}
      <div className={`gallery-view ${galleryMode ? 'on' : ''}`}>

        <div className="gallery-nav">
          <span className="gallery-nav-name">Achraf Rayan Bouzourine</span>
          <span className="gallery-nav-label">Photo Gallery</span>
        </div>

        {galleryMode && (
          <CircularGallery
            items={GALLERY_IMAGES}
            bend={2.5}
            textColor="#f7f2ea"
            borderRadius={0.03}
            font="400 18px 'Playfair Display', serif"
            scrollSpeed={2}
            scrollEase={0.055}
          />
        )}

        <button
          ref={el => {
            backBtnRef.current = el;
            if (el && galleryMode) {
              // ensure the x-offset is zero before we animate in
              gsap.set(el, { x: 0 });
              gsap.fromTo(el,
                { autoAlpha: 0, y: 14, x: 0 },
                { autoAlpha: 1, y: 0, x: 0, duration: 0.6, ease: 'expo.out', delay: 0.28 }
              );
            }
          }}
          className="back-btn"
          style={{ visibility: galleryMode ? 'visible' : 'hidden' }}
          onClick={handleBack}
          onMouseEnter={onBackEnter}
          onMouseLeave={onBackLeave}
        >
          <span className="back-arrow">←</span>
          <span>Back</span>
        </button>

      </div>

    </div>
  );
}