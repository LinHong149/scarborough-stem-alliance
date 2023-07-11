import React, { useState, useEffect } from 'react';
import { stats } from '../constants';

const Stats = () => {
  const gradient = 'bg-gradient-to-r from-blue-dark to-pink-normal';
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
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
  }, []);

  return (
    <div className={`Stats w-100 flex space-between gap-25 h-[20vh] mb-[20vh]`}>
      {counters.map((info) => (
        <div
          key={info.description}
          className={`Stat-container w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min grow ${gradient} shadow-inner `}
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
