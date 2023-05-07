import React from 'react' ; 

interface IErrorLayout{
    error:string
}

const ErrorLayout = ({error} : IErrorLayout) => {
  return (
    <div>
        {error}
    </div>
  )
}

export default ErrorLayout;