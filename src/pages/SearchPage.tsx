import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "../components/Button";
import Categories from "../components/Categories";
import TuneIcon from "@mui/icons-material/Tune";
import Title from "../components/Title";

const SearchPage = () => {
  type SearchedVideoType = {
    videoUrl: string;
    videoTitle: string;
    description: string;
    channelName: string;
    views: number;
    postedAt: string;
  };

  const searchedVideos: SearchedVideoType[] = [
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      description: "Description",
      channelName: "Channel Name",
      views: 123125,
      postedAt: "2 days ago",
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      description: "Description",
      channelName: "Channel Name",
      views: 123125,
      postedAt: "2 days ago",
    },
    {
      videoUrl: "",
      videoTitle: "YouTube video title",
      description: "Description",
      channelName: "Channel Name",
      views: 123125,
      postedAt: "2 days ago",
    },
  ];

  return (
    <div className="flex flex-col gap-5 px-6 w-full items-center">
      <div className="flex justify-between gap-2 items-center w-full max-w-screen-xl">
        <Categories />
        <Button
          variant="ghost"
          className="flex gap-1 rounded-full px-4 py-2 relative group"
        >
          <p className="">Filters</p>
          <TuneIcon fontSize="small" />
          <Title title="Search Filters" />
        </Button>
      </div>
      {searchedVideos.map((searchedVideo, index) => (
        <div key={index} className="flex gap-4 w-full max-w-screen-xl">
          <div className="bg-gray-100 h-full aspect-video rounded-xl flex-[4]"></div>
          <div className="flex flex-col relative flex-[5]">
            <h2
              className="text-xl font-semibold"
              title={searchedVideo.videoTitle}
            >
              {searchedVideo.videoTitle}
            </h2>
            <div className="text-sm text-secondary-text">
              {searchedVideo.views} views • {searchedVideo.postedAt}
            </div>
            <div className="flex items-center gap-2 my-3">
              <div className="h-6 w-6 bg-green-600 rounded-full" />
              <p className="text-secondary-text text-sm">
                {searchedVideo.channelName}
              </p>
            </div>
            <p className="text-secondary-text text-sm line-clamp-1">
              {searchedVideo.description}
            </p>
            <Button
              className="absolute top-0 right-0 rounded-full w-9 h-9 flex items-center justify-center"
              variant="ghost"
            >
              <MoreVertIcon />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
