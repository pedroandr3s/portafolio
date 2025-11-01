// Mapeo de tecnologías a URLs de logos oficiales
export const techLogoMap = {
  // Databases - Logos oficiales
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Base de Datos': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',

  // Backend - Logos oficiales
  'ExpressJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'NodeJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',

  // Frontend Frameworks - Logos oficiales
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',

  // Full Stack - Logo de JavaScript
  'Full-stack': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Full Stack': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',

  // Web Technologies - Logos oficiales
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'Desarrollo Web': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'Web Development': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'Aplicaciones Web': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',

  // Design - Logos de CSS3 y Bootstrap
  'Animaciones': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Responsive Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',

  // AI & Data Science - Logos oficiales
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Data Science': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'Deep Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',

  // Systems - Logos oficiales
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'Sistemas': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',

  // Security - Usando iconos estables
  'Ciberseguridad': 'https://img.icons8.com/fluency/96/security-checked.png',
  'Análisis de Riesgos': 'https://img.icons8.com/fluency/96/financial-analytics.png',
  'Seguridad de Redes': 'https://img.icons8.com/fluency/96/firewall.png',
  'Hacking Ético': 'https://img.icons8.com/fluency/96/hacking.png',
  'Seguridad Informática': 'https://img.icons8.com/fluency/96/security-shield-green.png',
  'Redes': 'https://img.icons8.com/fluency/96/network.png',

  // Project Management - Usando iconos estables
  'Scrum': 'https://img.icons8.com/fluency/96/scrum.png',
  'Gestión de proyectos': 'https://img.icons8.com/fluency/96/project.png',
  'Metodologías Ágiles': 'https://img.icons8.com/fluency/96/agile.png',

  // Marketing - Usando iconos estables
  'Marketing Digital': 'https://img.icons8.com/fluency/96/google-ads.png',
  'E-commerce': 'https://img.icons8.com/fluency/96/shopping-cart.png',
  'SEO': 'https://img.icons8.com/fluency/96/seo.png',
  'SEM': 'https://img.icons8.com/fluency/96/google-ads.png',

  // Soft Skills - Usando iconos estables
  'Liderazgo': 'https://img.icons8.com/fluency/96/leadership.png',
  'Comunicación': 'https://img.icons8.com/fluency/96/communication.png',
  'Desarrollo Personal': 'https://img.icons8.com/fluency/96/personal-growth.png',

  // Medical & Other
  'Desarrollo de Software': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  'Regulación Médica': 'https://img.icons8.com/color/96/medical-heart.png',
  'Validación': 'https://img.icons8.com/color/96/verified-badge.png',
  'Optimización': 'https://img.icons8.com/color/96/speed.png'
};

export const getTechLogo = (techName) => {
  return techLogoMap[techName] || 'https://img.icons8.com/color/96/code.png';
};
