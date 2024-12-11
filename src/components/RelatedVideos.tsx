import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "./Button";
import { useEffect, useState } from "react";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getRelatedVideos } from "../redux/store/reducers/getHomePageVideos";

const RelatedVideos = ({ relatedToVideoId }: { relatedToVideoId?: string }) => {
  const dispatch = useAppDispatch();
  const { relatedVideos } = useAppSelector(
    (state) => state.homePageVideosSlice
  );
  useEffect(() => {
    if (relatedToVideoId) {
      dispatch(getRelatedVideos(relatedToVideoId));
    }
  }, [dispatch, relatedToVideoId]);

  console.log("Related Videos: ", relatedVideos);

  type RelatedVideosType = {
    videoUrl: string;
    videoTitle: string;
    thumbnails: string[];
    channelName: string;
    views: number;
  };
  const relatedVideosConst: RelatedVideosType[] = [
    {
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      thumbnails: [thumb1, thumb2, thumb3],
      views: 123125,
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      thumbnails: [thumb3, thumb2, thumb1],
      views: 123125,
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      channelName: "Channel Name",
      thumbnails: [thumb2, thumb3, thumb1],
      views: 123125,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [thumbnailIndex, setThumbnailIndex] = useState<number[]>(
    relatedVideos.map(() => 0)
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredIndex !== null) {
      interval = setInterval(() => {
        setThumbnailIndex((prevIndexes) =>
          prevIndexes.map((index, i) =>
            i === hoveredIndex
              ? (index + 1) % relatedVideos[hoveredIndex].thumbnails.length
              : index
          )
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <div className="flex flex-col gap-2">
      {relatedVideosConst.map((relatedVideo, index) => (
        <div
          className="flex relative gap-2"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            style={{ flex: 2 }}
            className="relative rounded-lg bg-gray-400 aspect-video"
          >
            <img
              src={relatedVideo.thumbnails[thumbnailIndex[index]]}
              alt="Video thumbnail"
              className="absolute inset-0 h-full w-full object-cover rounded-lg transition-opacity duration-500"
            />
          </div>
          <div style={{ flex: 3 }} className="flex flex-col cursor-pointer">
            <h2 className="font-semibold line-clamp-2">
              {relatedVideo.videoTitle}
            </h2>
            <p className="text-sm text-secondary-text">
              {relatedVideo.channelName}
            </p>
            <p className="text-sm text-secondary-text">
              {relatedVideo.views.toLocaleString()} views
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
