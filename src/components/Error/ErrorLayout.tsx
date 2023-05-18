import React, {useEffect} from 'react' ; 
import Icons from '../Common/Icons';
import Link from 'next/link';
import OutlinedButton from '../Common/OutlinedButton';
import { useRouter } from 'next/router';

interface IErrorLayout{
    text?: string,
    error?:string
}

const ErrorLayout = ({text = 'Error something went wrong.', error} : IErrorLayout) => {

  /* Route */
  const router = useRouter();

  useEffect(() => {
    if(error ){
      router.push('/redirect');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="flex flex-col items-center justify-center">
        <Icons type='error' size={45}/>
        <p className='text-slate-100 mt-5 text-2xl font-semibold'>{text}</p>
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