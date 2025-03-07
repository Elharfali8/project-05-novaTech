import React from 'react'
import { steps } from '@/utils/data'
import StepsCard from './StepsCard'
import SectionTitle from './SectionTitle'

const HowItWorks = () => {
  return (
      <section className='py-8 md:py-10 lg:py-14'>
          <SectionTitle title='tutorial' />
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl font-bold">How NovaTech Works</h2>
      <p className="text-gray-400 mt-4">
        Get started in three easy steps and let NovaTech handle the rest.
      </p>
              </div>
              <div className='grid gap-6 w-full'>
              {steps.map((item) => {
                  return <StepsCard key={item.id} {...item} />
              })}
              </div>
              
          </div>
    </section>
  )
}

export default HowItWorks