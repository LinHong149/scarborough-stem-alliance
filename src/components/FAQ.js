import React, { useState } from 'react'
import { FAQContent } from '../constants'

const FAQItem = ({ faqItem, onClick }) => {
  const { question, answer, isActive } = faqItem
  return (
    <div 
    className={`FAQ-container border-white border-[3px] rounded-50 w-[calc(50%-12.5px)] h-fit shrink p-9`}
    onClick={onClick}
    >
        <div className={`FAQ-top text-[20px]`}>
            <p className={`FAQ-question text-white`}>{question}</p>
        {/* Icon */}
        </div>
        <p className={`FAQ-answer pt-2 duration-200 text-white ${isActive ? 'block' : 'hidden'} `}>{answer}</p>
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
    <div className='FAQ flex flex-wrap gap-25 w-full'>
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