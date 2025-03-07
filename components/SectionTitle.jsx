import React from 'react'

const SectionTitle = ({ title }) => {
  return (
      <div className='grid place-items-center mb-6 md:mb-12 lg:mb-16 '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl capitalize'>{title}</h1>
    </div>
  )
}

export default SectionTitle