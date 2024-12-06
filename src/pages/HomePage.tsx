import { Sidebar } from "../components/Sidebar";
// import Categories from "../components/Categories";
import VideoContainer from "../components/VideoContainer";
import { useEffect } from "react";
import { getHomePageVideos } from "../redux/store/reducers/getHomePageVideos";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state) => state.youtubeClone);

  useEffect(() => {
    dispatch(getHomePageVideos());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <Sidebar />
      <div className="overflow-hidden px-6 py-4">
        <div className="sticky top-0 z-40">
          {/* <Categories categories={categories} /> */}
        </div>

        {videos && videos.length > 0 ? (
          <div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] z-10 py-6">
            {videos.map((video) => {
              return (
                <VideoContainer
                  key={video.id || video.etag}
                  videoId={video.id}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  channelId={video.snippet.channelId}
                  thumbnails={video.snippet.thumbnails}
                  liveBroadcastContent={video.snippet.liveBroadcastContent}
                  viewCount={video.statistics.viewCount}
                  duration={video.contentDetails.duration}
                  publishedAt={video.snippet.publishedAt}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-2xl font-semibold">
            No videos found
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
