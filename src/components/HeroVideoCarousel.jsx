"use client";
import { useState, useEffect } from "react";

export default function HeroVideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ["/hero-bg-3.mp4", "/hero-bg-1.mp4", "/hero-bg-2.mp4", "/hero-bg-4.mp4"];



  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {/* Videos */}
      {videos.map((src, index) => (
        <video
          key={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${
            index === currentVideo ? "opacity-80 z-10" : "opacity-0 z-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}



    </div>
  );
}
