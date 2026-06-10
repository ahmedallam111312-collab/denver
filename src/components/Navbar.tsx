import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Globe, Home as HomeIcon, Activity, UserPlus, Sparkles, Phone } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [isBottomNavVisible, setIsBottomNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsBottomNavVisible(false); // scrolling down
      } else {
        setIsBottomNavVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    const newLang = (i18n.language || '').startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', icon: <HomeIcon size={22} />, label: t('nav.home') },
    { path: '/cellulite', icon: <Activity size={22} />, label: t('nav.cellulite') },
    { path: '/body-contouring', icon: <UserPlus size={22} />, label: t('nav.body_contouring') },
    { path: '/face-lift', icon: <Sparkles size={22} />, label: t('nav.face_lift') },
    { path: '/contact', icon: <Phone size={22} />, label: t('nav.book_now') }
  ];

  return (
    <>
      {/* Top Header (Desktop & Mobile) */}
      <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '0.75rem 0' }}>
        <div className="container flex justify-between items-center relative" style={{ padding: '0 1rem' }}>
          <Link to="/" style={{ fontSize: '1.4rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
            <span style={{ color: 'var(--color-primary)' }}>DENVER</span> Clinic
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="desktop-only" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/" style={{ fontWeight: 500, transition: 'color 0.2s', color: location.pathname === '/' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.home')}</Link>
            <Link to="/cellulite" style={{ fontWeight: 500, transition: 'color 0.2s', color: location.pathname === '/cellulite' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.cellulite')}</Link>
            <Link to="/body-contouring" style={{ fontWeight: 500, transition: 'color 0.2s', color: location.pathname === '/body-contouring' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.body_contouring')}</Link>
            <Link to="/face-lift" style={{ fontWeight: 500, transition: 'color 0.2s', color: location.pathname === '/face-lift' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.face_lift')}</Link>
            
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

          {/* Mobile Fixed Theme & Lang Toggles */}
          <div className="mobile-flex desktop-only" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} className="btn btn-secondary" style={{ padding: '0.5rem', borderRadius: '50%' }}>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={toggleLanguage} className="btn btn-secondary" style={{ padding: '0.5rem 0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem' }}>
              <Globe size={16} />
              {(i18n.language || '').startsWith('ar') ? 'EN' : 'عربي'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className={`mobile-flex desktop-only bottom-nav ${isBottomNavVisible ? 'visible' : 'hidden'}`}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`bottom-nav-item ${isActive ? 'active' : ''}`}>
              {item.icon}
              <span style={{ fontFamily: 'var(--font-heading)', marginTop: '2px' }}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
