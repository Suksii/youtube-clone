import { CSSProperties, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

type VideoProps = {
  isSearchPage: boolean | undefined;
  thumbnails: {
    high: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    default: { url: string; width: number; height: number };
  };
  videoId: string;
  duration: string | undefined;
};

const Video = ({ isSearchPage, thumbnails, videoId }: VideoProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else videoRef.current.pause();
  }, [isVideoPlaying]);

  return (
    <Link
      to={`/watch/${videoId}`}
      className="relative aspect-video w-full h-full"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      {thumbnails ? (
        <img
          src={thumbnails.medium.url}
          className={`${
            isVideoPlaying && !isSearchPage ? "rounded-0" : "rounded-xl"
          } transition-[border-radius] duration-200 object-cover w-full h-full`}
        />
      ) : (
        <div className="h-full flex items-center justify-center bg-gray-300 text-xl">
          No thumbnail
        </div>
      )}
      {/* {!isLive && (
      <div className="absolute bottom-1 right-1 font-semibold bg-secondary-dark text-secondary text-sm py-0.5 px-1 rounded-md">
        {duration && FormatDuration(duration)}
      </div>
    )} */}
      <video
        ref={videoRef}
        src={`https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4`}
        playsInline
        muted
        className={`absolute inset-0 block object-contain ${
          isSearchPage && "rounded-xl"
        } ${
          isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </Link>
  );
};

export default Video;
