import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type VideoProps = {
  isSearchPage: boolean | undefined;
  thumbnails: {
    high: { url: string };
    medium: { url: string };
    default: { url: string };
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
      className="relative aspect-video"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      {thumbnails ? (
        <img
          src={isSearchPage ? thumbnails.high.url : thumbnails.medium.url}
          className={`${
            isVideoPlaying && !isSearchPage ? "rounded-0" : "rounded-xl"
          } transition-[border-radius] duration-200 w-full h-full object-cover`}
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
        className={`absolute inset-0 block h-full object-contain ${
          isSearchPage && "rounded-xl"
        } ${
          isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </Link>
  );
};

export default Video;
