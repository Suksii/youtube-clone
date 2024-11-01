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
  return (
    <div className="flex flex-col gap-2">
      <a href={``} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm p-0.5">
          {duration}
        </div>
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
