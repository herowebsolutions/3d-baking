import React from 'react';
import content from '../content';

export default function About() {
    
  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#DFB995',
      }}
    >
      <h1 className="text-5xl font-dosis font-bold mb-10">About</h1>
      
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.work.desc}.
      </p>
    </div>
    </>
  );
}