import CertificationCard from './CertificationCard';

const CertificationList = ({ certifications, featured = false }) => {
  const displayCerts = featured 
    ? certifications.filter(cert => cert.featured)
    : certifications;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayCerts.map((certification) => (
        <CertificationCard key={certification.id} certification={certification} />
      ))}
    </div>
  );
};

export default CertificationList;