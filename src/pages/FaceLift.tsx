import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaceLift = () => {
  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>Non-Surgical Face Lift</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            Experience an incredible transformation of your jawline and facial contours through remarkable non-invasive procedures.
          </p>
        </AnimatedSection>

        <AnimatedSection className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>MMFU (Ultraformer)</h2>
              <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
                Micro and Macro Focused Ultrasound (MMFU) technology provides a non-surgical lifting and tightening of the face. It targets multiple layers of the skin to stimulate natural collagen production, resulting in a lifted, youthful appearance.
              </p>
              <ul style={{ paddingLeft: '1.5rem', opacity: 0.8, marginBottom: '2rem' }}>
                <li>Jawline definition</li>
                <li>Double chin reduction</li>
                <li>Skin resurfacing and rejuvenation</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                Book Consultation <ArrowRight size={20} />
              </Link>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
               <img src="/facelift.png" alt="Face Lift Results" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Microneedling RF</h3>
            <p style={{ opacity: 0.8 }}>Combines radiofrequency energy with microneedling to dramatically improve skin texture, tighten pores, and reduce fine lines.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Liquid Facelift</h3>
            <p style={{ opacity: 0.8 }}>Strategic placement of dermal fillers and relaxers to restore volume, smooth wrinkles, and gently lift sagging skin.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="glass-panel text-center" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Exosomes & Salmon DNA</h3>
            <p style={{ opacity: 0.8 }}>Cutting-edge regenerative treatments that accelerate healing, boost collagen, and reverse signs of aging at a cellular level.</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
