import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Globe } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang = (i18n.language || '').startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '1rem 2rem' }}>
      <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
          <span style={{ color: 'var(--color-primary)' }}>DENVER</span> Clinic
        </Link>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ fontWeight: 500, transition: 'color 0.2s' }}>{t('nav.home')}</Link>
          <Link to="/cellulite" style={{ fontWeight: 500, transition: 'color 0.2s' }}>{t('nav.cellulite')}</Link>
          <Link to="/body-contouring" style={{ fontWeight: 500, transition: 'color 0.2s' }}>{t('nav.body_contouring')}</Link>
          <Link to="/face-lift" style={{ fontWeight: 500, transition: 'color 0.2s' }}>{t('nav.face_lift')}</Link>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginInlineStart: 'auto' }}>
            <button onClick={toggleTheme} className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button onClick={toggleLanguage} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <Globe size={18} />
              {(i18n.language || '').startsWith('ar') ? 'EN' : 'عربي'}
            </button>
          </div>

          <Link to="/contact" className="btn btn-primary">{t('nav.book_now')}</Link>
        </div>
      </div>
    </nav>
  );
};
