import React from 'react';
import IdeaForm from './IdeaForm';

export default function Home() {
  return (
    <div>

       <div className='hero text-white'>
          <h1 className='display-3 fw-bold'>
            IdeaPulse
          </h1>

          <p className='lead'>
            AI Powered Novelty Analyzer
          </p>
        
       </div>

       <IdeaForm/>

    </div>
  )
}