import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function Revenue() {
  return (
    <div className='bg-white h-[300px] rounded-2xl p-4'>
        <div className='flex justify-between'>
            <h1>Revenue</h1>
            <p className='flex items-center text-gray-400 text-[11px] gap-1'>Last 7 Months <span><ChevronDown className='w-[11px]'/></span></p>
        </div>
        <div>

        </div>
    </div> 
  )
}
