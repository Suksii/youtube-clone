import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import Button from "./Button";
import { CommentsProps } from "../types/types";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Comment = ({
  textDisplay,
  authorDisplayName,
  authorProfileImageUrl,
  authorChannelUrl,
  publishedAt,
}: CommentsProps) => {
  return (
    <div className="flex gap-4">
      <Link to={authorChannelUrl}>
        {authorProfileImageUrl ? (
          <img
            src={authorProfileImageUrl}
            alt={authorDisplayName}
            className="flex-shrink-0 h-10 w-10 rounded-full text-[10px]"
          />
        ) : (
          <div className="flex items-center justify-center h-10 w-10 bg-green-600 rounded-full"></div>
        )}
      </Link>
      <div className="flex flex-col">
        <div className="flex gap-1">
          <h3 className="font-semibold text-sm">{authorDisplayName}</h3>
          <p className="text-sm text-secondary-text">{format(publishedAt)}</p>
        </div>
        <p>{textDisplay}</p>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbUpAltOutlinedIcon fontSize="small" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ThumbDownOffAltOutlinedIcon fontSize="small" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 px-6 font-semibold text-sm"
          >
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
