const InfoCard = ({ icon: Icon, title, children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400',
    green: 'bg-green-500/10 group-hover:bg-green-500/20 text-green-400'
  };

  const borderColors = {
    blue: 'hover:border-blue-500/30',
    purple: 'hover:border-purple-500/30',
    green: 'hover:border-green-500/30'
  };

  return (
    <div className={`bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 ${borderColors[color]} transition-all duration-300 group`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 ${colorClasses[color]} rounded-lg transition-colors`}>
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="text-gray-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;