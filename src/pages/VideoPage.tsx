import Title from "../components/Title";
import RelatedVideos from "../components/RelatedVideos";
import { Link } from "react-router-dom";
import { useState } from "react";

const VideoPage = () => {
  // const videos = [
  //     {
  //         title:
  //     }
  // ]

  const [isExpanded, setIsExpanded] = useState(false);

  const maxChars = 300;
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const truncatedText =
    description.length > maxChars && !isExpanded
      ? description.slice(0, maxChars)
      : description;

  return (
    <div className="py-4 px-24">
      <div className="flex flex-col md:flex-row gap-6">
        <div style={{ flex: 3 }} className="flex flex-col gap-4">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="rounded-xl w-full h-full aspect-video"
          ></iframe>
          <h2 className="text-xl font-bold line-clamp-2">
            How To Handle Permissions Like A Senior Dev
          </h2>
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 rounded-full flex-shrink-0 bg-green-300" />
            <div className="flex flex-col gap-1 w-full">
              <Link
                to={``}
                className="w-fit font-semibold leading-3"
              >
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
          <div className="bg-secondary-border bg-opacity-20 w-full h-fit rounded-lg p-2 leading-5">
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
                    className="font-semibold cursor-pointer ml-1 inline-block"
                  >
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
        </div>

        <div style={{ flex: 1 }}>
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
