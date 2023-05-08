import React from 'react';
import Icons from '@/components/Common/Icons';

interface IInfoIcon{
    isShown: boolean,
    mode?: string | undefined
}

const InfoIcon = ({isShown, mode}:IInfoIcon) => {
  return (
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 
        transition duration-150 ease-in-out shadow-2xl rounded-full
        ${isShown 
            ? 'block ' 
            : 'hidden'
        }
    `}>
        <Icons type='infoCircle' size={mode==='top-artists' ? 35 : 25 } />
    </div>
  )
}

export default InfoIcon