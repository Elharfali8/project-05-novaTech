import Features from '@/components/Features'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import React from 'react'

function HomePage() {
  return (
    <main className='max-w-7xl mx-auto px-6 overflow-hidden'>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default HomePage