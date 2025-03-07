import React from 'react'

const Card = ({title, icon, desc}) => {
  return (
    <div className="relative bg-[#1E293B] p-6 rounded-xl shadow-lg transition-all ease-in-out duration-150 hover:scale-105">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 opacity-50 blur-3xl rounded-full"></div>
          <div className='flex items-center gap-4'>
          <span className='text-4xl'>{icon}</span>
          <h1 className='mt-2 text-lg md:text-xl lg:text-2xl font-semibold '>{title}</h1>
          </div>
          <p className='mt-4 text-gray-300'>{desc}</p>
          </div>
  )
}

export default Card