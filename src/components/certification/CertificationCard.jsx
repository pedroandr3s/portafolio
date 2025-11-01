import { ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';

const CertificationCard = ({ certification }) => {
  const { title, institution, description, skills, link, color, icon: IconComponent } = certification;

  return (
    <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 bg-${color}-500/10 rounded-lg group-hover:bg-${color}-500/20 transition-colors`}>
            <IconComponent className={`text-${color}-400`} size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{institution}</p>
          </div>
        </div>
      </div>

      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <Badge key={skill} color={color} variant="default" showIcon={true}>
            {skill}
          </Badge>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group/link"
        >
          Ver Certificado
          <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
};

export default CertificationCard;