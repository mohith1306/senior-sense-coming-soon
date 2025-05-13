'use client';
import '../styles/globals.css';
import { useEffect, useState} from 'react';
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
  
      <div className="timer">
        <div className="timer-box">
        <div className="timer-number" id="days">{timeLeft.days}</div>
        <div className="timer-label">Days</div>
        </div>
      <div className="timer-box">
        <div className="timer-number" id="hours">{timeLeft.hours}</div>
        <div className="timer-label">Hours</div>
      </div>
      <div className="timer-box">
        <div className="timer-number" id="minutes">{timeLeft.minutes}</div>
        <div className="timer-label">Minutes</div>
      </div>
      <div className="timer-box">
        <div className="timer-number" id="seconds">{timeLeft.seconds}</div>
        <div className="timer-label">Seconds</div>
      </div>
    </div>

  );
}
