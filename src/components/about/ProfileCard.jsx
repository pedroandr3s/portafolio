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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-slate-900/90 backdrop-blur rounded-lg p-4 border border-slate-800">
            <p className="font-mono text-sm text-gray-400">
              <span className="text-blue-400">const</span>{' '}
              <span className="text-purple-400">developer</span> = {'{'}
              <br />
              <span className="ml-4 text-green-400">passionate</span>: <span className="text-yellow-400">true</span>,
              <br />
              <span className="ml-4 text-green-400">creative</span>: <span className="text-yellow-400">true</span>
              <br />
              {'}'};
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;