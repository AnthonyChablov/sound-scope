import React from 'react'

interface ISubHeader {
    subHeader: string;
    info: string;
}

const SubHeader = ({subHeader, info} : ISubHeader) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-slate-400 font-bold mb-2 capitalize text-center md:text-xl'>{info}</p>
        <h2 className="font-normal text-sm uppercase text-slate-200 md:text-md">{subHeader}</h2>
    </div>
  )
}

export default SubHeader