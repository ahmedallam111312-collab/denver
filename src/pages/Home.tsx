import { AnimatedSection } from '../components/AnimatedSection';
import { ServiceCard } from '../components/ServiceCard';
import { PhotoCarousel3D } from '../components/PhotoCarousel3D';
import { Activity, Droplets, Sparkles, UserPlus, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.8)), url("/hero_new.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="container text-center">
          <AnimatedSection>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              {t('home.hero_title_1')} <br/><span style={{ color: 'var(--color-primary)' }}>{t('home.hero_title_2')}</span>
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
              {t('home.hero_subtitle')}
            </p>
            <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">{t('nav.book_now')}</Link>
              <Link to="/cellulite" className="btn" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>{t('home.explore')}</Link>
            </div>
          </AnimatedSection>
        </div>
        
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
           <ChevronDown size={32} color="rgba(255,255,255,0.7)" />
        </div>
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-20px) translateX(-50%); }
            60% { transform: translateY(-10px) translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>{t('home.premium_services')}</h2>
            <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
              {t('home.premium_subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <Link to="/cellulite" style={{ display: 'block', height: '100%' }}>
                <ServiceCard 
                  title="Cellulite Reduction" 
                  description="Combat unwanted cellulite with MFCU, LPG, and Shockwave therapy for smooth, firm skin."
                  icon={<Activity size={32} strokeWidth={1.5} />}
                  badge="FDA Approved"
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link to="/body-contouring" style={{ display: 'block', height: '100%' }}>
                <ServiceCard 
                  title="Body Contouring" 
                  description="Dissolve stubborn fat non-invasively and tone your body with MFCU and EMSculpting."
                  icon={<UserPlus size={32} strokeWidth={1.5} />}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Link to="/face-lift" style={{ display: 'block', height: '100%' }}>
                <ServiceCard 
                  title="Non-Surgical Face Lift" 
                  description="Rejuvenate your look and define your jawline with MMFU, Microneedling RF, and more."
                  icon={<Sparkles size={32} strokeWidth={1.5} />}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <ServiceCard 
                title="Skin Resurfacing" 
                description="Restore your skin's youthful glow with advanced peels and hydrafacial treatments."
                icon={<Droplets size={32} strokeWidth={1.5} />}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', height: '400px' }}>
                <img src="/skin_resurfacing.png" alt="Luxurious Skin Treatment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Bespoke Skin Rejuvenation</h2>
              <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Every treatment protocol at Denver Clinic is meticulously tailored to your unique biology. We don't believe in one-size-fits-all.
              </p>
              <ul style={{ paddingLeft: '1.5rem', opacity: 0.8, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Personalized consultations to determine exact needs</li>
                <li>Combination therapies for amplified, long-lasting results</li>
                <li>State-of-the-art non-invasive technologies</li>
              </ul>
              <Link to="/face-lift" className="btn btn-secondary">Discover Facial Treatments</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Ready to Transform?</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
              Schedule your complimentary consultation today and let our experts design your personalized treatment plan.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Book Your Consultation</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Gallery 3D Carousel */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}>Exceptional Results</h2>
            <p style={{ opacity: 0.8 }}>Real transformations. See the difference.</p>
          </AnimatedSection>
          <PhotoCarousel3D images={['/result_1.png', '/result_2.png', '/result_3.png', '/skin_resurfacing.png']} />
        </div>
      </section>
    </div>
  );
};
