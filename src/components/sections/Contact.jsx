import { Github, Linkedin, Mail, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => {
  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@pedroandr3s',
      href: 'https://github.com/pedroandr3s',
      color: 'purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Pedro Vera',
      href: 'https://www.linkedin.com/in/pedro-vera-5009a2283/',
      color: 'blue'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'pedroverareal@gmail.com',
      href: 'mailto:pedroverareal@gmail.com',
      color: 'green'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-32 px-6 relative">
      <div className="max-w-5xl mx-auto w-full">
        <SectionTitle subtitle="¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones">
          Contacto
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            const colorClasses = {
              purple: 'bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400',
              blue: 'bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-400',
              green: 'bg-green-500/10 group-hover:bg-green-500/20 text-green-400'
            };

            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors ${colorClasses[method.color]}`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-400 text-sm">{method.value}</p>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-12 text-center">
          <Send className="mx-auto mb-6 text-blue-400" size={48} />
          <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tu visión.
          </p>
          
          <a
            href="mailto:pedroverareal@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 group"
          >
            Enviar Mensaje
            <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;