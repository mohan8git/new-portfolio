'use client';
import About from '@/components/About';
import ExperienceCard from '@/components/ExperienceCard';
import NavBar from '@/components/NavLink';
import Skills from '@/components/Skills';
import SocialLinks from '@/components/SocialLinks';
import experienceData, { ExperienceData } from '@/data';
import { useEffect, useRef } from 'react';

export default function Home() {
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (rightSectionRef.current) {
        rightSectionRef.current?.scrollBy({
          top: event.deltaY,
          behavior: 'auto',
        });
        event.preventDefault();
      }
    };
    document.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      document.body.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #142747, #060a15)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='h-screen overflow-hidden flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-4 overflow-y-auto'>
      <div className='hidden lg:block text-slate-200 lg:col-span-1 lg:ml-36 lg:sticky lg:top-0 h-full lg:h-screen p-4 sm:p-4'>
        <h1 className='text-4xl font-bold sm:text-5xl mt-12 lg:mt-24'>
          <a href='/'>Mohan Bishnoi</a>
        </h1>
        <p className='mt-3 text-xl font-bold sm:text-2xl'>
          Senior Frontend Engineer
        </p>
        <p className='mt-4 max-w-xs leading-normal text-[#7b8a9e]'>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>

        <NavBar />

        <SocialLinks />
      </div>

      <div
        id='rightSection'
        ref={rightSectionRef}
        className='font-medium text-[#94A3b8] lg:col-span-1 lg:mr-36 text-[15px] sm:text-[17px] h-full lg:h-screen overflow-y-auto no-scrollbar'
      >
        <div className='block lg:hidden'>
          <h1 className='text-4xl font-bold sm:text-5xl mt-12 lg:mt-24 px-4'>
            <a href='/'>Mohan Bishnoi</a>
          </h1>
          <p className='mt-3 text-xl font-bold sm:text-2xl px-4'>
            Senior Frontend Engineer
          </p>
          <p className='mt-4 max-w-xs leading-normal text-[#7b8a9e] px-4'>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <SocialLinks />
        </div>
        <div>
          <div className='block lg:hidden font-bold sticky top-0 transparent z-10 p-6 backdrop-blur-sm w-full text-slate-50'>
            ABOUT
          </div>
          <div id='about' className='mb-4 mt-0 lg:mt-24 text-[17px] px-4'>
            <About />
          </div>
        </div>

        <div className='block lg:hidden font-bold sticky top-0 transparent z-10 p-6 backdrop-blur-sm w-full text-slate-50'>
          EXPERIENCE
        </div>
        <div id='experience'>
          {experienceData &&
            experienceData.map((experience: ExperienceData, index: number) => (
              <ExperienceCard
                key={index}
                startString={experience.startString}
                endString={experience.endString}
                role={experience.role}
                companyName={experience.companyName}
                description={experience.description}
                skills={experience.skills}
              />
            ))}
        </div>
        <div id='skills' className='mt-12 lg:mt-24'>
          <Skills />
        </div>
      </div>
    </div>
  );
}
