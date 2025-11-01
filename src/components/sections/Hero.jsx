import { Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import ScrollIndicator from '../ui/ScrollIndicator';
import { useScrollTo } from '../../hooks/useScrollTo';

const Hero = () => {
  const scrollToSection = useScrollTo();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/pedroandr3s', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pedro-vera-5009a2283/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pedroverareal@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full animate-fade-in">
          <span className="text-blue-400 text-sm font-mono flex items-center gap-2">
            <Sparkles size={16} />
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-fade-in-up">
          Pedro Vera
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Desarrollador Web Full Stack
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Especializado en crear experiencias web excepcionales con React, Next.js y TypeScript.
          Transformando ideas en soluciones digitales innovadoras.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            variant="primary"
            onClick={() => scrollToSection('projects')}
            icon={<ArrowRight size={20} />}
          >
            Ver Proyectos
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('contact')}
          >
            Contactar
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg transition-all duration-300 hover:scale-110 hover:border-blue-500"
                aria-label={social.label}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;