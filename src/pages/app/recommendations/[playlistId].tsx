import {ReactNode} from 'react';
import RecommendationsLayout from '@/components/App/Recommendations/RecommendationsLayout';

const recommendations = () => {

    return (
        <>
            <RecommendationsLayout/>
        </>
    )
}

export default recommendations;

recommendations.getLayout = function ApplicationLayout(page:ReactNode){
    return (
      <>
        {page}
        
      </>
    )
  }