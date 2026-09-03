import React, { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  label?: string;
  isPillar?: boolean;
  radius: number;
}

const PILLAR_LABELS = [
  'Strategy',
  'SEO',
  'Content',
  'Digital Presence',
  'Technology',
  'Growth'
];

export function InteractiveNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    let mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Create nodes
    const nodes: NodePoint[] = [];

    const initNodes = () => {
      nodes.length = 0;
      const count = Math.min(24, Math.floor(width / 45));

      // First add the named strategic pillars
      PILLAR_LABELS.forEach((label, idx) => {
        // Distribute nicely across center-right half where there is whitespace
        const angle = (idx / PILLAR_LABELS.length) * Math.PI * 2;
        const radiusDist = Math.min(width, height) * 0.32;
        const cx = width * 0.58 + Math.cos(angle) * radiusDist;
        const cy = height * 0.48 + Math.sin(angle) * (radiusDist * 0.75);

        nodes.push({
          x: cx,
          y: cy,
          originX: cx,
          originY: cy,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          label,
          isPillar: true,
          radius: 3.5,
        });
      });

      // Add supporting satellite particles
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 1.5,
        });
      }
    };

    initNodes();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
        initNodes();
      }
    });
    resizeObserver.observe(container);

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Gentle organic drift
          node.x += node.vx + Math.sin(time + i) * 0.15;
          node.y += node.vy + Math.cos(time + i * 0.8) * 0.15;

          // Pull back slightly to origin
          const dxOrigin = node.originX - node.x;
          const dyOrigin = node.originY - node.y;
          node.x += dxOrigin * 0.005;
          node.y += dyOrigin * 0.005;

          // Mouse interaction (repel gently)
          const dxMouse = mouse.x - node.x;
          const dyMouse = mouse.y - node.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            const angle = Math.atan2(dyMouse, dxMouse);
            node.x -= Math.cos(angle) * force * 18;
            node.y -= Math.sin(angle) * force * 18;
          }
        }
      }

      // Draw connecting filaments
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = n1.isPillar && n2.isPillar ? 260 : 130;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (n1.isPillar && n2.isPillar ? 0.25 : 0.12);
            ctx.strokeStyle = n1.isPillar && n2.isPillar
              ? `rgba(197, 163, 88, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = n1.isPillar && n2.isPillar ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes & labels
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (node.isPillar) {
          // Subtle glow around major pillars
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, 18
          );
          gradient.addColorStop(0, 'rgba(197, 163, 88, 0.45)');
          gradient.addColorStop(1, 'rgba(197, 163, 88, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
          ctx.fill();

          // Core node dot
          ctx.fillStyle = '#C5A358';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();

          // Subtle typographic label
          if (node.label) {
            ctx.font = '500 11px "Plus Jakarta Sans", monospace';
            ctx.fillStyle = 'rgba(245, 246, 248, 0.75)';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y + 16);
          }
        } else {
          // Satellite dots
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto overflow-hidden opacity-65 select-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
