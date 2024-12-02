import Title from "../components/Title";
import RelatedVideos from "../components/RelatedVideos";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Comments from "../components/Comments";

const VideoPage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const maxChars: number = 300;
  const description: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const truncatedText: string =
    description.length > maxChars && !isExpanded
      ? description.slice(0, maxChars)
      : description;

  return (
    <div className="py-4 px-6 md:px-24">
      <div className="flex flex-col md:flex-row gap-6">
        <div style={{ flex: 3 }} className="flex flex-col gap-4">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            allowFullScreen
            className="rounded-xl w-full h-full aspect-video"
          ></iframe>
          <h2 className="text-xl font-bold line-clamp-2 pb-2">
            How To Handle Permissions Like A Senior Dev
          </h2>
          <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-center">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full flex-shrink-0 bg-green-300" />
              <div className="flex flex-col gap-1 w-full">
                <Link to={``} className="w-fit font-semibold leading-3">
                  Channel Name
                  <Title
                    title={"Channel Name"}
                    titlePosition="bottom-full left-1/2 -translate-x-1/2 mb-4"
                  />
                </Link>
                <div className="text-secondary-text text-[12.5px] leading-3">
                  1.33M subscribers
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-secondary rounded-full">
                <div className="flex  gap-2 hover:bg-secondary-hover py-1.5 px-3 rounded-l-full cursor-pointer font-semibold">
                  <ThumbUpAltOutlinedIcon />
                  <p>1K</p>
                </div>
                <div className="border-l border-x-secondary-border h-6" />
                <div className="hover:bg-secondary-hover py-1.5 px-4 rounded-r-full cursor-pointer">
                  <ThumbDownOffAltOutlinedIcon />
                </div>
              </div>
              <div className="flex items-center gap-2 bg-secondary hover:bg-secondary-hover py-1.5 px-3 rounded-full cursor-pointer">
                <ReplyOutlinedIcon style={{ transform: "rotateY(180deg)" }} />
                <p className="font-semibold">Share</p>
              </div>
              <div className="flex items-center gap-2 bg-secondary hover:bg-secondary-hover py-1.5 px-3 rounded-full cursor-pointer">
                <TurnedInNotOutlinedIcon />
                <p className="font-semibold">Save</p>
              </div>
              <div className="bg-secondary hover:bg-secondary-hover p-1.5 rounded-full cursor-pointer">
                <MoreHorizOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="bg-secondary w-full h-fit rounded-lg p-2 leading-5">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold">226K views 1 day ago</h3>
              <p className="text-secondary-text">#hashtag</p>
            </div>
            <div className={isExpanded ? "" : ""}>
              <div className="w-full relative">
                {truncatedText}
                {description.length > maxChars && !isExpanded && (
                  <span
                    onClick={() => setIsExpanded(true)}
                    className="font-semibold cursor-pointer inline-block relative"
                  >
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-12 h-full bg-gradient-to-r from-secondary via-50% to-transparent"></div>
                    ...more
                  </span>
                )}
              </div>
              {isExpanded && (
                <>
                  <br />
                  <button
                    className="font-semibold"
                    onClick={() => setIsExpanded((prev) => !prev)}
                  >
                    Show Less
                  </button>
                </>
              )}
            </div>
          </div>
          <Comments />
        </div>

        <div style={{ flex: 1 }}>
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
