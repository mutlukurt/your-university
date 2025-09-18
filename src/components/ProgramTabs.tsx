import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import ProgramCard from './ProgramCard';

const programData = {
  undergraduate: [
    {
      title: 'Computer Science',
      description: 'Master algorithms, software engineering, and emerging technologies with hands-on projects.',
      duration: '4 years'
    },
    {
      title: 'Business Administration',
      description: 'Develop leadership skills and business acumen through real-world case studies.',
      duration: '4 years'
    },
    {
      title: 'Engineering',
      description: 'Design innovative solutions to complex problems with cutting-edge technology.',
      duration: '4 years'
    },
    {
      title: 'Psychology',
      description: 'Explore human behavior and mental processes through research and practice.',
      duration: '4 years'
    },
    {
      title: 'Data Science',
      description: 'Analyze complex datasets and extract meaningful insights for decision-making.',
      duration: '4 years'
    },
    {
      title: 'Digital Marketing',
      description: 'Master modern marketing strategies and digital communication platforms.',
      duration: '4 years'
    }
  ],
  graduate: [
    {
      title: 'MBA',
      description: 'Advanced business strategy with industry mentors in a project-driven curriculum.',
      duration: '2 years'
    },
    {
      title: 'Master of Data Science',
      description: 'Gain hands-on experience with machine learning and big data analytics.',
      duration: '18 months'
    },
    {
      title: 'Master of Engineering',
      description: 'Specialize in advanced engineering principles and innovation management.',
      duration: '2 years'
    },
    {
      title: 'Master of Psychology',
      description: 'Advanced research methods and clinical practice in psychological sciences.',
      duration: '2 years'
    },
    {
      title: 'Master of Public Health',
      description: 'Address global health challenges through evidence-based policy and practice.',
      duration: '2 years'
    },
    {
      title: 'Master of Education',
      description: 'Transform educational practices with innovative teaching methodologies.',
      duration: '18 months'
    }
  ],
  online: [
    {
      title: 'Online MBA',
      description: 'Flexible business education designed for working professionals worldwide.',
      duration: '24 months'
    },
    {
      title: 'Online Computer Science',
      description: 'Complete degree program with virtual labs and collaborative projects.',
      duration: '4 years'
    },
    {
      title: 'Online Psychology',
      description: 'Study human behavior through interactive online coursework and research.',
      duration: '3-6 years'
    },
    {
      title: 'Online Data Analytics',
      description: 'Master data analysis tools and techniques through practical applications.',
      duration: '18 months'
    },
    {
      title: 'Online Project Management',
      description: 'Develop leadership and organizational skills for complex project delivery.',
      duration: '12 months'
    },
    {
      title: 'Online Digital Marketing',
      description: 'Create effective marketing campaigns using modern digital platforms.',
      duration: '12 months'
    }
  ]
};

export default function ProgramTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = ['Undergraduate', 'Graduate', 'Online'];
  const tabKeys = ['undergraduate', 'graduate', 'online'] as const;

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 rounded-xl bg-bg p-1 mb-6 md:mb-8">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              clsx(
                'w-full rounded-lg py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-primary shadow'
                  : 'text-muted hover:bg-white/20 hover:text-text'
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabKeys.map((key, tabIndex) => (
          <Tab.Panel key={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {programData[key].map((program, index) => (
                <ProgramCard
                  key={program.title}
                  title={program.title}
                  description={program.description}
                  duration={program.duration}
                  index={index}
                />
              ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}