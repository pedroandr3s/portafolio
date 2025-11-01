const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}) => {
  const baseStyles = 'bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8';
  const hoverStyles = hover ? 'hover:border-blue-500/30 transition-all duration-300' : '';
  const gradientStyles = gradient ? 'relative overflow-hidden' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;