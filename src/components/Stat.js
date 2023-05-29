import React from 'react'

const Stat = ({ Number, Topic }) => {
  const gradient = 'bg-gradient-to-r from-pink-dark to-pink-normal';

  return (
    <div className={`Stat-container w-fit rounded-50 flex flex-col justify-center items-center py-10 h-min grow ${gradient} shadow-inner `}>
        <h3 className={`Stat-number h3 text-white w-fit`}>{Number}</h3>
        <p className={`Stat-topic text-white w-fit`}>{Topic}</p>
    </div>
  )
}

export default Stat