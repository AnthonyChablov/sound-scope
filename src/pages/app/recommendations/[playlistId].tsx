import React from 'react';
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