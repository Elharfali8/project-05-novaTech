import React from 'react'

const SectionTitle = ({ title }) => {
  return (
      <div className='grid place-items-center mb-5 md:mb-8 lg:mb-10'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl capitalize'>{title}</h1>
    </div>
  )
}

export default SectionTitle