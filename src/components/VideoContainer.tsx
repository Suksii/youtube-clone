import { useEffect, useRef, useState } from "react";
import { FormatView } from "../utils/FormatView";
import { format } from "timeago.js";
import SensorsIcon from '@mui/icons-material/Sensors';
import Title from "./Title";
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
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isLive, setIsLive] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (lengthText == "LIVE") setIsLive(true);
  }, []);

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
        {!isLive && <div className="absolute bottom-1 right-1 font-semibold bg-secondary-dark text-secondary text-sm py-0.5 px-1 rounded-md">
          {lengthText}
        </div>}
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
        <a href={`/`} className="flex-shrink-0 relative h-fit">
          {channelThumbnail && channelThumbnail?.[0].url ? (
            <img
              src={channelThumbnail?.[0]?.url}
              title={channelTitle}
              className={`${
                isLive ? "ring-2 ring-red-600" : ""
              } w-12 h-12 rounded-full object-cover`}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-green-300" />
          )}
          {isLive && (
            <div className="absolute p-0.5 bg-red-600 text-white  top-full -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-sm">
              <p className="uppercase text-[10px] font-semibold">Live</p>
            </div>
          )}
        </a>
        <div className="flex flex-col gap-1">
          <a href={``} className="font-bold line-clamp-2" title={title}>
            {title}
          </a>
          <a
            href={``}
            className="w-fit text-secondary-text text-sm relative group leading-3"
          >
            {channelTitle}
            <Title
              title={channelTitle}
              titlePosition="bottom-full left-1/2 -translate-x-1/2 mb-4"
            />
          </a>
          <div
            className="text-secondary-text text-sm leading-3"
            title={`${FormatView(viewCount)} views • ${format(publishedAt)}`}
          >
            {isLive ? (
              <span>{FormatView(viewCount)} watching</span>
            ) : (
              <span>
                {FormatView(viewCount)} views • {format(publishedAt)}
              </span>
            )}
          </div>
          {isLive && (
            <div className="flex gap-1 items-center w-fit px-0.5 bg-red-600 rounded-sm leading-4">
              <SensorsIcon className="text-white" fontSize="small"/>
              <p className="text-white text-[12px] uppercase font-semibold">Live</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
