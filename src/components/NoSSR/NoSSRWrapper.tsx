import React, {PropsWithChildren} from 'react';
import dynamic from 'next/dynamic';

const NoSSRWrapper = (props:PropsWithChildren) => {
  return (
    <div>{props.children}</div>
  )
}


export default dynamic(() => Promise.resolve(NoSSRWrapper), {
    ssr: false
  })