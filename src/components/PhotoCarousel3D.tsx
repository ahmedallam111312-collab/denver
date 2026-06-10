import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
}

export const PhotoCarousel3D = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 150 : 300) : (isMobile ? -150 : -300),
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      zIndex: 0,
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isMobile ? 150 : 300) : (isMobile ? -150 : -300),
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -45 : 45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div style={{ position: 'relative', height: isMobile ? '350px' : '500px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px', overflow: 'hidden' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotateY: { duration: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            position: 'absolute',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            cursor: 'grab'
          }}
          alt="Clinic Result"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        className="btn carousel-nav-btn carousel-nav-btn-left"
        style={{ position: 'absolute', left: isMobile ? '0.5rem' : '2rem', zIndex: 20, background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', color: 'var(--color-primary)', width: '50px', height: '50px', borderRadius: '50%', padding: 0 }}
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="btn carousel-nav-btn carousel-nav-btn-right"
        style={{ position: 'absolute', right: isMobile ? '0.5rem' : '2rem', zIndex: 20, background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', color: 'var(--color-primary)', width: '50px', height: '50px', borderRadius: '50%', padding: 0 }}
        onClick={() => paginate(1)}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Background visual helpers to make it look like a coverflow stack */}
      <div className="desktop-only" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.3, pointerEvents: 'none', padding: '0 10%' }}>
        <img src={images[(currentIndex - 1 + images.length) % images.length]} style={{ height: '70%', filter: 'blur(4px)', transform: 'perspective(1000px) rotateY(30deg)', borderRadius: 'var(--radius-lg)' }} alt="prev" />
        <img src={images[(currentIndex + 1) % images.length]} style={{ height: '70%', filter: 'blur(4px)', transform: 'perspective(1000px) rotateY(-30deg)', borderRadius: 'var(--radius-lg)' }} alt="next" />
      </div>
    </div>
  );
};
