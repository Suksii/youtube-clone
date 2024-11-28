import { Sidebar } from "../Sidebar";
import Categories from "../Categories";
import VideoContainer from "../VideoContainer";
import { useEffect, useState } from "react";
import { Video } from "../../types/types";
import { request } from "../../utils/api";

const HomePage = () => {
  const [videosData, setVideosData] = useState<Video[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.get("/home");
        console.log(response.data);
        setVideosData(response.data?.data || []);
        setCategories(
          response.data?.filters?.map((item: any) => item?.filter) || []
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <Sidebar />
      <div className="overflow-hidden px-6 py-4">
        <div className="sticky top-0 z-40">
          <Categories categories={categories} />
        </div>
        <div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] z-10">
          {videosData
            .filter((video) => video.type == "video")
            .map((video) => (
              <VideoContainer key={video.videoId} {...video} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
