import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('2025-07-26T00:00:00');
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="countdown-timer">
      <h4>Início do desafio em:</h4>
      <div className="timer-display">
        <div className="timer-unit">
          <span className="timer-number">{formatNumber(timeLeft.days)}</span>
          <span className="timer-label">dias</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number">{formatNumber(timeLeft.hours)}</span>
          <span className="timer-label">horas</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number">{formatNumber(timeLeft.minutes)}</span>
          <span className="timer-label">min</span>
        </div>
        <div className="timer-unit">
          <span className="timer-number">{formatNumber(timeLeft.seconds)}</span>
          <span className="timer-label">seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;