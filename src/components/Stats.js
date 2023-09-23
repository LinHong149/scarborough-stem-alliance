// // // // import { counter } from '@fortawesome/fontawesome-svg-core';
// // // import React, { useState, useEffect } from 'react';
// // // import { stats } from '../constants';

// // // const Stats = () => {
// // //   const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
// // //   const [counters, setCounters] = useState([]);

// // //   // useEffect(() => {
// // //   //   const interval = setInterval(() => {
// // //   //     setCounters((prevCounters) =>
// // //   //       prevCounters.map((counter) => {
// // //   //         if (counter.currentNumber < counter.number) {
// // //   //           return {
// // //   //             ...counter,
// // //   //             currentNumber: counter.currentNumber + 1
// // //   //           };
// // //   //         }
// // //   //         return counter;
// // //   //       })
// // //   //     );
// // //   //   }, 2000 / counter.number);

// // //   //   return () => clearInterval(interval);
// // //   // }, []);

// // //   useEffect(() => {
// // //     const intervals = counters.map((counter) => {
// // //       const intervalTime = Math.max(2000 / counter.number, 1); // Ensuring interval time is at least 1ms

// // //       return setInterval(() => {
// // //         setCounters((prevCounters) =>
// // //           prevCounters.map((prevCounter) => {
// // //             if (prevCounter.currentNumber < prevCounter.number) {
// // //               return {
// // //                 ...prevCounter,
// // //                 currentNumber: prevCounter.currentNumber + 1,
// // //               };
// // //             }
// // //             return prevCounter;
// // //           })
// // //         );
// // //       }, intervalTime);
// // //     });

// // //     return () => intervals.forEach(clearInterval);
// // //   }, [counters]);

// // //   // useEffect(() => {
// // //   //   const intervals = counters.map((counter) => {
// // //   //       const intervalTime = 2000 / counter.number;
// // //   //       return setInterval(() => {
// // //   //           setCounters((prevCounters) =>
// // //   //               prevCounters.map((prevCounter) => {
// // //   //                   if (prevCounter.description === counter.description && prevCounter.currentNumber < prevCounter.number) {
// // //   //                       return {
// // //   //                           ...prevCounter,
// // //   //                           currentNumber: prevCounter.currentNumber + 1
// // //   //                       };
// // //   //                   }
// // //   //                   return prevCounter;
// // //   //               })
// // //   //           );
// // //   //       }, intervalTime);
// // //   //   });
// // //   //
// // //   //   return () => intervals.forEach(clearInterval);
// // //   // }, [counters]);

// // //   useEffect(() => {
// // //     setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
// // //   }, []);

// // //   return (
// // //     <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
// // //       {counters.map((info) => (
// // //         <div
// // //           key={info.description}
// // //           className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
// // //         >
// // //           <h3 className={`Stat-number h3 text-white w-fit`}>
// // //             {info.currentNumber}
// // //           </h3>
// // //           <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Stats;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { stats } from '../constants';

// // // // const Stats = () => {
// // // //   const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
// // // //   const [counters, setCounters] = useState([]);

// // // //   useEffect(() => {
// // // //     const intervals = counters.map((counter) => {
// // // //         const intervalTime = 2000 / counter.number;
// // // //         return setInterval(() => {
// // // //             setCounters((prevCounters) =>
// // // //                 prevCounters.map((prevCounter) => {
// // // //                     if (prevCounter.description === counter.description && prevCounter.currentNumber < prevCounter.number) {
// // // //                         return {
// // // //                             ...prevCounter,
// // // //                             currentNumber: prevCounter.currentNumber + 1
// // // //                         };
// // // //                     }
// // // //                     return prevCounter;
// // // //                 })
// // // //             );
// // // //         }, intervalTime);
// // // //     });

// // // //     return () => intervals.forEach(clearInterval);
// // // //   }, [counters]);

// // // //   useEffect(() => {
// // // //     setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
// // // //   }, []);

// // // //   return (
// // // //     <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
// // // //       {counters.map((info) => (
// // // //         <div
// // // //           key={info.description}
// // // //           className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
// // // //         >
// // // //           <h3 className={`Stat-number h3 text-white w-fit`}>
// // // //             {info.currentNumber}
// // // //           </h3>
// // // //           <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Stats;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { stats } from '../constants';

// // // // const Stats = () => {
// // // //   const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
// // // //   const [counters, setCounters] = useState([]);

// // // //   useEffect(() => {
// // // //     const intervals = counters.map((counter) => {
// // // //       const intervalTime = Math.max(2000 / counter.number, 1); // Ensuring interval time is at least 1ms

// // // //       return setInterval(() => {
// // // //         setCounters((prevCounters) =>
// // // //           prevCounters.map((prevCounter) => {
// // // //             if (prevCounter.currentNumber < prevCounter.number) {
// // // //               return {
// // // //                 ...prevCounter,
// // // //                 currentNumber: prevCounter.currentNumber + 1,
// // // //               };
// // // //             }
// // // //             return prevCounter;
// // // //           })
// // // //         );
// // // //       }, intervalTime);
// // // //     });

