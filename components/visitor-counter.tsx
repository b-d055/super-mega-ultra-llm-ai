'use client'

import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const targetNumber = 42069;
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // 5 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = elapsedTime / duration;
      const easing = 1 - Math.pow(1 - progress, 3); // Exponential decay easing function
      const currentNumber = Math.min(targetNumber, Math.floor(easing * targetNumber));

      setNumber(currentNumber);

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber]);

  return (
    <span>
      {number.toLocaleString('en-US', { minimumIntegerDigits: 8, useGrouping: true })}
    </span>
  );
};

export default VisitorCounter;