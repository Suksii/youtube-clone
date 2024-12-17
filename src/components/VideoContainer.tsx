import { useEffect, useState } from "react";
import { VideoProps } from "../types/types";
import { request } from "../utils/api";
import Video from "./Video";
import VideoMetadata from "./VideoMetadata";

export type ThumbnailType = {
  url?: string;
};

const VideoContainer = ({
  videoId,
  title,
  channelTitle,
  channelId,
  thumbnails,
  liveBroadcastContent,
  description,
  publishedAt,
  isSearchPage,
}: VideoProps) => {
  const [isLive, setIsLive] = useState<boolean>(false);
  const [channelThumbnail, setChannelThumbnail] =
    useState<ThumbnailType | null>(null);
  const [duration, setDuration] = useState("");
  const [viewCount, setViewCount] = useState("");

  useEffect(() => {
    const getVideoMetadata = async () => {
      try {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails, statistics",
            id: videoId,
          },
        });

        console.log("Items:", items);
        setDuration(items[0].contentDetails.duration);
        setViewCount(items[0].statistics.viewCount);
      } catch (error) {
        console.error(error);
      }
    };

    if (videoId) {
      getVideoMetadata();
    }
  }, [videoId]);

  useEffect(() => {
    const getChannelDetails = async () => {
      try {
        const {
          data: { items },
        } = await request("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        });

        setChannelThumbnail(items[0].snippet.thumbnails.default);
      } catch (error) {
        console.error(error);
      }
    };

    if (channelId) {
      getChannelDetails();
    }
  }, [channelId]);

  useEffect(() => {
    if (liveBroadcastContent == "LIVE") setIsLive(true);
  }, []);

  return (
    <div
      className={`flex ${
        isSearchPage ? "flex-row" : "flex-col"
      } gap-2 max-w-screen-lg mx-auto w-full`}
      key={`video-${videoId}`}
    >
      <div className={`${isSearchPage ? "md:flex-[3]" : ""}`}>
        <Video
          isSearchPage={isSearchPage}
          thumbnails={thumbnails}
          videoId={videoId}
          duration={duration}
        />
      </div>
      <div className={`${isSearchPage ? "md:flex-[5]" : ""}`}>
        <VideoMetadata
          isLive={isLive}
          isSearchPage={isSearchPage}
          channelThumbnail={channelThumbnail}
          channelTitle={channelTitle}
          title={title}
          description={description}
          viewCount={viewCount}
          publishedAt={publishedAt}
        />
      </div>
    </div>
  );
};

export default VideoContainer;
