import React from 'react'
import Bar_Chart3 from '../../Components/Charts/Bar_Chart3'


function WorkHourByResources() {
  return (
    <div className='bg-white shadow-md rounded-md w-[500px] '>
        <h6 className='font-semibold pt-4 pl-4 text-base'>Work Hours By Resources</h6>
        <div className='flex justify-center items-center pb-2'>
            <Bar_Chart3 width={500} height={350} />
        </div>
        
    </div>
  )
}

export default WorkHourByResources