// // // //     return () => intervals.forEach(clearInterval);
// // // //   }, [counters]);

// // // //   useEffect(() => {
// // // //     setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
// // // //   }, []);

// // // //   return (
// // // //     <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
// // // //       {counters.map((info) => (
// // // //         <div
// // // //           key={info.description}
// // // //           className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
// // // //         >
// // // //           <h3 className={`Stat-number h3 text-white w-fit`}>
// // // //             {info.currentNumber}
// // // //           </h3>
// // // //           <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Stats;


// // import React, { useState, useEffect } from 'react';
// // import { stats } from '../constants';

// // const Stats = () => {
// //   const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
// //   const [counters, setCounters] = useState([]);

// //   useEffect(() => {
// //     // Initialize counters with calculated increments
// //     setCounters(
// //       stats.map((info) => ({
// //         ...info,
// //         currentNumber: 0,
// //         increment: info.number / (2000 / 60), // total duration / interval duration
// //       }))
// //     );
// //   }, []);

// //   useEffect(() => {
// //     if (counters.length > 0) {
// //       const interval = setInterval(() => {
// //         setCounters((prevCounters) =>
// //           prevCounters.map((counter) => {
// //             if (counter.currentNumber < counter.number) {
// //               return {
// //                 ...counter,
// //                 currentNumber: Math.min(
// //                   counter.currentNumber + counter.increment,
// //                   counter.number
// //                 ),
// //               };
// //             }
// //             return counter;
// //           })
// //         );
// //       }, 60);

// //       return () => clearInterval(interval);
// //     }
// //   }, [counters]);

// //   return (
// //     <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
// //       {counters.map((info) => (
// //         <div
// //           key={info.description}
// //           className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
// //         >
// //           <h3 className={`Stat-number h3 text-white w-fit`}>
// //             {Math.round(info.currentNumber)}
// //           </h3>
// //           <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Stats;
// import React, { useState, useEffect } from 'react';
// import { stats } from '../constants';

// const Stats = () => {
//   const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
//   const [counters, setCounters] = useState([]);

//   useEffect(() => {
//     setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
//   }, []);

//   useEffect(() => {
//     let totalDelay = 0;
    
//     const timeouts = counters.map((counter, index) => {
//       const increment = counter.number / (2000 / 30);
//       const delay = totalDelay;

//       totalDelay += 50; // add the time it takes for the current counter to finish to the total delay

//       return setTimeout(() => {
//         const interval = setInterval(() => {
//           setCounters((prevCounters) => 
//             prevCounters.map((prevCounter, mapIndex) => {
//               if (index === mapIndex && prevCounter.currentNumber < prevCounter.number) {
//                 return {
//                   ...prevCounter,
//                   currentNumber: Math.min(prevCounter.currentNumber + increment, prevCounter.number),
//                 };
//               }
//               return prevCounter;
//             })
//           );
//         }, 30);

//         // Clear the interval after 2000ms
//         setTimeout(() => clearInterval(interval), 2000);
//       }, delay);
//     });

//     // Clear all timeouts when component unmounts
//     return () => timeouts.forEach(clearTimeout);
//   }, [counters]);

//   return (
//     <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
//       {counters.map((info) => (
//         <div
//           key={info.description}
//           className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
//         >
//           <h3 className={`Stat-number h3 text-white w-fit`}>
//             {Math.round(info.currentNumber)}
//           </h3>
//           <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stats;


import React, { useState, useEffect } from 'react';
import { stats } from '../constants';

const Stats = () => {
  const gradient = 'bg-gradient-to-r from-blue-dark to-blue-normal';
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    setCounters(stats.map((info) => ({ ...info, currentNumber: 0 })));
  }, []);

  useEffect(() => {
    const startCounter = (index) => {
      if (index < counters.length) {
        const counter = counters[index];
        const increment = counter.number / (50000 / 30);
        const interval = setInterval(() => {
          setCounters((prevCounters) =>
            prevCounters.map((prevCounter, mapIndex) => {
              if (index === mapIndex && prevCounter.currentNumber < prevCounter.number) {
                return {
                  ...prevCounter,
                  currentNumber: Math.min(prevCounter.currentNumber + increment, prevCounter.number),
                };
              }
              return prevCounter;
            })
          );
        }, 30);
        
        // Schedule the next counter and clear the current interval after 2000ms
        setTimeout(() => {
          clearInterval(interval);
          startCounter(index + 1);
        }, 500);
      }
    }

    // Start the first counter
    startCounter(0);

  }, [counters]);

  return (
    <div className={`Stats flex flex-wrap space-between gap-25 h-fit w-full`}>
      {counters.map((info) => (
        <div
          key={info.description}
          className={`Stat-container min-w-[200px] z-10 w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min flex-1 ${gradient} `}
        >
          <h3 className={`Stat-number h3 text-white w-fit`}>
            {Math.round(info.currentNumber)}
          </h3>
          <p className={`Stat-topic text-white w-fit wrap text-center`}>{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
