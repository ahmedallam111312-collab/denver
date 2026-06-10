import { AnimatedSection } from '../components/AnimatedSection';
import { Activity, Wind, Zap, Waves, Target, ShieldCheck } from 'lucide-react';

export const Cellulite = () => {
  return (
    <div className="page-container py-16">
      <div className="container">
        <AnimatedSection className="text-center mb-8">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-primary)' }}>Cellulite Reduction</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
            Reduces cellulite - Smoothes out skin - Enhances body contour
          </p>
        </AnimatedSection>

        <AnimatedSection className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>What is the best non-surgical cellulite treatment?</h2>
          <p style={{ marginBottom: '1rem' }}>The right question you should ask is: <strong>What is the best non-surgical cellulite treatment for me?</strong></p>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
            Because cellulite is not the same for everyone. Cellulite can be caused by different factors, and each case has a different severity level. That’s why our treatment protocol must be personalized. What works perfectly for one person may not work for another.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>Fat accumulation under the skin</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>Weak connective tissue bands</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>Poor circulation</span>
            </div>
            <div className="flex items-center gap-4" style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Target color="var(--color-primary)" />
              <span>Skin laxity or collagen loss</span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mb-16" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
          <img src="/cellulite.png" alt="Cellulite Treatment Device" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </AnimatedSection>

        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Our Advanced Treatments</h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Treatment 1 */}
          <AnimatedSection className="glass-panel" style={{ padding: '2.5rem' }}>
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck size={40} color="var(--color-primary)" />
              <h3 style={{ margin: 0 }}>MFCU (3D)</h3>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--color-primary)', marginBottom: '1rem' }}>FDA-approved technology</p>
            <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
              Reduces fat and cellulite and tightens the skin. RF energy helps destroy fat cells which are then eliminated from the body naturally through the lymphatic system. The heat created encourages the body to go into a healing mode, allowing for collagen and elastin production.
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              *Most patients see significant results with one treatment. Stubborn fat may need 2 to 3 sessions per area spaced about 4 to 6 weeks.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Treatment 2 */}
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Waves size={24} style={{display:'inline', marginRight:'10px'}}/>LPG & Lymphatic Drainage</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                Stimulates the process of burning fat. The skin becomes more elastic, smooth, and tightened.
              </p>
              <ul style={{ paddingLeft: '1.5rem', opacity: 0.8 }}>
                <li>Edema & Cellulite Reduction</li>
                <li>Detoxification</li>
                <li>Pre and Post-Surgery Support</li>
              </ul>
            </AnimatedSection>

            {/* Treatment 3 */}
            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Wind size={24} style={{display:'inline', marginRight:'10px'}}/>Presso Therapy Suit</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                A lymphatic compression suit with 24 air pressure cells creates a pressure gradient that encourages interstitial fluids to move through the lymph system.
              </p>
              <ul style={{ paddingLeft: '1.5rem', opacity: 0.8 }}>
                <li>Lymphatic System Stimulation</li>
                <li>Relaxation and Stress Relief</li>
                <li>Athletic Performance Recovery</li>
              </ul>
            </AnimatedSection>
            
            {/* Treatment 4 */}
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Zap size={24} style={{display:'inline', marginRight:'10px'}}/>Electro-Magnetic-Reshaping</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                Revolutionary high-intensity electromagnetic therapy to tone muscles, reduce fat, and increase muscle mass. Non-invasive, painless, no downtime.
              </p>
            </AnimatedSection>

            {/* Treatment 5 */}
            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}><Activity size={24} style={{display:'inline', marginRight:'10px'}}/>Vacuum RF</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                Stimulates circulation and encourages detoxification. Vacuum activates circulation and breaks down fat deposits that cause skin dimples.
              </p>
            </AnimatedSection>
            
            {/* Treatment 6 */}
            <AnimatedSection delay={0.1} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Shockwave Therapy (AWT)</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                Triggers biological effects, stimulates metabolic processes, and regenerates connective tissue. Accelerates collagen production for skin firmness.
              </p>
            </AnimatedSection>

            {/* Treatment 7 */}
            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>G5 Cellutec</h3>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                FDA-cleared for cellulite reduction. Deep, rhythmic vibrations aid in breaking down fat deposits and alleviating muscle tension.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
