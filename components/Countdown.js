'use client';
import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0,seconds:0 });

  useEffect(() => {
    const targetDate = new Date("2025-06-20T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds});
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      Launching in {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes and {timeLeft.seconds} seconds.
    </p>
  );
}
