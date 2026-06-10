import { AnimatedSection } from '../components/AnimatedSection';
import { UserPlus, Zap } from 'lucide-react';

export const BodyContouring = () => {
  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>Body Contouring</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            Dissolve stubborn fat non-invasively and achieve your dream silhouette.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-16" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
          <img src="/bodycontouring.png" alt="Body Contouring and Wellness" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection className="glass-panel" style={{ padding: '3rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <UserPlus size={40} color="var(--color-primary)" />
              <h2 style={{ margin: 0 }}>MFCU Treatment</h2>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              MFCU is a non-invasive treatment that can dissolve stubborn fat from any part of the body. In most cases, one session is enough to see remarkable results.
            </p>
            <ul style={{ paddingLeft: '1.5rem', opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Lose up to 6cm from one session</li>
              <li>Convenient and pain-free</li>
              <li>Simultaneously tones the skin</li>
              <li>No downtime required</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '3rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <Zap size={40} color="var(--color-primary)" />
              <h2 style={{ margin: 0 }}>EMSculpting</h2>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>
              High-intensity electromagnetic therapy that tones muscles while burning fat. Equivalent to thousands of crunches or squats in a single session.
            </p>
            <ul style={{ paddingLeft: '1.5rem', opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Builds muscle mass naturally</li>
              <li>Reduces localized fat deposits</li>
              <li>Enhances overall body definition</li>
              <li>Quick, 30-minute sessions</li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
