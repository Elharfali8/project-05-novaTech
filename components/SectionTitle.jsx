import React from 'react'

const SectionTitle = ({ title, subTitle }) => {
  return (
      <div className='grid place-items-center mb-6 md:mb-12 lg:mb-16 '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl capitalize'>{title}</h1>
          {subTitle && <p className='text-gray-400 mt-2'>{subTitle}</p>}
    </div>
  )
}

export default SectionTitle