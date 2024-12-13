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

  useEffect(() => {
    dispatch(getSearchedVideos(search_query));
  }, [dispatch]);

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
      {searchedResults.map((searchedVideo) => {
        console.log(searchedVideo.snippet);
        
        return (
          <VideoContainer
            key={searchedVideo.id || searchedVideo.etag}
            videoId={searchedVideo.id}
            title={searchedVideo.snippet.title}
            channelTitle={searchedVideo.snippet.channelTitle}
            channelId={searchedVideo.snippet.channelId}
            thumbnails={searchedVideo.snippet.thumbnails}
            liveBroadcastContent={searchedVideo.snippet.liveBroadcastContent}
            description={searchedVideo.snippet.description}
            // viewCount={
            //   searchedVideo.statistics.viewCount &&
            //   searchedVideo.statistics?.viewCount
            // }
            duration={searchedVideo.contentDetails?.duration}
            publishedAt={
              searchedVideo.snippet.publishedAt &&
              searchedVideo.snippet?.publishedAt
            }
            isSearchPage
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
