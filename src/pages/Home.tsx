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
            <div className="flex justify-center gap-4 stack-mobile">
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
                  title={t('home.services.cellulite.title')} 
                  description={t('home.services.cellulite.desc')}
                  icon={<Activity size={32} strokeWidth={1.5} />}
                  badge="FDA Approved"
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link to="/body-contouring" style={{ display: 'block', height: '100%' }}>
                <ServiceCard 
                  title={t('home.services.body.title')} 
                  description={t('home.services.body.desc')}
                  icon={<UserPlus size={32} strokeWidth={1.5} />}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Link to="/face-lift" style={{ display: 'block', height: '100%' }}>
                <ServiceCard 
                  title={t('home.services.face.title')} 
                  description={t('home.services.face.desc')}
                  icon={<Sparkles size={32} strokeWidth={1.5} />}
                />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <ServiceCard 
                title={t('home.services.skin.title')} 
                description={t('home.services.skin.desc')}
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
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{t('home.bespoke.title')}</h2>
              <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                {t('home.bespoke.desc')}
              </p>
              <ul style={{ paddingLeft: '1.5rem', opacity: 0.8, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>{t('home.bespoke.list_1')}</li>
                <li>{t('home.bespoke.list_2')}</li>
                <li>{t('home.bespoke.list_3')}</li>
              </ul>
              <Link to="/face-lift" className="btn btn-secondary">{t('home.bespoke.button')}</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('home.cta.title')}</h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
              {t('home.cta.subtitle')}
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>{t('home.cta.button')}</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Results Gallery 3D Carousel */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}>{t('home.gallery.title')}</h2>
            <p style={{ opacity: 0.8 }}>{t('home.gallery.subtitle')}</p>
          </AnimatedSection>
          <PhotoCarousel3D images={['/result_1.png', '/result_2.png', '/result_3.png', '/skin_resurfacing.png']} />
        </div>
      </section>
    </div>
  );
};
