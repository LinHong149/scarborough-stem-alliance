import React from 'react'
import { footer } from '../constants'

const MailingList = () => {
  return (
    <div className="container mx-auto px-4 flex flex-wrap w-full md:w-1/2 lg:w-1/4 mb-8">
        <h2 className="text-xl font-bold mb-4">Join Our Mailing List</h2>
        <form className="flex flex-col">
            <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 rounded py-2 px-3 mb-2"
            />
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
            >
            Subscribe
            </button>
        </form>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
        <div className="flex flex-wrap">
          {footer.map((section, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <MailingList/>
    </div>
  )
}

export default Footer