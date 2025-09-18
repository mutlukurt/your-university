import { TrendingUp, Building2, BookOpen, Award } from 'lucide-react';
import Container from '../components/Container';
import StatCard from '../components/StatCard';

const stats = [
  {
    icon: <TrendingUp size={48} />,
    value: '92%',
    label: 'Graduate Employment Rate'
  },
  {
    icon: <Building2 size={48} />,
    value: '150+',
    label: 'Industry Partners'
  },
  {
    icon: <BookOpen size={48} />,
    value: '80',
    label: 'Academic Programs'
  },
  {
    icon: <Award size={48} />,
    value: '$5M',
    label: 'Scholarships Awarded'
  }
];

export default function Stats() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}