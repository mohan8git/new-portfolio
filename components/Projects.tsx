import React from 'react';
import Image from 'next/image';
import { redirectSvg } from '@/assets';

type Props = {
  projectName: string;
  description: string;
  skills: string[];
  imageLink?: string;
  projectLink?: string;
};

const Projects = ({
  projectName,
  description,
  skills,
  imageLink,
  projectLink,
}: Props) => {
  return (
    <>
      <div className='relative  hover:bg-white/5 rounded-lg shadow-xs outline-5 outline-black/5 hover:backdrop-blur-3xl group hover:cursor-pointer hover:shadow-slate-100 p-4'>
        <div className='grid grid-cols-4'>
          <div className='lg:col-span-1 hidden lg:flex flex-col justify-between'>
            <Image
              src={imageLink || '/default-image.png'}
              alt={projectName}
              width={200}
              height={200}
            />
          </div>

          <div className='lg:col-span-3 col-span-5 sm:ml-0 ml-2 lg:pl-2'>
            <p className='text-lg font-medium text-white group-hover:text-[#64ffda] flex'>
              {projectName}
              <a
                href={projectLink}
                target='_blank'
                rel='noreferrer'
                className='pl-2'
              >
                <div className='w-6 h-6'>{redirectSvg}</div>
              </a>
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
        <div className='flex lg:hidden px-2 mb-8'>
          <Image
            src={imageLink || '/default-image.png'}
            alt={projectName}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
