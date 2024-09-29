import React from 'react';
import {
  reactSvg,
  nodejsSvg,
  npmSvg,
  githubSvg,
  tailwindSvg,
  jsSvg,
  tsSvg,
} from '@/assets';

const svgs = {
  reactSvg,
  nodejsSvg,
  npmSvg,
  githubSvg,
  tailwindSvg,
  jsSvg,
  tsSvg,
};

const Skills = () => {
  return (
    <>
      <div className='block lg:hidden font-bold sticky top-0 transparent z-10 p-6 backdrop-blur-sm w-full text-slate-50'>
        SKILLS
      </div>
      <div className='grid grid-cols-4 gap-8 px-6'>
        {(Object.keys(svgs) as (keyof typeof svgs)[]).map((key, index) => (
          <div className='w-12 h-12 hover:text-slate-50' key={index}>
            {svgs[key]}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
