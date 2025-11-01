import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/pedroandr3s',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pedro-vera-5009a2283/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:pedroverareal@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
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
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-end">
              © {currentYear} Pedro Vera. Hecho con 
              <Heart size={16} className="text-red-500 inline animate-pulse" /> 
              y mucho café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;