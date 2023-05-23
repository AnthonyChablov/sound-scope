import React  from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

interface ILoadingLayout{
  color?:string
}

const LoadingLayout = ({color = "#64748b"} : ILoadingLayout) => {

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="flex flex-col items-center justify-center">
        <ScaleLoader color={color} />
        <p className='text-slate-100 mt-5 text-lg font-semibold'>Loading...</p>
      </div>
        
    </div>
  )
}

export default LoadingLayout;