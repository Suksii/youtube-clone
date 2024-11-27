import { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";
import { request } from "./utils/api";
import { Video } from "./types/types";
import VideoPage from "./components/pages/VideoPage";

function App() {
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
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
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
      </div>
      <VideoPage />
    </>
  );
}

export default App;
