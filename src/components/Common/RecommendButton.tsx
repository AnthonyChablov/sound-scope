import React from 'react';
import Button from '@mui/material/Button';
import Icons from './Icons';

interface IRecommendButton{
    buttonText: string
}

const RecommendButton = ({buttonText}:IRecommendButton) => {
  return (
    <Button 
        className ='bg-slate-100 rounded-3xl text-black w-fit py-1 px-3
            font-semibold text-md hover:bg-slate-300 '
        variant = "contained"
    >
        <Icons type={'recommend'} size={38} color={'black'}/>
        <p className='ml-3'>{buttonText}</p>
    </Button>
    )
}

export default RecommendButton