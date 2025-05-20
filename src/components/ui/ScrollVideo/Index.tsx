import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '../Icon';

interface ScrollVideoProps {
  src: string;
  className?: string;
  threshold?: number; // Visibility threshold (0-1)
  scrollHeight?: string; // Height to use for scroll calculation
}

export const ScrollVideo: React.FC<ScrollVideoProps> = ({ 
  src, 
  className = '', 
  threshold = 0.5,
  scrollHeight = '150vh' // Default to 2x viewport height for scroll range
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  // Track scroll position relative to a taller container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // When video metadata is loaded, store its duration
  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setVideoDuration(videoRef.current?.duration || 0);
      };
      
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // If already loaded
      if (videoRef.current.readyState >= 2) {
        setVideoDuration(videoRef.current.duration);
      }
      
      return () => {
        videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  // Map scroll progress to video progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (videoRef.current && isInView && videoDuration > 0) {
        // Calculate video time based on scroll position
        const newTime = value * videoDuration;
        
        // Only update if the difference is significant to avoid constant updates
        if (Math.abs(videoRef.current.currentTime - newTime) > 0.01) {
          videoRef.current.currentTime = newTime;
          setProgress(value);
        }
        
        // Mark as completed if we reach the end (95% scrolled)
        if (value >= 0.95 && !isCompleted) {
          setIsCompleted(true);
        } else if (value < 0.95 && isCompleted) {
          setIsCompleted(false);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isInView, isCompleted, videoDuration]);

  // Set up intersection observer to detect when video is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInView(isVisible);
      },
      { threshold: [0.1, threshold], rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);

  // Handle replay button click
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setProgress(0);
      setIsCompleted(false);
      
      // Scroll back to the start of the video section
      scrollContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* This is the taller container that determines scroll range */}
      <div 
        ref={scrollContainerRef} 
        style={{ height: scrollHeight }}
        className="relative"
      >
        {/* This is the actual sticky video container */}
        <div 
          ref={containerRef} 
          className={`sticky top-0 overflow-hidden ${className}`}
        >
          <video 
            ref={videoRef}
            src={src}
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Progress bar */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-accent-primary"
            style={{ width: `${progress * 100}%` }}
          />

          {/* Replay button overlay */}
          {isCompleted && (
            <button 
              onClick={handleReplay}
              className="absolute bottom-6 right-4 bg-black/70 text-background-primary p-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              aria-label="Replay video"
            >
              <Icon name="restart" size={24} className="rotate-[270deg] text-text-primary" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollVideo;
