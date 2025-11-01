const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;