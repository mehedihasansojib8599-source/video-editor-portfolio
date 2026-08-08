// components/desktop-lock.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// Renders children at a fixed "desktop" width (1280px) and then scales the
// whole thing down with a CSS transform to exactly fit the real screen
// width — so every device shows the identical desktop layout, locked and
// stable, with no pinch-zoom needed or possible.
const DESKTOP_WIDTH = 1280;

export function DesktopLock({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | null>(null);

  useEffect(() => {
    function updateScale() {
      const screenWidth = window.innerWidth;
      const newScale = screenWidth / DESKTOP_WIDTH;
      setScale(newScale);

      if (wrapperRef.current) {
        // Measure the real, unscaled height of the desktop layout, then
        // scale it too — otherwise the page would leave a huge empty gap
        // (or clip content) below the shrunk content.
        const realHeight = wrapperRef.current.scrollHeight;
        setScaledHeight(realHeight * newScale);
      }
    }

    updateScale();
    window.addEventListener('resize', updateScale);

    // Re-measure after content (images, fonts) finishes loading in, since
    // height can change after first paint.
    const resizeObserver = new ResizeObserver(updateScale);
    if (wrapperRef.current) resizeObserver.observe(wrapperRef.current);

    return () => {
      window.removeEventListener('resize', updateScale);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: scaledHeight ?? 'auto',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          width: DESKTOP_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}