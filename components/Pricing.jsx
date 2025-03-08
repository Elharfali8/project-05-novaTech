import React from 'react'
import SectionTitle from './SectionTitle'
import { pricing } from '@/utils/data'
import PriceCard from './PriceCard'

const Pricing = () => {
  return (
      <section id='pricing' className='py-8 md:py-10 lg:py-14'>
      <SectionTitle title='Simple & Transparent Pricing' subTitle='Choose the plan that fits your needs. No hidden fees.' />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {pricing.map((item) => {
        return <PriceCard key={item.id} {...item} />
      })}
      </div>
    </section>
  )
}

export default Pricing