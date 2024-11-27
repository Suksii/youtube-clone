import RelatedVideos from "../RelatedVideos";

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
          style={{ flex: 1 }}
        >
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
