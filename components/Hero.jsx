import React from 'react'
import HeroIllustration from './HeroIllustration'

const Hero = () => {
  return (
    <section className="grid place-items-center md:grid-cols-2 min-h-[calc(100vh-64px)] px-6">
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Powering the <span className="text-[#6366F1]">Future</span> of SaaS
        </h1>
        <p className="text-gray-400 mt-4">
          Automate workflows, analyze data, and scale your business with NovaTech.
        </p>
        <div className="mt-6">
          <button className="bg-[#6366F1] px-6 py-3 rounded-lg text-white font-medium">
            Get Started
          </button>
          <button className="ml-4 text-[#6366F1] underline">Learn More</button>
        </div>
      </div>

      {/* Right Side: Animated Illustration */}
      <HeroIllustration />
    </section>
  )
}

export default Hero