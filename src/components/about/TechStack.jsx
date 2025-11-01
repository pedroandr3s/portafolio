import { Terminal } from 'lucide-react';

const TechStack = ({ technologies }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Terminal className="text-green-400" size={20} />
        Stack Tecnológico
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="px-4 py-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-center text-sm font-medium hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-default"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;