// src/components/home/MissionSection.tsx
import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-12 px-4 bg-lime-100">
      <div className="container mx-auto max-w-3xl text-center">
        <blockquote className="text-lg md:text-2xl italic">
          &quot;Our mission is to provide high quality products that are not tested on animals and are completely safe for the environment.&quot;
        </blockquote>
        <p className="mt-4 text-sm text-gray-700">Marilyn, Founder</p>
      </div>
    </section>
  );
};

export default MissionSection;