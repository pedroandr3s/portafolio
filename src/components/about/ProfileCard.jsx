const ProfileCard = ({ imageSrc, videoSrc, alt }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            aria-label={alt}
          />
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileCard;