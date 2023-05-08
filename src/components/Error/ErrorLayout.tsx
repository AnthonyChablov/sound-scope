import React from 'react' ; 
import Icons from '../Common/Icons';
import Link from 'next/link';
import OutlinedButton from '../Common/OutlinedButton';
interface IErrorLayout{
    error?:string
}

const ErrorLayout = ({error} : IErrorLayout) => {
  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="flex flex-col items-center justify-center">
        <Icons type='error' size={45}/>
        <p className='text-slate-100 mt-5 text-2xl font-semibold'>Error something went wrong.</p>
        <div className="pt-8">
            <Link href={'/login'}>
                <OutlinedButton title='Go Back'/>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorLayout;