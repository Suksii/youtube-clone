import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "./Button";

const RelatedVideos = () => {
  type RelatedVideosType = {
    videoUrl: string;
    videoTitle: string;
    channelName: string;
    views: number;
  };

  const relatedVideos: RelatedVideosType[] = [
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      views: 123125,
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      views: 123125,
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      views: 123125,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {relatedVideos.map((relatedVideo, index) => (
        <div className="flex gap-2 relative" key={index}>
          <div
            style={{ flex: 2 }}
            className="rounded-lg bg-gray-400 aspect-video"
          >
            video
          </div>
          <div style={{ flex: 3 }} className="flex flex-col">
            <h2 className="font-semibold line-clamp-2">
              {relatedVideo.videoTitle}
            </h2>
            <p className="text-sm text-secondary-text">
              {relatedVideo.channelName}
            </p>
            <p className="text-sm text-secondary-text">
              {relatedVideo.channelName}
            </p>
          </div>
          <Button
            className="absolute top-0 right-0 rounded-full w-9 h-9 flex items-center justify-center"
            variant="ghost"
          >
            <MoreVertIcon fontSize="small" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
