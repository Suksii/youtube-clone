import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Search from "./Search";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Button>
          <MenuIcon />
        </Button>
        <p className="text-2xl font-semibold">YouTube</p>
      </div>
      <div className="flex items-center gap-2">
        <Search />
        <Button>
          <MicIcon />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button>
          <VideoCallOutlinedIcon />
        </Button>
        <Button>
          <NotificationsNoneIcon />
        </Button>
        <p className="py-1 px-3 bg-blue-500 rounded-full text-blue-50">D</p>
      </div>
    </div>
  );
};

export default Header;
