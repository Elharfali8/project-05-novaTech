'use client'

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


const StepsCard = ({ title, icon, desc }) => {
    const [stepIsOpen, setStepIsOpen] = useState(false)

    const handleSteps = () => {
        setStepIsOpen((prev) => !prev)
    }

    console.log(stepIsOpen);
    
    
  return (
    <div className="relative bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-700 w-full">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 opacity-50 blur-3xl rounded-full z-[4] pointer-events-none"></div>
          <div className='z-[5]'>
              <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                      <span className="text-xl lg:text-2xl">{icon}</span>
                      <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
                  </div>
                  {stepIsOpen ? (
                      <button type='button' onClick={handleSteps} className=" cursor-pointer">
                      <FaMinus size={26} />
                </button>
                  ) : (
                    <button type='button' onClick={handleSteps} className="cursor-pointer">
                    <FaPlus size={26} />
                    </button>
                  )}
                  
                  
              </div>
              {stepIsOpen && <div className="p-1 mt-2">
                  <p className="lg:text-lg text-gray-300">{desc}</p>
              </div>}
          </div>
      </div>
      
  )
}

export default StepsCard