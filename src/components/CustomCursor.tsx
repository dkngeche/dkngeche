import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export type CursorMode = 'default' | 'link' | 'project' | 'magnetic' | 'text';

interface CursorState {
  mode: CursorMode;
  text?: string;
  isHovered: boolean;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    mode: 'default',
    isHovered: false,
  });
  const [isTouch, setIsTouch] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid, weighted motion
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device or reduced motion
    const touchCheck = window.matchMedia('(pointer: coarse)').matches;
    const motionCheck = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setIsTouch(touchCheck);
    setReducedMotion(motionCheck);

    if (touchCheck || motionCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic element hover detection using dataset and selectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      if (projectEl) {
        setCursorState({
          mode: 'project',
          text: projectEl.getAttribute('data-cursor-text') || 'VIEW CASE →',
          isHovered: true,
        });
        return;
      }

      const magneticEl = target.closest('[data-cursor="magnetic"]');
      if (magneticEl) {
        setCursorState({
          mode: 'magnetic',
          text: magneticEl.getAttribute('data-cursor-text') || undefined,
          isHovered: true,
        });
        return;
      }

      const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"]');
      if (interactiveEl) {
        setCursorState({
          mode: 'link',
          isHovered: true,
        });
        return;
      }

      setCursorState({
        mode: 'default',
        isHovered: false,
      });
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || reducedMotion || !isVisible) return null;

  const isProject = cursorState.mode === 'project';
  const isMagnetic = cursorState.mode === 'magnetic';
  const isLink = cursorState.mode === 'link';

  return (
    <>
      {/* Ambient Cursor Glow / Light (subtle, non-distracting) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isProject ? 240 : 160,
          height: isProject ? 240 : 160,
          background: isProject 
            ? 'radial-gradient(circle, rgba(197, 163, 88, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(197, 163, 88, 0.08) 0%, transparent 70%)',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />

      {/* Main Cursor Dot & Expansion Bubble */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full font-mono text-[10px] font-bold uppercase tracking-wider"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProject ? 110 : isMagnetic ? 48 : isLink ? 36 : 10,
          height: isProject ? 110 : isMagnetic ? 48 : isLink ? 36 : 10,
          backgroundColor: isProject
            ? 'rgba(197, 163, 88, 0.95)'
            : isMagnetic
            ? 'rgba(197, 163, 88, 0.2)'
            : isLink
            ? 'rgba(255, 255, 255, 0.15)'
            : 'rgba(197, 163, 88, 0.9)',
          borderColor: isProject
            ? '#C5A358'
            : isMagnetic
            ? '#C5A358'
            : isLink
            ? 'rgba(255, 255, 255, 0.4)'
            : 'transparent',
          borderWidth: isLink || isMagnetic ? 1 : 0,
          backdropFilter: isProject || isLink ? 'blur(4px)' : 'none',
          color: isProject ? '#070D18' : '#F5F6F8',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.2,
        }}
      >
        {isProject && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center leading-none px-2 font-bold tracking-tight text-[11px]"
          >
            {cursorState.text || 'VIEW →'}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
