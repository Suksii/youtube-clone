import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "../Button";
const VideoPage = () => {
  // const videos = [
  //     {
  //         title:
  //     }
  // ]

  return (
    <div className="py-4 px-24">
      <div className="flex flex-col md:flex-row gap-6">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          className="rounded-xl w-full h-full aspect-video"
          style={{ flex: 3 }}
        ></iframe>
        <div
          className="bg-gray-200 rounded-xl p-4 flex-col"
          style={{ flex: 1 }}
        >
          <div className="flex gap-2 relative">
            <div style={{ flex: 2 }} className="rounded-xl bg-gray-400 aspect-video">
              video
            </div>
            <div style={{ flex: 3 }} className="flex flex-col">
              <h2 className="font-semibold line-clamp-2">
                YouTube video title
              </h2>
              <p className="text-sm text-secondary-text">Channel Name</p>
              <p className="text-sm text-secondary-text">Channel Name</p>
            </div>
            <Button className="absolute top-0 right-0 rounded-full w-8 h-8 flex items-center justify-center" variant="ghost">
              <MoreVertIcon fontSize="small"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
