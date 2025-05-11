'use client'; // Make sure this is at the top for Next.js 13+ with app router
import { useEffect, useRef } from 'react';
import Image from 'next/image';
// import image from '../public/images/senior-sense-logo.png'; // Adjust the path as necessary

export default function AnimatedLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    // Optional: Add more advanced animations with JavaScript
    const logo = logoRef.current;
    
    // Example: Add parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position relative to center
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      // Apply subtle transform
      if (logo) {
        logo.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
      }
    };
    
    const handleMouseLeave = () => {
      if (logo) {
        logo.style.transform = 'translate(0, 0) scale(1)';
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (logo) {
        logo.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div className="logo-container" ref={logoRef}>
        {/* Using Next.js Image component for optimized images */}
        <div className="logo-image-wrapper">
          <Image 
            src="/images/logo.png" // Update path to where you store the image in public folder
            alt="SeniorSense Logo"
            width={180} // Set appropriate dimensions
            height={180}
            className="logo-image"
            priority // Loads this image with higher priority
          />
        </div>
      </div>
    </div>
  );
}