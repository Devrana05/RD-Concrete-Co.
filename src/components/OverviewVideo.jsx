"use client";

import { useState, useRef } from "react";

export default function OverviewVideo({ src }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

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

  return (
    <div className="relative w-full h-full group cursor-pointer" onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={src} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/60 hover:scale-105 transition-all">
          {isPlaying ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
            </svg>
          ) : (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="ml-1.5">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
