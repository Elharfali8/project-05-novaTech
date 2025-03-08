import React from 'react'
import SectionTitle from './SectionTitle'
import { features } from '@/utils/data'
import Card from './Card'

const Features = () => {
  return (
      <section id='features' className='py-8 md:py-10 lg:py-14'>
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