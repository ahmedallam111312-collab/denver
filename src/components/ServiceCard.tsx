import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
  badge?: string;
}

export const ServiceCard = ({ title, description, icon, delay = 0, badge }: Props) => {
  return (
    <motion.div
      className="glass-panel"
      style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
      whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      {badge && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-primary)', color: 'white', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {badge}
        </div>
      )}
      {icon && <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{icon}</div>}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ opacity: 0.8, flex: 1 }}>{description}</p>
    </motion.div>
  );
};
