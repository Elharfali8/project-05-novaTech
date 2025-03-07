import React from 'react'

const PriceCard = ({id, title, price, btn, list}) => {
  return (
    <div className="relative bg-[#1E293B] p-8 rounded-xl border border-gray-700 shadow-lg">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 opacity-50 blur-3xl rounded-full pointer-events-none"></div>
      <div className='text-center mb-3 lg:mb-5'>
        <h2 className={`font-semibold text-xl md:text-2xl lg:text-3xl mb-1`}>{title}</h2>
        {price === 'Custom' ? <p className=' text-lg text-[#6366F1] font-semibold'>Custom</p> : <p className=' tracking-widest text-lg text-[#6366F1] font-semibold'>${price}/mo</p>}
      </div>
      <div className='grid place-items-center'>
      <ul className='grid gap-2 mb-4 lg:mb-7'>
        {list.map((listItem, index) => {
          return <li key={index} className='text-lg lg:text-xl'>{listItem}</li>
          })}
        </ul>
        <button type="button" className=' capitalize bg-[#6366F1] px-4 py-2 rounded-lg text-white font-medium'>
          {btn}
        </button>
      </div>
    </div>
  )
}

export default PriceCard