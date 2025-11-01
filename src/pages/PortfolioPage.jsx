import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const PortfolioPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </Layout>
  );
};

export default PortfolioPage;