import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: new URL('../assets/images/akash_profile.JPG', import.meta.url).href, alt: 'Akash Profile' },
  { src: new URL('../assets/images/flight.JPG', import.meta.url).href, alt: 'Flight' },
  { src: new URL('../assets/images/nag-tibba.JPG', import.meta.url).href, alt: 'Nag Tibba' },
  { src: new URL('../assets/images/code-view.JPG', import.meta.url).href, alt: "Code View" },
  { src: new URL('../assets/images/him-sunset.JPG', import.meta.url).href, alt: 'Himalayan Sunset' },
  { src: new URL('../assets/images/lake.JPG', import.meta.url).href, alt: 'Mountain Lake' },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="h-full w-full overflow-hidden rounded-[2rem]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.img
          key={current}
          custom={direction}
          src={images[current].src}
          alt={images[current].alt}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((img, idx) => (
          <button
            key={img.alt}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === current ? 'w-6 bg-ink-100' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
