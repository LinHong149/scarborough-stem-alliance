import React, { useState } from 'react'

const FAQItem = ({ isActive, onClick }) => {
  return (
    <div 
    className={`FAQ-container border-black border-[3px] rounded-50 w-[calc(50%-12.5px)] h-fit shrink p-9`}
    onClick={onClick}
    >
        <div className={`FAQ-top text-[24px]`}>
            <p className={`FAQ-question`}>Lorem ipsum dolor sit amet consectetur.</p>
        {/* Icon */}
        </div>
        <p className={`FAQ-answer pt-2 duration-200 ${isActive ? 'block' : 'hidden'} `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis unde maxime perferendis optio, consectetur esse eius voluptatum eligendi quas laudantium.</p>
    </div>
  )
}

const FAQ = () => {
  const [faqItem, setFaqItem] = useState([
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: false},
  ])

  const handleItemClick = (itemId) => {
    setFaqItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? {...item, isActive: !item.isActive} : item
        // item.id === itemId ? {...item, isActive: !item.isActive} : {...item, isActive: false}
      )
    )
  }

  return (
    <div className='FAQ flex flex-wrap gap-25'>
      {faqItem.map((item) => (
        <FAQItem 
          key={item.id}
          isActive={item.isActive} 
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  )
}
 
export default FAQ