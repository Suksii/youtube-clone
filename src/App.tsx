import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";

function App() {
  const videoData = [
    {
      id: 1,
      title: "Create Spotify Clone Using React JS & Tailwind CSS",
      channel: "GreatStack",
      channelImg: "",
      views: 1231513,
      postedAt: new Date(),
      thumbnailUrl: "https://i3.ytimg.com/vi/amFYvQK4huo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: 12362,
    },
    {
      id: 2,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: 112364,
      postedAt: new Date("9/10/2023"),
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: 334,
    },
    {
      id: 3,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: 5188,
      postedAt: new Date(2023, 11, 20, 16, 0),
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: 864,
    },
    {
      id: 4,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: 5188,
      postedAt: new Date(2022, 3, 17, 12, 25),
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      duration: 432,
    },
    {
      id: 5,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: 5188,
      postedAt: new Date(2023, 11, 20, 16, 0),
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      duration: 447,
    },
  ];

  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <Sidebar />
        <div className="overflow-hidden px-6 py-4">
          <div className="sticky top-0 z-40">
            <Categories />
          </div>
          <div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] z-10">
            {videoData.map((video) => (
              <VideoContainer key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
