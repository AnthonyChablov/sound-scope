import {useState, useEffect} from 'react'; 

const useLoading = (duration: number = 750) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        if (loading) {
          let timer = setTimeout(() => {
              setLoading(false);
          }, duration);
          return () => {
              clearTimeout(timer);
          };
        } 
    }, [] );

    return (
        { loading }
    )
}

export default useLoading;