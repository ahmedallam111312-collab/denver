import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h1 style={{ color: 'var(--color-primary)', margin: 0, fontSize: '3rem', fontWeight: 300, letterSpacing: '2px' }}>DENVER</h1>
        <p style={{ color: 'var(--color-text)', letterSpacing: '6px', textTransform: 'uppercase', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>Aesthetic Clinic</p>
      </motion.div>
    </motion.div>
  );
};
