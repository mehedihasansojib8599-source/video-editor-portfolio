'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [suppressed, setSuppressed] = useState(false); // NEW: hidden while a modal/video is open

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 1200, damping: 55, mass: 0.2 });
  const ringY = useSpring(mouseY, { stiffness: 1200, damping: 55, mass: 0.2 });

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [data-cursor-hover]'));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    // NEW: listen for a global "cursor-suppress" event dispatched by any
    // modal (video player, lightbox, etc.) when it opens/closes.
    const suppress = () => setSuppressed(true);
    const restore = () => setSuppressed(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('cursor-suppress', suppress);
    window.addEventListener('cursor-restore', restore);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('cursor-suppress', suppress);
      window.removeEventListener('cursor-restore', restore);
    };
  }, [mouseX, mouseY]);

  if (!enabled || suppressed) return null; // <-- fully unmounts while a modal is open

  const ringSize = hovering ? 34 : clicking ? 14 : 20;
  const dotSize = clicking ? 5 : hovering ? 3 : 6;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          background: 'linear-gradient(135deg, #FDBA74, #34D399)',
          boxShadow: '0 0 8px 2px rgba(253,186,116,0.7)',
          transition: 'width 0.15s ease, height 0.15s ease',
        }}
      />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: clicking ? 0.6 : 1,
          width: ringSize,
          height: ringSize,
        }}
        transition={{ width: { duration: 0.18 }, height: { duration: 0.18 } }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, #FDBA74, #FDE68A, #34D399, #22D3EE, #FDBA74)',
            filter: hovering ? 'blur(6px) opacity(0.55)' : 'blur(4px) opacity(0.4)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, #FDBA74, #FDE68A, #34D399, #22D3EE, #FDBA74)',
            padding: 1.5,
            WebkitMask:
              'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))',
          }}
        />
      </motion.div>
    </>
  );
}