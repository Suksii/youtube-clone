import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
          <MenuIcon />
        </div>
        <p className="text-2xl font-semibold">YouTube</p>
      </div>
      <div className="flex items-center gap-2">
        <Search />
        <div className="p-2 bg-gray-200 hover:bg-gray-400 rounded-full cursor-pointer">
          <MicIcon />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="p-2 rounded-full hover:bg-gray-300 cursor-pointer">
          <VideoCallOutlinedIcon />
        </div>
        <div className="p-2 rounded-full hover:bg-neutral-300 cursor-pointer">
          <NotificationsNoneIcon />
        </div>
        <p className="py-1 px-3 bg-blue-500 rounded-full text-blue-50">D</p>
      </div>
    </div>
  );
};

export default Header;
