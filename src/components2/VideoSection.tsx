import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative aspect-video w-full bg-gray-900 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10 group">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <button 
            onClick={togglePlay}
            className="bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button 
            onClick={toggleMute}
            className="text-white hover:text-blue-300 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
      
      {/* Play button overlay when video is not playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center" onClick={togglePlay}>
          <div className="bg-blue-500/80 rounded-full p-6 cursor-pointer hover:bg-blue-600/80 transition-all duration-300 transform hover:scale-105">
            <Play size={32} fill="white" />
          </div>
        </div>
      )}
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-14 w-full py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          See <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-300 bg-clip-text text-transparent">SolveX</span> in Action
        </h2>
        
        <VideoPlayer videoSrc="/path/to/your/video.mp4" />
        
        <p className="text-gray-300 text-center mt-6 max-w-2xl mx-auto">
          Watch how SolveX works behind the scenes to help you ace your coding assessments.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
