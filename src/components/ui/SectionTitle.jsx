const SectionTitle = ({ children, subtitle }) => {
  return (
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold mb-4">{children}</h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;