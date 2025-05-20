import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../../constants/projects";
import { pauseImg, playImg, replayImg } from "../../utils";

interface VideoCarouselProps {
  setBackgroundColors: (colors: {
    color1: string;
    color2: string;
    color3: string;
  }) => void;
}

export default function VideoCarousel({ setBackgroundColors }: VideoCarouselProps) {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([])
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([])
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([])

  // video and indicator
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<Event[]>([])
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    // slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
    });

    // video animation to play the video when it is in the view
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animation to move the indicator
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            // set the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" // mobile
                  : window.innerWidth < 1200
                  ? "10vw" // tablet
                  : "4vw", // laptop
            });

            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        const currentVideo = videoRef.current[videoId]

        if (currentVideo) {
          const currentTime = currentVideo.currentTime;
          const duration = hightlightsSlides[videoId].videoDuration;
          anim.progress(currentTime / duration);
        }
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }

      return () => {
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay, isPlaying])

  useEffect(() => {
    if (loadedData.length > 3) {
      const currentVideo = videoRef.current[videoId];
      console.log('Video State:', {
        isPlaying,
        videoId,
        currentVideo: currentVideo?.readyState,
        loadedData: loadedData.length
      });
  
      if (currentVideo) {
        if (isPlaying) {
          console.log('Attempting to play video', videoId);
          const playPromise = currentVideo.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => console.log('Video started playing successfully'))
              .catch(error => console.log('Play error:', error));
          }
        } else {
          console.log('Pausing video', videoId);
          currentVideo.pause();
        }
      }
    }
  }, [isPlaying, videoId, loadedData]);
  
  // vd id is the id for every video until id becomes number 3
  const handleProcess = (type: string, i?: number) => {
    console.log('Process triggered:', type, i);
    
    const currentVideo = videoRef.current[videoId];
    
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i! + 1 }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false, isPlaying: true }));
        currentVideo?.play();
        break;
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: true, startPlay: true }));
        currentVideo?.play();
        console.log('Playing video', currentVideo);
        break;
      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        currentVideo?.pause();
        break;
      default:
        return video;
    }
  };  

  useEffect(() => {
    // Update background colors when video changes
    if (hightlightsSlides[videoId]?.colors) {
      setBackgroundColors(hightlightsSlides[videoId].colors)
    }
  }, [videoId, setBackgroundColors])

  const handleLoadedMetaData = (i: number, e: Event) => {
    setLoadedData((pre) => [...pre, e])
  }

  return (
    <>
      <div className="flex">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() => setVideo((pre) => ({ ...pre, isPlaying: true }))}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex justify-center mt-10">
        <div className="flex items-center justify-center py-3 px-5 bg-background-secondary backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-background-tertiary rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn ml-4 p-2 rounded-full bg-background-secondary backdrop-blur flex items-center">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};