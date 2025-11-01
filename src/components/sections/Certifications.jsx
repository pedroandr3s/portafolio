import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import CertificationList from '../certification/CertificationList';
import Button from '../ui/Button';
import { certifications } from '../../data/certifications';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="min-h-screen py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Formación continua en las últimas tecnologías y mejores prácticas del desarrollo web">
          Cursos y Certificados
        </SectionTitle>

        <CertificationList certifications={certifications} featured={!showAll} />

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-12">
          {!showAll ? (
            <Button
              variant="secondary"
              onClick={() => setShowAll(true)}
            >
              Ver Todos los Certificados ({certifications.length})
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={() => setShowAll(false)}
            >
              Mostrar Menos
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;