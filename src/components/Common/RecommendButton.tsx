import React from 'react';
import Button from '@mui/material/Button';
import Icons from './Icons';

interface IRecommendButton{
    buttonText: string
}

const RecommendButton = ({buttonText}:IRecommendButton) => {
  return (
    <Button 
        className ='bg-slate-400 rounded-3xl text-black w-fit py-1 px-2
            font-semibold text-md hover:bg-slate-500 hover:text-slate-200 '
        variant = "contained"
    >
        <Icons type={'recommend'} size={38} color={'black'}/>
        <p className='ml-3'>{buttonText}</p>
    </Button>
    )
}

export default RecommendButton