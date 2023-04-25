import React from 'react';

interface ISubDisplay{
    title: string,
    amount : number,
}



const SubDisplay = ({title, amount}:ISubDisplay) => {
  return (
    <div className='flex flex-col items-center'> 
        <p className='text-[#1db954] font-semibold text-xl '>{amount}</p>
        <p className=' text-zinc-500 text-sm font-semibold pt-1'>{title}</p>
    </div>
  )
}

export default SubDisplay