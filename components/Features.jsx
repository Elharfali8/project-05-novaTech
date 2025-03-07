import React from 'react'
import SectionTitle from './SectionTitle'
import { features } from '@/utils/data'
import Card from './Card'

const Features = () => {
  return (
      <section className='py-4 md:py-6 lg:py-8'>
          <SectionTitle title='features' />
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {features.map((item) => {
                  return <Card key={item.id} {...item} />
              })}
          </div>
    </section>
  )
}

export default Features