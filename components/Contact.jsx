import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <section id='contact' className="py-16 bg-[#0F172A] text-white">
  <div className="max-w-4xl mx-auto text-center">
    
    <SectionTitle title='Get in Touch' subTitle="Have any questions? Reach out and we’ll get back to you as soon as possible." />
    
    {/* Form */}
    <form className="mt-8 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring focus:ring-blue-500"
        />
      </div>
      
      <textarea 
        rows="5" 
        placeholder="Your Message" 
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring focus:ring-blue-500"
      ></textarea>
      
      <button 
        type="submit" 
        className="w-full md:w-auto px-6 py-3 bg-[#6366F1] hover:bg-[#7e80fe] rounded-lg transition-all">
        Send Message
      </button>

    </form>
  </div>
</section>

  )
}

export default Contact