import { useMousePosition } from '../../hooks/useMousePosition';

const GlowEffect = () => {
  const mousePosition = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default GlowEffect;