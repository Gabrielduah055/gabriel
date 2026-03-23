import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    // Event delegation: check if the hovered target is interactive
    const SELECTOR = 'a, button, input, textarea, [data-cursor-hover]';

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTOR)) {
        dot.style.width = '6px';
        dot.style.height = '6px';
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(240,237,232,0.8)';
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTOR)) {
        dot.style.width = '10px';
        dot.style.height = '10px';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(240,237,232,0.5)';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return { dotRef, ringRef };
}
