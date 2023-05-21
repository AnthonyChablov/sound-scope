import {ReactNode} from 'react';
import RecommendationsLayout from '@/components/App/Recommendations/RecommendationsLayout';
import Sidebar from '@/components/App/Sidebar/Sidebar';

const recommendations = () => {

    return (
        <>
            <Sidebar/>
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