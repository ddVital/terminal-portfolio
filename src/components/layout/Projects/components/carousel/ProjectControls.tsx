import { pauseImg, playImg, replayImg } from "../../../../../utils/index";

interface ProjectControlsProps {
  totalVideos: number;
  setVideoDivRef: (el: HTMLDivElement | null, index: number) => void;
  setVideoSpanRef: (el: HTMLSpanElement | null, index: number) => void;
  isLastVideo: boolean;
  isPlaying: boolean;
  handleProcess: (type: string) => void;
}

export const ProjectControls = ({
  totalVideos,
  setVideoDivRef,
  setVideoSpanRef,
  isLastVideo,
  isPlaying,
  handleProcess
}: ProjectControlsProps) => {
  return (
    <div className="relative flex justify-center mt-10">
      <div className="flex items-center justify-center py-3 px-5 bg-background-secondary backdrop-blur rounded-full">
        {Array.from({ length: totalVideos }).map((_, i) => (
          <span
            key={i}
            className="mx-2 w-3 h-3 bg-background-tertiary rounded-full relative cursor-pointer"
            ref={(el) => setVideoDivRef(el, i)}
          >
            <span
              className="absolute h-full w-full rounded-full"
              ref={(el) => setVideoSpanRef(el, i)}
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
  );
};
