import { Menu, PlayArrow } from "@mui/icons-material";
import Button from "./Button";
import { useSidebar } from "../context/SidebarContext";

type LogoSectionProps = {
  isFullWidth?: boolean;
};

const LogoSection = ({ isFullWidth = false }: LogoSectionProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className={
        isFullWidth
          ? "hidden"
          : "flex flex-shrink-0 items-center gap-1 md:gap-2"
      }
    >
      <Button size="icon" variant="ghost" onClick={toggleSidebar}>
        <Menu />
      </Button>
      <div className="flex items-center gap-2" title="YT Clone">
        <div className="fancy bg-black text-white p-1">
          <PlayArrow />
        </div>
        <p className="text-2xl font-semibold">YTClone</p>
      </div>
    </div>
  );
};

export default LogoSection;
