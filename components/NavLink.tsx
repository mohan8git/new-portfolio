import React from 'react';

export default function NavBar() {
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='hidden lg:block mb-6' aria-label='In-page jump links'>
      <ul className='mt-16 w-max'>
        {['about', 'experience', 'skills'].map((id) => (
          <li key={id}>
            <a
              className={`group flex items-center py-3`}
              href={`#${id}`}
              onClick={(e) => handleAnchorClick(e, id)}
            >
              <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
