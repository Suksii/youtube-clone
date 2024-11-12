import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Search from "./Search";
import Button from "./Button";
import { useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import LogoSection from "./LogoSection";

const Header = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <div className="flex items-center justify-between gap-10 px-4 py-2">
      <LogoSection isFullWidth={isFullWidth} />
      <div className={`${isFullWidth ? "flex" : "hidden md:flex"} flex-grow`}>
        <Search isFullWidth={isFullWidth} setIsFullWidth={setIsFullWidth} />
      </div>
      <div
        className={
          isFullWidth ? "hidden" : "flex flex-shrink-0 items-center md:gap-2"
        }
      >
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsFullWidth(true)}
        >
          <SearchIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <MicIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <VideoCallOutlinedIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <NotificationsNoneIcon />
        </Button>
        <p className="py-1 px-3 bg-blue-500 rounded-full text-blue-50">D</p>
      </div>
    </div>
  );
};

export default Header;
