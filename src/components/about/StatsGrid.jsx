import { Code2, Terminal, Award, Coffee } from 'lucide-react';

const StatsGrid = ({ stats }) => {
  const icons = {
    'Proyectos': Code2,
    'Tecnologías': Terminal,
    'Certificados': Award,
    'Café': Coffee
  };

  const colors = {
    blue: 'text-blue-400',
    green: 'text-green-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400'
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const Icon = icons[stat.label];
        return (
          <div
            key={index}
            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 text-center group"
          >
            <Icon className={`mx-auto mb-3 ${colors[stat.color]} group-hover:scale-110 transition-transform`} size={24} />
            <div className={`text-4xl font-bold ${colors[stat.color]} mb-2`}>
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;