import { useEffect, useRef, useState } from "react";

type VideoProps = {
  id: number;
  title: string;
  channel: string;
  channelImg: string;
  views: string;
  postedAt: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
};

const VideoContainer = ({
  id,
  title,
  channel,
  channelImg,
  views,
  postedAt,
  thumbnailUrl,
  videoUrl,
  duration,
}: VideoProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else videoRef.current.pause();
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={``} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`${
            isVideoPlaying ? "rounded-0" : "rounded-xl"
          } transition-[border-radius] duration-200 w-full h-full object-cover`}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm p-0.5">
          {duration}
        </div>
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          muted
          className={`absolute inset-0 block h-full object-contain ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          } transition-opacity duration-300`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/`} className="flex-shrink-0">
          <img
            src={channelImg}
            className="w-12 h-12 rounded-full object-cover bg-black"
          />
        </a>
        <div className="flex flex-col gap-1">
          <a href={``} className="font-bold">
            {title}
          </a>
          <a href={``} className="text-secondary-text text-sm">
            {channel}
          </a>
          <div className="text-secondary-text text-sm">
            {views} Views • {postedAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
