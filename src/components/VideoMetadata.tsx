import { Link } from 'react-router-dom'
import Title from './Title'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SensorsIcon from "@mui/icons-material/Sensors";
import Button from './Button';
import { format } from 'timeago.js';
import { FormatView } from '../utils/FormatView';
import { ThumbnailType } from './VideoContainer';

type VideoMetadataProps = {
    isSearchPage: boolean | undefined;
    channelThumbnail: ThumbnailType | null;
    channelTitle: string;
    isLive: boolean;
    title: string;
    viewCount: string | undefined;
    description: string | undefined;
    publishedAt: string;
}

const VideoMetadata = ({isSearchPage, channelThumbnail, channelTitle, isLive, title, viewCount, description, publishedAt}: VideoMetadataProps) => {
  return (
    <div className="flex gap-2 w-full relative">
        {!isSearchPage && (
          <Link to={`/`} className="flex-shrink-0 relative h-fit">
            {channelThumbnail && channelThumbnail.url ? (
              <img
                src={channelThumbnail.url}
                title={channelTitle}
                className={`${
                  isLive ? "ring-2 ring-red-600" : ""
                } w-12 h-12 rounded-full object-cover`}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-green-300" />
            )}
            {isLive && (
              <div className="absolute p-0.5 bg-red-600 text-white  top-full -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-sm">
                <p className="uppercase text-[10px] font-semibold">Live</p>
              </div>
            )}
          </Link>
        )}
        <div className="flex flex-col gap-1">
          <Link to={``} className="font-bold line-clamp-2" title={title}>
            {title}
          </Link>
          {!isSearchPage && (
            <Link
              to={``}
              className="w-fit text-secondary-text text-sm relative group leading-3"
            >
              {channelTitle}
              <Title
                title={channelTitle}
                titlePosition="bottom-full left-1/2 -translate-x-1/2 mb-4"
              />
            </Link>
          )}
          {isSearchPage && (
            <div className="flex items-center gap-2">
              <Link to={`/`} className="flex-shrink-0 relative h-fit">
                {channelThumbnail && channelThumbnail.url ? (
                  <img
                    src={channelThumbnail.url}
                    title={channelTitle}
                    className={`${
                      isLive ? "ring-2 ring-red-600" : ""
                    } w-12 h-12 rounded-full object-cover`}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-green-300" />
                )}
                {isLive && !isSearchPage && (
                  <div className="absolute p-0.5 bg-red-600 text-white  top-full -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-sm">
                    <p className="uppercase text-[10px] font-semibold">Live</p>
                  </div>
                )}
              </Link>
              <Link
                to={``}
                className="w-fit text-secondary-text text-sm relative group leading-3"
              >
                {channelTitle}
                <Title
                  title={channelTitle}
                  titlePosition="bottom-full left-1/2 -translate-x-1/2 mb-4"
                />
              </Link>
            </div>
          )}
          <div
            className="text-secondary-text text-sm leading-3"
            title={`${viewCount && FormatView(viewCount)} views • ${format(
              publishedAt
            )}`}
          >
            {isLive && !isSearchPage ? (
              <span>{viewCount && FormatView(viewCount)} watching</span>
            ) : (
              <span>
                {viewCount && FormatView(viewCount)} views •{" "}
                {format(publishedAt)}
              </span>
            )}
          </div>
          {isSearchPage && (
            <p className="text-secondary-text text-sm line-clamp-1">
              {description}
            </p>
          )}
          {isLive && (
            <div className="flex gap-1 items-center w-fit px-0.5 bg-red-600 rounded-sm leading-4">
              <SensorsIcon className="text-white" fontSize="small" />
              <p className="text-white text-[12px] uppercase font-semibold">
                Live
              </p>
            </div>
          )}
        </div>
        <Button
          className="absolute top-0 right-0 rounded-full w-9 h-9 flex items-center justify-center"
          variant="ghost"
        >
          <MoreVertIcon />
        </Button>
      </div>
  )
}

export default VideoMetadata