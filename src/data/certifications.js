import { Database, Shield, Code2, Users, FileCode, Server, Palette, Terminal, Brain, ShoppingCart, UserCircle, Lock, Activity } from 'lucide-react';

export const certifications = [
  {
    id: 'mean-stack',
    title: 'MEAN Stack Developer',
    institution: 'EDUBCA',
    description: 'Curso enfocado en el desarrollo full-stack utilizando MongoDB, ExpressJS, Angular y NodeJS.',
    skills: ['MongoDB', 'ExpressJS', 'Angular', 'NodeJS', 'Full-stack'],
    link: 'https://coursera.org/verify/specialization/CH3KJ8CL035H',
    color: 'blue',
    icon: Server,
    featured: true
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity',
    institution: 'Google',
    description: 'Certificación profesional sobre ciberseguridad, cubriendo conceptos esenciales como análisis de riesgos, ataques y defensas.',
    skills: ['Ciberseguridad', 'Análisis de Riesgos', 'Seguridad de Redes'],
    link: 'https://coursera.org/verify/professional-cert/32R6N67N0Q87',
    color: 'red',
    icon: Shield,
    featured: true
  },
  {
    id: 'html-css-js',
    title: 'HTML, CSS, and Javascript for Web Developers',
    institution: 'Johns Hopkins University',
    description: 'Curso completo sobre desarrollo web con HTML, CSS y JavaScript, enfocado en la creación de aplicaciones dinámicas.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Aplicaciones Web'],
    link: 'https://coursera.org/verify/2T0GL9G571R4',
    color: 'green',
    icon: Code2,
    featured: true
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master Certification',
    institution: 'LearnQuest',
    description: 'Certificación de Scrum Master, cubriendo los principios y la implementación de Scrum.',
    skills: ['Scrum', 'Gestión de proyectos', 'Metodologías Ágiles'],
    link: 'https://coursera.org/verify/specialization/K8QEZC1D01PR',
    color: 'purple',
    icon: Users,
    featured: true
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science, AI & Development',
    institution: 'IBM',
    description: 'Curso sobre el uso de Python en ciencia de datos, desarrollo de inteligencia artificial y aplicaciones de machine learning.',
    skills: ['Python', 'Data Science', 'AI', 'Machine Learning'],
    link: 'https://coursera.org/verify/7HT1WJ7YBN58',
    color: 'yellow',
    icon: Brain,
    featured: false
  },
  {
    id: 'angular-fundamentals',
    title: 'Angular Fundamentals: Building Responsive Web Apps with Ease',
    institution: 'EDUBCA',
    description: 'Curso sobre los fundamentos de Angular para construir aplicaciones web responsivas.',
    skills: ['Angular', 'Web Development', 'TypeScript'],
    link: 'https://coursera.org/verify/TD068QQWSSVM',
    color: 'red',
    icon: FileCode,
    featured: false
  },
  {
    id: 'intro-css3',
    title: 'Introduction to CSS3',
    institution: 'Johns Hopkins University',
    description: 'Curso especializado en las nuevas funcionalidades de CSS3, incluyendo transiciones, animaciones y diseño responsivo.',
    skills: ['CSS3', 'Animaciones', 'Responsive Design'],
    link: 'https://coursera.org/verify/IYQXAJJFJ8Y8',
    color: 'blue',
    icon: Palette,
    featured: false
  },
  {
    id: 'linux-sql',
    title: 'Tools of the Trade: Linux and SQL',
    institution: 'Google',
    description: 'Curso sobre el uso de herramientas esenciales como Linux y SQL para el desarrollo y administración de sistemas.',
    skills: ['Linux', 'SQL', 'Sistemas'],
    link: 'https://coursera.org/verify/XJ0PPSVDBBVP',
    color: 'green',
    icon: Terminal,
    featured: false
  },
  {
    id: 'mysql-avanzado',
    title: 'Temas avanzados de MySQL',
    institution: 'Meta',
    description: 'Curso avanzado que aborda temas complejos de MySQL, incluyendo índices, procedimientos almacenados y optimización de consultas.',
    skills: ['MySQL', 'Base de Datos', 'Optimización'],
    link: 'https://coursera.org/verify/3SDQZMIBK9WI',
    color: 'orange',
    icon: Database,
    featured: false
  },
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence (AI)',
    institution: 'IBM',
    description: 'Introducción a los fundamentos de la inteligencia artificial, sus aplicaciones y principales algoritmos.',
    skills: ['AI', 'Machine Learning', 'Deep Learning'],
    link: 'https://coursera.org/verify/OIIZJ17S5NL6',
    color: 'purple',
    icon: Brain,
    featured: false
  },
  {
    id: 'digital-marketing',
    title: 'Foundations of Digital Marketing and E-commerce',
    institution: 'Google',
    description: 'Curso sobre los fundamentos del marketing digital y el comercio electrónico, incluyendo SEO, SEM y análisis de datos.',
    skills: ['Marketing Digital', 'E-commerce', 'SEO', 'SEM'],
    link: 'https://coursera.org/verify/QTUVMIWHGOX3',
    color: 'pink',
    icon: ShoppingCart,
    featured: false
  },
  {
    id: 'liderazgo',
    title: 'Liderazgo y Desarrollo Personal',
    institution: 'Universidad de Palermo',
    description: 'Curso sobre técnicas de liderazgo, comunicación efectiva y desarrollo de habilidades personales.',
    skills: ['Liderazgo', 'Comunicación', 'Desarrollo Personal'],
    link: 'https://coursera.org/verify/KNFYSAZ9G0IM',
    color: 'indigo',
    icon: UserCircle,
    featured: false
  },
  {
    id: 'ethical-hacker',
    title: 'Ethical Hacker',
    institution: 'Cisco',
    description: 'Certificación sobre técnicas y herramientas de hacking ético para garantizar la seguridad de sistemas y redes.',
    skills: ['Hacking Ético', 'Seguridad Informática', 'Redes'],
    link: 'https://www.credly.com/badges/d5470897-6cf1-4249-875b-5415212ff175/print',
    color: 'red',
    icon: Lock,
    featured: true
  },
  {
    id: 'intro-html-css-js',
    title: 'Introduction to HTML, CSS, & JavaScript',
    institution: 'IBM',
    description: 'Curso básico que cubre los fundamentos del desarrollo web con HTML, CSS y JavaScript.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Desarrollo Web'],
    link: 'https://coursera.org/verify/H6DO8IYT8OCX',
    color: 'green',
    icon: Code2,
    featured: false
  },
  {
    id: 'medical-software',
    title: 'Introduction to Medical Software',
    institution: 'Yale',
    description: 'Introducción al desarrollo y validación de software médico, incluyendo estándares de la industria y requisitos regulatorios.',
    skills: ['Desarrollo de Software', 'Regulación Médica', 'Validación'],
    link: 'https://coursera.org/verify/U5SF1UADDO96',
    color: 'blue',
    icon: Activity,
    featured: false
  }
];