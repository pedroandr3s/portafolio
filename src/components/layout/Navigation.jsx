import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollTo } from '../../hooks/useScrollTo';

const Navigation = () => {
  const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
  const activeSection = useActiveSection(sections);
  const scrollToSection = useScrollTo();

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'certifications', label: 'Certificados' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
      <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative ${
                activeSection === item.id ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;