import { useState, useEffect } from 'react';
import style from './Timer.module.css';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          updateDisplayTime(newSeconds);
          return newSeconds;
        });
      }, 1000);
    } else if (totalSeconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  const updateDisplayTime = (totalSecs) => {
    setHours(Math.floor(totalSecs / 3600));
    setMinutes(Math.floor((totalSecs % 3600) / 60));
    setSeconds(totalSecs % 60);
  };

  const handleStart = () => {
    const total = hours * 3600 + minutes * 60 + seconds;
    if (total > 0) {
      setTotalSeconds(total);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
  };

  const handleInputChange = (e, setter) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setter(value);
  };

  return (
    <div className="timer-container">
      <div className={style.container}>
        {isRunning ? (
          <h1 style={{color:"white"}}>{hours} : {minutes} : {seconds}</h1>
        ) : (


          // background: none;
          // border: none;
          // color: white;
          // font-size: 48px;
          // font-weight: bold;
          // width: 70px;
          // text-align: center;
          <div>
            <input
              className={style.timeInput}
              type="number"
              value={hours}
              onChange={(e) => handleInputChange(e, setHours)}
              disabled={isRunning}
              min="0"
              placeholder="Hours"
            />
            <input
              className={style.timeInput}
              type="number"
              value={minutes}
              onChange={(e) => handleInputChange(e, setMinutes)}
              disabled={isRunning}
              min="0"
              max="59"
              placeholder="Minutes"
            />
            <input
              className={style.timeInput}
              type="number"
              value={seconds}
              onChange={(e) => handleInputChange(e, setSeconds)}
              disabled={isRunning}
              min="0"
              max="59"
              placeholder="Seconds"
            />
          </div>
        )}
      </div>
      <div className={style.controls}>
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;