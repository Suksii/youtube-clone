import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "../components/Button";
import Categories from "../components/Categories";
import TuneIcon from "@mui/icons-material/Tune";
import Title from "../components/Title";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getSearchedVideos } from "../redux/store/reducers/getHomePageVideos";
import { useLocation } from "react-router-dom";
import VideoContainer from "../components/VideoContainer";

const SearchPage = () => {
  const { searchedResults } = useAppSelector(
    (state) => state.homePageVideosSlice
  );
  const dispatch = useAppDispatch();
  const location = useLocation();
  const search_query = location.search.split("=")[1];
  console.log(search_query);

  useEffect(() => {
    dispatch(getSearchedVideos(search_query));
  }, [dispatch]);

  useEffect(() => {
    console.log("Searched results", searchedResults);
  }, []);

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
      {searchedResults.map(
        (searchedVideo) => {
          return (
            <VideoContainer
              key={searchedVideo.id || searchedVideo.etag}
              videoId={searchedVideo.id}
              title={searchedVideo.snippet.title}
              channelTitle={searchedVideo.snippet.channelTitle}
              channelId={searchedVideo.snippet.channelId}
              thumbnails={searchedVideo.snippet.thumbnails}
              liveBroadcastContent={searchedVideo.snippet.liveBroadcastContent}
              // viewCount={
              //   searchedVideo.statistics.viewCount &&
              //   searchedVideo.statistics?.viewCount
              // }
              duration={searchedVideo.contentDetails?.duration}
              publishedAt={
                searchedVideo.snippet.publishedAt &&
                searchedVideo.snippet?.publishedAt
              }
            />
          );
        }
        // <div key={index} className="flex gap-4 w-full max-w-screen-xl">
        //   {searchedVideo.snippet.thumbnails && (
        //     <img src={searchedVideo.snippet.thumbnails.high.url} className="rounded-xl"/>
        //   )}
        //   <div className="flex flex-col relative">
        //     <h2
        //       className="text-xl font-semibold"
        //       title={searchedVideo.snippet.title}
        //     >
        //       {searchedVideo.snippet.title}
        //     </h2>
        //     <div className="text-sm text-secondary-text">
        //       {searchedVideo.statistics.viewCount} views •{" "}
        //       {searchedVideo.statistics.viewCount}
        //     </div>
        //     <div className="flex items-center gap-2 my-3">
        //       <div className="h-6 w-6 bg-green-600 rounded-full" />
        //       <p className="text-secondary-text text-sm">
        //         {searchedVideo.snippet.channelTitle}
        //       </p>
        //     </div>
        //     <p className="text-secondary-text text-sm line-clamp-1">
        //       {searchedVideo.snippet.description}
        //     </p>
        //     <Button
        //       className="absolute top-0 right-0 rounded-full w-9 h-9 flex items-center justify-center"
        //       variant="ghost"
        //     >
        //       <MoreVertIcon />
        //     </Button>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default SearchPage;
