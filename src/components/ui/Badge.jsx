import { getTechLogo } from '../../utils/techIcons';

const Badge = ({ children, color = 'blue', variant = 'default', showIcon = false }) => {
  const colors = {
    blue: 'bg-blue-600/20 border-blue-500/30 text-blue-400',
    purple: 'bg-purple-600/20 border-purple-500/30 text-purple-400',
    green: 'bg-green-600/20 border-green-500/30 text-green-400',
    orange: 'bg-orange-600/20 border-orange-500/30 text-orange-400',
    red: 'bg-red-600/20 border-red-500/30 text-red-400',
    yellow: 'bg-yellow-600/20 border-yellow-500/30 text-yellow-400',
    pink: 'bg-pink-600/20 border-pink-500/30 text-pink-400',
    cyan: 'bg-cyan-600/20 border-cyan-500/30 text-cyan-400',
    indigo: 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400'
  };

  const variants = {
    default: 'px-3 py-1 text-sm font-medium border rounded-lg',
    pill: 'px-4 py-2 text-sm font-medium border rounded-full',
    solid: 'px-3 py-1 text-sm font-medium rounded-lg'
  };

  const logoUrl = showIcon ? getTechLogo(children) : null;

  return (
    <span className={`${variants[variant]} ${colors[color]} hover:scale-105 transition-transform inline-flex items-center gap-1.5`}>
      {showIcon && logoUrl && (
        <img
          src={logoUrl}
          alt={children}
          className="w-4 h-4 object-contain"
        />
      )}
      {children}
    </span>
  );
};

export default Badge;