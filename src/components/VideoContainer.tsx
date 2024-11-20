import { useEffect, useRef, useState } from "react";
import { FormatView } from "../utils/FormatView";
import { FormatDuration } from "../utils/FormatDuration";
import { format } from "timeago.js";
import Title from "../utils/Title";
import { VideoProps } from "../types/types";

const VideoContainer = ({
  videoId,
  title,
  // channelId,
  channelTitle,
  channelThumbnail,
  viewCount,
  publishedAt,
  thumbnail,
  // videoUrl,
  lengthText,
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
      key={videoId}
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={``} className="relative aspect-video">
        {thumbnail && thumbnail?.[0]?.url ? (
          <img
            src={thumbnail?.[0]?.url}
            className={`${
              isVideoPlaying ? "rounded-0" : "rounded-xl"
            } transition-[border-radius] duration-200 w-full h-full object-cover`}
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-300 text-xl">
            No thumbnail
          </div>
        )}
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm py-0.5 px-1 rounded-md">
          {FormatDuration(lengthText)}
        </div>
        <video
          ref={videoRef}
          src={
            "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          }
          playsInline
          muted
          className={`absolute inset-0 block h-full object-contain ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          } transition-opacity duration-300`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/`} className="flex-shrink-0">
          {channelThumbnail && channelThumbnail?.[0].url ? <img
            src={
              channelThumbnail?.[0]?.url
            }
            title={channelTitle}
            className="w-12 h-12 rounded-full object-cover"
          /> : (
            <div className="w-12 h-12 rounded-full bg-green-300"/>
          )}
        </a>
        <div className="flex flex-col gap-1">
          <a href={``} className="font-bold line-clamp-2" title={title}>
            {title}
          </a>
          <a
            href={``}
            className="w-fit text-secondary-text text-sm relative group"
          >
            {channelTitle}
            <Title
              title={channelTitle}
              titlePosition="bottom-full left-1/2 -translate-x-1/2 mb-4"
            />
          </a>
          <div
            className="text-secondary-text text-sm"
            title={`${FormatView(viewCount)} views • ${format(publishedAt)}`}
          >
            {FormatView(viewCount)} views • {format(publishedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
