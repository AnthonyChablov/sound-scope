import {useState, useEffect} from 'react'; 

const useLoading = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        if (loading) {
          let timer = setTimeout(() => {
              setLoading(false);
          }, 750);
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