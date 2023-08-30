import React, { useState, useEffect } from 'react';
import { stats } from '../constants';

const Stats = () => {
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          if (counter.currentNumber < counter.number) {
            return {
              ...counter,
              currentNumber: counter.currentNumber + 1
            };
          }
          return counter;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
  }, []);

  return (
    <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
      {counters.map((info) => (
        <div
          key={info.description}
          className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min grow ${gradient} `}
        >
          <h3 className={`Stat-number h3 text-white w-fit`}>
            {info.currentNumber}
          </h3>
          <p className={`Stat-topic text-white w-fit`}>{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
