import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import VideoContainer from "./components/VideoContainer";

function App() {
  const videoData = [
    {
      id: 1,
      title: "Create Spotify Clone Using React JS & Tailwind CSS",
      channel: "GreatStack",
      channelImg: "",
      views: "109k",
      postedAt: "1 month ago",
      thumbnailUrl: "https://i3.ytimg.com/vi/amFYvQK4huo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: "59:47",
    },
    {
      id: 2,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: "5,188",
      postedAt: "1 hour ago",
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: "10:10",
    },
    {
      id: 3,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: "5,188",
      postedAt: "1 hour ago",
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JYm_RvV8MJM&t=11s",
      duration: "10:10",
    },
    {
      id: 4,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: "5,188",
      postedAt: "1 hour ago",
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      duration: "10:10",
    },
    {
      id: 5,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      channelImg: "",
      views: "5,188",
      postedAt: "1 hour ago",
      thumbnailUrl: "https://i3.ytimg.com/vi/JYm_RvV8MJM/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      duration: "10:10",
    },
  ];

  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <div className="grid grid-cols-[auto, 1fr] flex-grow overflow-auto">
        <div>Sidebar</div>
        <div className="overflow-hidden px-6 py-4">
          <div className="sticky top-0 z-20">
            <Categories />
          </div>
          <div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
