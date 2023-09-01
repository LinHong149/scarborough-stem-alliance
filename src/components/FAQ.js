import React, { useState } from 'react'
import { FAQContent } from '../constants'

const FAQItem = ({ faqItem, onClick }) => {
  const { question, answer, isActive } = faqItem
  return (
    <div 
    className={`FAQ-container flex flex-col ${isActive ? "gap-4": "gap-0"} border-white border-[3px] min-w-[300px] grow rounded-50 w-full [calc(50%-12.5px)] h-min shrink p-9 transition-all duration-100 ease-in`}
    onClick={onClick}
    >
        <div className={`FAQ-top text-[20px]`}>
            <p className={`FAQ-question text-white`}>{question}</p>
        </div>
        <p className={`FAQ-answer flex transition duration-500 text-white ${isActive ? 'test-height' : 'opacity-0 h-0 overflow-hidden'} `}>{answer}</p>
    </div>
  )
}

const FAQ = () => {
  const [faqItems, setFaqItems] = useState(FAQContent);

  const handleItemClick = (itemId) => {
    setFaqItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className='FAQ gap-25 w-full grid-parent'>
      {faqItems.map((faqItem) => (
        <FAQItem 
          key={faqItem.id}
          faqItem={faqItem}
          onClick={() => handleItemClick(faqItem.id)}
        />
      ))}
    </div>
  )
}
 
export default FAQ