import React from 'react';
import Link from 'next/link';
import Button from "@mui/material/Button";

interface IContainedButton{
    text: string
}

const ContainedButton = ({ text}:IContainedButton) => {
  return (
    <Button 
        className='rounded-full font-bold 
          px-7 py-3 text-slate-200 bg-green-600 hover:bg-green-500 text-xs'
        variant='contained'
        disableTouchRipple
    > 
        {text}
    </Button>
  )
}

export default ContainedButton