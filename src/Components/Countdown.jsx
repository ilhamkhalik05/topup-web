import React, { useEffect, useState } from "react";

const Countdown = () => {
  // Initial state for the countdown (24 hours)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-zinc-900 text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": hours }}></span>
        </span>
      </div>
      <div className="flex flex-col p-2 bg-zinc-900 text-neutral-content">
        <span className="countdown card font-mono text-xl">
          <span style={{ "--value": minutes }}></span>
        </span>
      </div>
      <div className="flex flex-col p-2 bg-zinc-900 text-neutral-content">
        <span className="countdown font-mono text-xl">
          <span style={{ "--value": seconds }}></span>
        </span>
      </div>
    </div>
  );
};

export default Countdown;
