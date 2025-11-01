import { Code2, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import InfoCard from '../about/InfoCard';
import ProfileCard from '../about/ProfileCard';
import StatsGrid from '../about/StatsGrid';
import TechStack from '../about/TechStack';
import { techStack, stats } from '../../data/techStack';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Conoce más sobre mi experiencia y pasión por el desarrollo web">
          Sobre Mí
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            <InfoCard icon={Code2} title="Desarrollador" color="blue">
              <p>
                Desarrollador web especializado en frontend con experiencia en{' '}
                <span className="text-blue-400 font-semibold">React</span>,{' '}
                <span className="text-blue-400 font-semibold">Next.js</span>,{' '}
                <span className="text-blue-400 font-semibold">TypeScript</span> y{' '}
                <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
                Me apasiona crear interfaces intuitivas y aplicaciones de alto rendimiento que resuelvan problemas reales.
              </p>
            </InfoCard>

            <InfoCard icon={Sparkles} title="Mentalidad" color="purple">
              <p>
                Con <span className="text-purple-400 font-semibold">15+ certificaciones</span> en desarrollo web, 
                metodologías ágiles y ciberseguridad, busco constantemente crecer profesionalmente. 
                Mi enfoque está en la mejora continua, pensamiento innovador y liderazgo efectivo en cada proyecto.
              </p>
            </InfoCard>

            <TechStack technologies={techStack} />
          </div>

          {/* Right Column - Profile & Stats */}
          <div className="space-y-8">
            <ProfileCard videoSrc="./Video_Listo_Sin_Boca.mp4" alt="Pedro Vera" />
            <StatsGrid stats={stats} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;