/* eslint-disable @next/next/no-img-element */
// src/components/home/ValuePropositions.tsx
import React from 'react';

const ValuePropositions = () => {
  const values = [
    {
      id: 'vegan',
      title: 'Vegan',
      description: 'Our entire collection is vegan and cruelty free.',
      icon: (
        <img src='/images/Vegan.png' alt='Vegan' className="h-full w-auto"/>
      )
    },
    {
      id: 'natural',
      title: 'Natural',
      description: 'We only use the finest natural ingredients.',
      icon: (
        <img src='/images/Natural.png' alt='Vegan' className="h-full w-auto"/>
      )
    },
    {
      id: 'recyclable',
      title: 'Recyclable',
      description: 'All packaging is recyclable and eco-friendly.',
      icon: (
        <img src='/images/Recyclable.png' alt='Vegan' className="h-full w-auto"/>
      )
    },
    {
      id: 'compostable',
      title: 'Compostable',
      description: 'Orders are shipped with biodegradable peanuts.',
      icon: (
        <img src='/images/Compostable.png' alt='Vegan' className="h-full w-auto"/>
      )
    }
  ];

  return (
    <section className="py-16 bg-[linear-gradient(90deg,_rgba(240,244,236,1)_7%,_rgba(241,235,226,1)_50%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map(value => (
            <div key={value.id} className="text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="font-medium mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;