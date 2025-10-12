import React, { useEffect, useState } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isRunning]);
  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Timer;
