import React from 'react'
import SectionTitle from './SectionTitle'
import about from '@/assets/about.svg'
import Image from 'next/image'

const About = () => {
  return (
    <section className='py-8 md:py-10 lg:py-14'>
          <SectionTitle title='about' />
          <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className="relative">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 opacity-50 blur-3xl rounded-full pointer-events-none"></div>
      <Image 
        src={about} 
                      alt="About Us" 
                      width={400}
                      height={300}
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Right Side - Content */}
    <div>
      <h2 className="text-4xl font-bold">About Our Platform</h2>
      <p className="text-gray-400 mt-4">
        We provide innovative solutions to help businesses grow. Our platform 
        integrates powerful AI-driven tools, automation, and intuitive user experience.
      </p>
      
      {/* Features */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-blue-500 text-2xl">✔️</span>
          <p className="text-gray-300">AI-Powered Automation</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-blue-500 text-2xl">✔️</span>
          <p className="text-gray-300">User-Friendly Interface</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-blue-500 text-2xl">✔️</span>
          <p className="text-gray-300">Reliable & Secure</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-6 py-3 px-6 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all">
        Learn More
      </button>
    </div>
        </div>
      </section>
  )
}

export default About