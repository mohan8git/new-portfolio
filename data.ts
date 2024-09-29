export type ExperienceData = {
  startString: string;
  endString: string;
  role: string;
  companyName: string;
  description: string;
  skills: string[];
};

const experienceData: ExperienceData[] = [
  {
    startString: 'PRESENT',
    endString: 'FEB 2023',
    role: 'Frontend Lead',
    companyName: 'Unolo',
    description:
      'Developed field force management software, streamlining operations for sales and service teams. Focused on building responsive, intuitive interfaces and working with modern frameworks like React and Next.js.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'AWS',
      'Github',
      'GraphQL',
    ],
  },
  {
    startString: 'FEB 2023',
    endString: 'JUN 2022',
    role: 'Senior Frontend Developer',
    companyName: 'Cinta Medtech',
    description:
      'At Cinta MedTech, I played a pivotal role in developing a chat application that connects dieticians and users. I utilized React and Next.js to build a dynamic and responsive user interface, ensuring seamless navigation and an optimal user experience.',
    skills: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Socket.io', 'Jenkins'],
  },
  {
    startString: 'JUN 2022',
    endString: 'DEC 2021',
    role: 'Senior Frontend Developer',
    companyName: 'Locofast',
    description:
      'At Locofast, a leading marketplace for fabrics, I worked as a Frontend Developer, where I played a crucial role in building a Progressive Web App (PWA) that allows users to track orders from the mill to the factory. Utilizing Next.js, I developed a seamless and responsive user interface, enhancing the overall shopping experience.',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA', 'MySQL'],
  },
  {
    startString: 'DEC 2021',
    endString: 'OCT 2020',
    role: 'Software Engineer',
    companyName: 'GeeksforGeeks',
    description:
      'At GeeksforGeeks, I worked as a Software Engineer, where I developed and maintained the company’s website. I was responsible for building new features, fixing bugs, and optimizing the website for performance. I also mentored junior developers, helping them improve their coding skills.',
    skills: ['React', 'TypeScript', 'DynamoDB', 'GCP'],
  },
];

export default experienceData;
