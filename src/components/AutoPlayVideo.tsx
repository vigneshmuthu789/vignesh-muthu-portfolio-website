"use client";

import React, { useRef, useEffect } from "react";

interface AutoPlayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AutoPlayVideo({ src, poster, className, style, ...props }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay policy retry handler
          const handleUserInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener("touchstart", handleUserInteraction);
            window.removeEventListener("click", handleUserInteraction);
            window.removeEventListener("scroll", handleUserInteraction);
          };
          window.addEventListener("touchstart", handleUserInteraction, { once: true });
          window.addEventListener("click", handleUserInteraction, { once: true });
          window.addEventListener("scroll", handleUserInteraction, { once: true });
        });
      }
    };

    playVideo();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style }}
      {...props}
    />
  );
}
