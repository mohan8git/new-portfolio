import React from 'react';

type Props = {
  startString: string;
  endString: string;
  role: string;
  companyName: string;
  description: string;
  skills: string[];
};

const ExperienceCard = ({
  startString,
  endString,
  role,
  companyName,
  description,
  skills,
}: Props) => {
  return (
    <div className='relative grid grid-cols-5 hover:bg-white/5 rounded-lg shadow-xs outline-5 outline-black/5 hover:backdrop-blur-3xl group hover:cursor-pointer mb-8 hover:shadow-slate-100 p-4'>
      <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
      <div className='col-span-1 flex flex-col justify-between'>
        <p className='text-slate-500 text-sm font-bold mt-1'>{startString}</p>
        <div className='border-l border-slate-500 text-slate-500 h-full my-2 border-dashed mx-2'></div>
        <p className='text-slate-500 text-sm font-bold'>{endString}</p>
      </div>
      <div className='col-span-4 sm:ml-0 ml-2'>
        <p className='text-lg font-medium text-white group-hover:text-[#64ffda]'>
          {role} at {companyName}
        </p>
        <p className='mt-2 text-[#94A3b8] text-[16px]'>{description}</p>
        <div className='flex flex-wrap gap-2 my-8'>
          {skills &&
            skills?.map((skill: string) => (
              <div
                key={skill}
                className='bg-[#152a39] px-4 py-2 text-xs font-regular text-[#64ffda] rounded-full shadow-md transition-transform transform hover:scale-105'
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
