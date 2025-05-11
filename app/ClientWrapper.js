'use client';
import { useEffect } from 'react';

export default function ClientWrapper({ children }) {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div id="custom-cursor" className="custom-cursor" />
      <div className="site-wrapper">{children}</div>
    </>
  );
}
