const VideoContainer = ({
  title,
  cannel,
  views,
  postedAt,
  thumbnailUrl,
  videoUrl,
  duration,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <a
        className="
    relative aspect-video"
      >
        <img
          src={thumbnailUrl}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm p-0.5">
          {duration}
        </div>
      </a>
    </div>
  );
};

export default VideoContainer;
