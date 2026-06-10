import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = (i18n.language || '').startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '1rem 2rem' }}>
      <div className="container flex justify-between items-center relative">
        <Link to="/" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
          <span style={{ color: 'var(--color-primary)' }}>DENVER</span> Clinic
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Toggle Button */}
        <div className="mobile-only">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="btn btn-secondary" 
            style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)' }}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-overlay mobile-flex"
          >
            <Link to="/" onClick={closeMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: location.pathname === '/' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.home')}</Link>
            <Link to="/cellulite" onClick={closeMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: location.pathname === '/cellulite' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.cellulite')}</Link>
            <Link to="/body-contouring" onClick={closeMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: location.pathname === '/body-contouring' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.body_contouring')}</Link>
            <Link to="/face-lift" onClick={closeMenu} style={{ fontWeight: 500, fontSize: '1.2rem', color: location.pathname === '/face-lift' ? 'var(--color-primary)' : 'inherit' }}>{t('nav.face_lift')}</Link>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', justifyContent: 'center' }}>
              <button onClick={() => { toggleTheme(); closeMenu(); }} className="btn btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
              
              <button onClick={() => { toggleLanguage(); closeMenu(); }} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Globe size={20} />
                {(i18n.language || '').startsWith('ar') ? 'English' : 'عربي'}
              </button>
            </div>

            <Link to="/contact" onClick={closeMenu} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>{t('nav.book_now')}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
