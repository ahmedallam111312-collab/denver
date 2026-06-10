import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Home } from './pages/Home';
import { Cellulite } from './pages/Cellulite';
import { BodyContouring } from './pages/BodyContouring';
import { FaceLift } from './pages/FaceLift';
import { Contact } from './pages/Contact';

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <div style={{ display: loading ? 'none' : 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || 'en';
    document.documentElement.dir = currentLang.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
        <Route path="/cellulite" element={<PageTransitionWrapper><Cellulite /></PageTransitionWrapper>} />
        <Route path="/body-contouring" element={<PageTransitionWrapper><BodyContouring /></PageTransitionWrapper>} />
        <Route path="/face-lift" element={<PageTransitionWrapper><FaceLift /></PageTransitionWrapper>} />
        <Route path="/contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const KholyMessage = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          exit={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 9999,
            background: 'var(--color-primary)',
            color: 'white',
            padding: '2rem 4rem',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            boxShadow: 'var(--shadow-xl)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            pointerEvents: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <button 
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'rgba(0,0,0,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              lineHeight: 1
            }}
            aria-label="Close"
          >
            ×
          </button>
          بنحبك يا خولي
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <KholyMessage />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
