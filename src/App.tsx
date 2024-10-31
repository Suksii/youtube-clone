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
      views: "109k",
      postedAt: "1 month ago",
      thumbnailUrl: "",
      videoUrl: "",
      duration: "59:47",
    },
    {
      id: 2,
      title: "Fabiano Caruana vs Garry Kasparov",
      channel: "agadmator's Chess Channel",
      views: "5,188",
      postedAt: "1 hour ago",
      thumbnailUrl: "",
      videoUrl: "",
      duration: "10:10",
    },
  ];

  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto, 1fr] flex-grow overflow-auto">
        <div>Sidebar</div>
        <div className="overflow-hidden px-6 py-4">
          <div className="sticky top-0 z-20">
            <Categories />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] gap-4">
            {videoData.map((video) => (
              <VideoContainer key={video.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
