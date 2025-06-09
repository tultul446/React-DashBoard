import React from 'react'

const ContentHeader = ({title , des}) => {
  return (
    <div className='mb-2'>
     {
        title && <h1 className='text-xl md:text-[20px] font-semibold md:font-bold text-grayText mb-2'>{title}</h1>
     }
      {
        des && <p className='text-[10px] md:text-[12px] font-semibold mt-1 text-grayText'>{des}</p>
      }
    </div>
  )
}

export default ContentHeader
